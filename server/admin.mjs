import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { randomUUID, createHash, timingSafeEqual } from 'node:crypto';

const allowedTags=new Set(['p','h2','h3','h4','ul','ol','li','strong','em','a','br','blockquote']);
const validLink=value=>typeof value==='string'&&((value.startsWith('/')&&!value.startsWith('//'))||/^https?:\/\//.test(value)||/^mailto:/.test(value));
const cleanHtml=html=>String(html).replace(/<(script|style|iframe|object)[\s\S]*?<\/\1\s*>/gi,'').replace(/<\/?[^>]+>/g,tag=>{
  const match=/^<(\/?)([a-z0-9]+)/i.exec(tag);if(!match||!allowedTags.has(match[2].toLowerCase()))return '';
  const name=match[2].toLowerCase();if(match[1])return `</${name}>`;
  const href=/\bhref\s*=\s*["']([^"']*)["']/i.exec(tag)?.[1];
  return name==='a'&&validLink(href)?`<a href="${href.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" rel="noopener noreferrer">`:`<${name}>`;
});

export function createAdmin(db,dataDirectory,config){
  const source=resolve('src');
  const read=(name,fallback)=>{try{return JSON.parse(readFileSync(join(source,name),'utf8'));}catch{return fallback;}};
  const translations={fa:read('i18n/fa.json',{}),ar:read('i18n/ar.json',{}),tr:read('i18n/tr.json',{})};
  const originals={translations,translationSources:read('i18n/sources.json',[]),articles:read('content/articles.json',[]),tokens:read('design-system/tokens.json',{}),copy:read('content/copy-registry.json',[]),routes:JSON.parse(readFileSync(resolve('public/routes-manifest.json'),'utf8'))};
  const defaults={translations:{fa:{},ar:{},tr:{}},settings:{siteName:'Bextudio',dashboardUrl:'https://app.bextudio.com/',dashboardLabel:'Dashboard',footerText:'© 2026 Bextudio',navigation:[{label:'Services',href:'/services',desktop:true},{label:'Projects',href:'/works',desktop:true},{label:'Agent Store',href:'/agent-store',desktop:false},{label:'Pricing',href:'/pricing',desktop:false},{label:'Blog',href:'/blog',desktop:false},{label:'Contact',href:'/contact',desktop:false}]},edits:{},articles:originals.articles,tokenOverrides:{},assetOverrides:{},hiddenRoutes:[]};
  db.exec('CREATE TABLE IF NOT EXISTS site_content(id INTEGER PRIMARY KEY CHECK(id=1), payload TEXT NOT NULL, revision INTEGER NOT NULL); CREATE TABLE IF NOT EXISTS site_revisions(id INTEGER PRIMARY KEY, payload TEXT NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP, label TEXT NOT NULL);');
  db.prepare('INSERT OR IGNORE INTO site_content VALUES(1,?,0)').run(JSON.stringify(defaults));
  const current=()=>{const row=db.prepare('SELECT * FROM site_content WHERE id=1').get();return {...defaults,...JSON.parse(row.payload),revision:row.revision};};
  const uploads=join(dataDirectory,'uploads');mkdirSync(uploads,{recursive:true});
  function save(next,expected,label){
    const row=db.prepare('SELECT * FROM site_content WHERE id=1').get();
    if(expected!==row.revision)throw Object.assign(new Error('The site changed in another session. Reload before saving.'),{status:409});
    db.exec('BEGIN IMMEDIATE');try{db.prepare('INSERT INTO site_revisions(payload,label) VALUES(?,?)').run(row.payload,label);db.prepare('UPDATE site_content SET payload=?,revision=revision+1 WHERE id=1').run(JSON.stringify(next));db.exec('COMMIT');}catch(error){db.exec('ROLLBACK');throw error;}
    return current();
  }
  function validate(input){
    const result={...defaults};
    const s=input.settings;if(!s||typeof s.siteName!=='string'||s.siteName.length>100||!validLink(s.dashboardUrl)||!Array.isArray(s.navigation)||s.navigation.length>12)throw Object.assign(new Error('Check the site settings and navigation URLs.'),{status:400});
    result.settings={siteName:s.siteName,dashboardUrl:s.dashboardUrl,dashboardLabel:String(s.dashboardLabel).slice(0,80),footerText:String(s.footerText).slice(0,200),navigation:s.navigation.map(n=>{if(!validLink(n.href)||!n.label)throw Object.assign(new Error('Use a valid URL and label for every navigation item.'),{status:400});return {label:String(n.label).slice(0,80),href:n.href,desktop:!!n.desktop};})};
    result.edits={};for(const [key,value]of Object.entries(input.edits??{})){if(!/^[a-z0-9-]{1,80}$/i.test(key)||typeof value!=='string'||value.length>20000)throw Object.assign(new Error('Invalid page text.'),{status:400});result.edits[key]=value;}
    if(!Array.isArray(input.articles)||input.articles.length>1000)throw Object.assign(new Error('Invalid article collection.'),{status:400});
    const slugs=new Set();result.articles=input.articles.map(a=>{if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)||slugs.has(a.slug)||!a.title||!String(a.image??'').startsWith('/'))throw Object.assign(new Error('Each article needs a unique URL slug, title and local image.'),{status:400});slugs.add(a.slug);return {id:String(a.id||randomUUID()),slug:a.slug,title:String(a.title).slice(0,300),summary:String(a.summary??'').slice(0,2000),bodyHtml:cleanHtml(a.bodyHtml??''),image:String(a.image),date:String(a.date??''),author:String(a.author??''),readTime:String(a.readTime??''),featured:!!a.featured,draft:!!a.draft,seoTitle:String(a.seoTitle??a.title),seoDescription:String(a.seoDescription??a.summary??''),socialImage:String(a.socialImage||a.image)};});
    result.tokenOverrides={};for(const [key,value]of Object.entries(input.tokenOverrides??{})){const valid=Object.entries(originals.tokens).some(([group,items])=>Object.keys(items).some(name=>key===`--${group}-${name}`));if(!valid||typeof value!=='string'||value.length>200||/[;{}<>@]|url\s*\(/i.test(value))throw Object.assign(new Error('Invalid design token value.'),{status:400});result.tokenOverrides[key]=value;}
    result.assetOverrides={};for(const [key,value]of Object.entries(input.assetOverrides??{})){if(!key.startsWith('/assets/')||typeof value!=='string'||!/^\/(assets|uploads)\//.test(value))throw Object.assign(new Error('Choose a local media file.'),{status:400});result.assetOverrides[key]=value;}
    result.translations={fa:{},ar:{},tr:{}};
    for(const lang of ['fa','ar','tr'])for(const [key,value] of Object.entries(input.translations?.[lang]??{})){if(typeof value!=='string'||key.length>20000||value.length>20000)throw Object.assign(new Error('Invalid translation.'),{status:400});result.translations[lang][key]=value;}
    result.hiddenRoutes=(input.hiddenRoutes??[]).filter(path=>originals.routes.includes(path)&&!['/admin','/design-system'].includes(path));
    return result;
  }
  async function handle(req,res,url,api){
    const {json,body,session,issueSession}=api;
    if(url.pathname==='/api/site'&&req.method==='GET'){const site=current();return json(res,200,{...site,articles:site.articles.filter(a=>!a.draft)}),true;}
    if(!url.pathname.startsWith('/api/admin/'))return false;
    if(url.pathname==='/api/admin/login'&&req.method==='POST'){
      const data=await body(req);const hash=value=>createHash('sha256').update(value).digest();
      if(!config.ADMIN_PASSWORD)return json(res,503,{error:'Set ADMIN_EMAIL and ADMIN_PASSWORD in the local .env file.'}),true;
      if(String(data.email).toLowerCase()!==config.ADMIN_EMAIL?.toLowerCase()||!timingSafeEqual(hash(String(data.password)),hash(config.ADMIN_PASSWORD)))return json(res,401,{error:'The administrator credentials are incorrect.'}),true;
      issueSession(res,null,'admin');return json(res,200,{ok:true}),true;
    }
    if(session(req)?.kind!=='admin')return json(res,401,{error:'Administrator sign-in is required.'}),true;
    if(url.pathname==='/api/admin/content'&&req.method==='GET')return json(res,200,{site:current(),originals,contacts:db.prepare('SELECT * FROM contacts ORDER BY id DESC LIMIT 500').all(),subscribers:db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC LIMIT 500').all(),history:db.prepare('SELECT id,created_at,label FROM site_revisions ORDER BY id DESC LIMIT 100').all()}),true;
    if(url.pathname==='/api/admin/save'&&req.method==='POST'){const data=await body(req);return json(res,200,{site:save(validate(data.site),data.revision,'Saved in admin panel')}),true;}
    if(url.pathname==='/api/admin/restore'&&req.method==='POST'){const data=await body(req);const row=db.prepare('SELECT payload FROM site_revisions WHERE id=?').get(data.id);if(!row)return json(res,404,{error:'Revision not found.'}),true;return json(res,200,{site:save(JSON.parse(row.payload),data.revision,`Restored revision ${data.id}`)}),true;}
    if(url.pathname==='/api/admin/upload'&&req.method==='POST'){
      const data=await body(req),match=/^data:(image\/(?:png|jpeg|webp|gif));base64,([A-Za-z0-9+/=]+)$/.exec(String(data.dataUrl));
      if(!match)return json(res,400,{error:'Upload a PNG, JPEG, WebP or GIF image.'}),true;
      const buffer=Buffer.from(match[2],'base64'),type=match[1];if(buffer.length>10*1024*1024)return json(res,413,{error:'Images must be smaller than 10 MB.'}),true;
      const signature=type==='image/png'?buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):type==='image/jpeg'?buffer[0]===255&&buffer[1]===216:type==='image/webp'?buffer.toString('ascii',0,4)==='RIFF'&&buffer.toString('ascii',8,12)==='WEBP':/^GIF8[79]a$/.test(buffer.toString('ascii',0,6));
      if(!signature)return json(res,400,{error:'The file does not match its image type.'}),true;
      const file=`${randomUUID()}.${type.split('/')[1].replace('jpeg','jpg')}`;writeFileSync(join(uploads,file),buffer);return json(res,201,{path:'/uploads/'+file}),true;
    }
    return json(res,404,{error:'Admin route not found.'}),true;
  }
  return {handle,current,uploads};
}
