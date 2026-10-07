import {parts, localizedDocument, sitemap} from './localization.mjs';
import { createAdmin } from './admin.mjs';
import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import { mkdirSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve, extname, sep } from 'node:path';

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const providerPaths=new Set(['/api/image/api/prompt','/api/image/api/generate','/api/video/api/image-prompt','/api/video/api/prompt-from-image','/api/video/api/generate','/api/campaign/api/chat','/api/storyteller/api/chat']);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.mp4':'video/mp4','.ttf':'font/ttf','.woff2':'font/woff2','.woff':'font/woff','.map':'application/json'};
const digest=s=>createHash('sha256').update(s).digest('hex');
function passwordHash(password,salt=randomBytes(16).toString('hex')){return `${salt}:${scryptSync(password,salt,64).toString('hex')}`;}
function verify(password,stored){const [salt,hash]=stored.split(':');const actual=scryptSync(password,salt,64);const expected=Buffer.from(hash,'hex');return actual.length===expected.length&&timingSafeEqual(actual,expected);}

export function createApp(options={}) {
  const config={...process.env,...options.env};
  const dataDirectory=options.dataDirectory??resolve('server/data');
  const distDirectory=options.distDirectory??resolve('dist');
  mkdirSync(dataDirectory,{recursive:true});
  const db=new DatabaseSync(join(dataDirectory,'bextudio.sqlite'));
  db.exec(`PRAGMA journal_mode=WAL;
    CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS subscribers(email TEXT PRIMARY KEY, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY, user_id INTEGER, kind TEXT NOT NULL, expires INTEGER NOT NULL);
  `);
  const admin=createAdmin(db,dataDirectory,config);
  const limiter=new Map();
  function json(res,status,payload){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(payload));}
  function session(req){const token=(req.headers.cookie??'').split(';').map(c=>c.trim()).find(c=>c.startsWith('bextudio_session='))?.split('=')[1];return token?db.prepare('SELECT * FROM sessions WHERE token_hash=? AND expires>?').get(digest(token),Date.now()):undefined;}
  function issueSession(res,userId,kind='account'){const token=randomBytes(32).toString('hex');db.prepare('DELETE FROM sessions WHERE expires<?').run(Date.now());db.prepare('INSERT INTO sessions VALUES(?,?,?,?)').run(digest(token),userId,kind,Date.now()+86400000);res.setHeader('Set-Cookie',`bextudio_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400${config.APP_ORIGIN?.startsWith('https:')?'; Secure':''}`);}
  async function body(req){if(!(req.headers['content-type']??'').includes('application/json'))throw Object.assign(new Error('Send JSON content.'),{status:415});let size=0;const chunks=[];for await(const chunk of req){size+=chunk.length;if(size>20*1024*1024)throw Object.assign(new Error('The request is too large.'),{status:413});chunks.push(chunk);}try{return JSON.parse(Buffer.concat(chunks).toString()||'{}');}catch{throw Object.assign(new Error('Invalid JSON request.'),{status:400});}}
  const server=createServer(async(req,res)=>{
    const url=new URL(req.url,'http://localhost');
    try {
      if(url.pathname.startsWith('/api/')){
        if(req.method==='POST'){
          const origin=req.headers.origin;
          const allowed=new Set([config.APP_ORIGIN??'http://127.0.0.1:5173',`http://${req.headers.host}`]);
          if(origin&&!allowed.has(origin))return json(res,403,{error:'This origin is not allowed.'});
          const key=`${req.socket.remoteAddress}:${url.pathname}`;const recent=(limiter.get(key)??[]).filter(t=>Date.now()-t<60000);
          if(recent.length>=30)return json(res,429,{error:'Please wait a moment before trying again.'});recent.push(Date.now());limiter.set(key,recent);
          if(limiter.size>2000)limiter.clear();
        }
        if(await admin.handle(req,res,url,{json,body,session,issueSession}))return;
        if(req.method==='GET'&&url.pathname==='/api/health')return json(res,200,{ok:true,storage:'local-sqlite',providers:{helio:!!config.HELIO_API_ORIGIN,openrouter:!!config.OPENROUTER_API_KEY}});
        if(req.method==='GET'&&url.pathname==='/api/auth/session'){const s=session(req);const user=s?.user_id?db.prepare('SELECT id,name,email FROM users WHERE id=?').get(s.user_id):null;return json(res,200,{user,agentAccess:!!s});}
        if(req.method!=='POST')return json(res,405,{error:'Method not allowed.'});
        const data=await body(req);
        if(url.pathname==='/api/contact'){
          const name=String(data.Name??data.name??'').trim(),email=String(data.Email??data.email??'').trim(),message=String(data.Text??data.message??'').trim();
          if(!name||name.length>200||!emailPattern.test(email)||email.length>254||!message||message.length>20000)return json(res,400,{error:'Enter your name, a valid email address and a message.'});
          const result=db.prepare('INSERT INTO contacts(name,email,message) VALUES(?,?,?)').run(name,email,message);
          if(config.CONTACT_WEBHOOK_URL){try{await fetch(config.CONTACT_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,message}),signal:AbortSignal.timeout(10000)});}catch{console.error('Contact saved; optional webhook delivery failed.');}}
          return json(res,201,{ok:true,id:Number(result.lastInsertRowid),saved:true});
        }
        if(url.pathname==='/api/newsletter'){const email=String(data.email??'').trim().toLowerCase();if(!emailPattern.test(email)||email.length>254)return json(res,400,{error:'Enter a valid email address.'});db.prepare('INSERT OR IGNORE INTO subscribers(email) VALUES(?)').run(email);return json(res,201,{ok:true,saved:true});}
        if(url.pathname==='/api/auth/signup'||url.pathname==='/api/auth/login'){
          const email=String(data.email??'').trim().toLowerCase(),password=String(data.password??'');
          if(!emailPattern.test(email)||email.length>254||password.length<8||password.length>100)return json(res,400,{error:'Enter a valid email address and a password of 8–100 characters.'});
          if(url.pathname.endsWith('signup')){
            const name=String(data.name??'').trim();if(!name||name.length>200)return json(res,400,{error:'Enter your name.'});
            if(db.prepare('SELECT id FROM users WHERE email=?').get(email))return json(res,409,{error:'An account with this email already exists.'});
            const result=db.prepare('INSERT INTO users(name,email,password_hash) VALUES(?,?,?)').run(name,email,passwordHash(password));issueSession(res,Number(result.lastInsertRowid));return json(res,201,{ok:true});
          }
          const user=db.prepare('SELECT * FROM users WHERE email=?').get(email);
          if(!user||!verify(password,user.password_hash))return json(res,401,{error:'Email or password is incorrect.'});issueSession(res,user.id);return json(res,200,{ok:true});
        }
        if(url.pathname==='/api/auth/logout'){const s=session(req);if(s)db.prepare('DELETE FROM sessions WHERE token_hash=?').run(s.token_hash);res.setHeader('Set-Cookie','bextudio_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0');return json(res,200,{ok:true});}
        if(url.pathname==='/api/agents/unlock'){
          if(session(req))return json(res,200,{ok:true});
          if(!config.AGENT_ACCESS_PASSWORD)return json(res,503,{error:'Agent access is not configured. Set AGENT_ACCESS_PASSWORD in the server .env file, or sign in to a local account.'});
          const supplied=digest(String(data.password??'')),expected=digest(config.AGENT_ACCESS_PASSWORD);
          if(!timingSafeEqual(Buffer.from(supplied),Buffer.from(expected)))return json(res,401,{error:'The access password is incorrect.'});issueSession(res,null,'agent');return json(res,200,{ok:true});
        }
        if(url.pathname.startsWith('/api/providers/')){
          if(!session(req))return json(res,401,{error:'Sign in or unlock this agent before generating content.'});
          let target,headers={'Content-Type':'application/json'},payload=data;
          if(url.pathname==='/api/providers/openrouter'){
            if(!config.OPENROUTER_API_KEY)return json(res,503,{error:'Digital Twin needs an OpenRouter API key configured on the local server.'});
            target='https://openrouter.ai/api/v1/chat/completions';headers.Authorization=`Bearer ${config.OPENROUTER_API_KEY}`;payload={...data,model:config.OPENROUTER_MODEL||data.model};
          }else{
            const path=url.pathname.slice('/api/providers/helio'.length);
            if(!url.pathname.startsWith('/api/providers/helio/')||!providerPaths.has(path))return json(res,404,{error:'Provider route not found.'});
            if(!config.HELIO_API_ORIGIN)return json(res,503,{error:'Configure the existing Helio API origin on the local server.'});
            target=new URL(path,config.HELIO_API_ORIGIN).href;
            if(config.HELIO_API_TOKEN)headers.Authorization=`Bearer ${config.HELIO_API_TOKEN}`;
          }
          const upstream=await fetch(target,{method:'POST',headers,body:JSON.stringify(payload),signal:AbortSignal.timeout(480000)});
          const content=await upstream.text();
          if(!upstream.ok)return json(res,upstream.status,{error:`The generation service returned status ${upstream.status}. Please try again or check the server configuration.`});
          res.writeHead(upstream.status,{'Content-Type':upstream.headers.get('content-type')||'application/json','Cache-Control':'no-store'});return res.end(content);
        }
        return json(res,404,{error:'API route not found.'});
      }
      if(req.method!=='GET'&&req.method!=='HEAD')return json(res,405,{error:'Method not allowed.'});
      if(url.pathname.startsWith('/uploads/')){const file=resolve(admin.uploads,url.pathname.slice('/uploads/'.length));if(!file.startsWith(admin.uploads+sep)||!existsSync(file))return json(res,404,{error:'Media not found.'});const bytes=readFileSync(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Content-Length':bytes.length});return res.end(req.method==='HEAD'?undefined:bytes);}
      if(url.pathname==='/sitemap.xml'){const routes=JSON.parse(readFileSync(resolve('public/routes-manifest.json'),'utf8'));const xml=sitemap(routes,admin.current(),config.SITE_URL||url.origin);res.writeHead(200,{'Content-Type':'application/xml; charset=utf-8'});return res.end(xml);}
      const requested=resolve(distDirectory,'.'+decodeURIComponent(url.pathname));
      if(!requested.startsWith(distDirectory+sep)&&requested!==distDirectory)return json(res,403,{error:'Forbidden.'});
      let file=existsSync(requested)&&extname(requested)?requested:join(distDirectory,'index.html');
      if(!existsSync(file))return json(res,404,{error:'Run npm run build, or use npm run dev to start the source project.'});
      const knownRoutes=existsSync(join(distDirectory,'routes-manifest.json'))?JSON.parse(readFileSync(join(distDirectory,'routes-manifest.json'),'utf8')):[];
      const site=admin.current(),pagePath=parts(url.pathname).path;
      const known=pagePath.startsWith('/blog/')?site.articles.some(a=>!a.draft&&pagePath==='/blog/'+a.slug):knownRoutes.includes(pagePath);
      const status=file===join(distDirectory,'index.html')&&(!known||site.hiddenRoutes.includes(pagePath))?404:200;
      const buffer=extname(file)==='.html'?Buffer.from(localizedDocument(readFileSync(file,'utf8'),url.pathname,site,config.SITE_URL||url.origin)):readFileSync(file);res.setHeader('Content-Type',mime[extname(file)]||'application/octet-stream');res.setHeader('X-Content-Type-Options','nosniff');
      if(extname(file)==='.html')res.setHeader('Cache-Control','no-cache');
      const range=req.headers.range;
      if(range&&extname(file)==='.mp4'){
        const match=/^bytes=(\d+)-(\d*)$/.exec(range);if(!match)return json(res,416,{error:'Invalid range.'});
        const start=Number(match[1]),end=Math.min(match[2]?Number(match[2]):buffer.length-1,buffer.length-1);
        if(start>end||start>=buffer.length){res.writeHead(416,{'Content-Range':`bytes */${buffer.length}`});return res.end();}
        res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${buffer.length}`,'Accept-Ranges':'bytes','Content-Length':end-start+1});return res.end(req.method==='HEAD'?undefined:buffer.subarray(start,end+1));
      }
      res.writeHead(status,{'Content-Length':buffer.length});res.end(req.method==='HEAD'?undefined:buffer);
    } catch(error){json(res,error.status??502,{error:error.status?error.message:'The service could not be reached. Please check the local server configuration and try again.'});}
  });
  server.on('close',()=>db.close());
  return server;
}
