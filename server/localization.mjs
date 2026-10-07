import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const read=name=>JSON.parse(readFileSync(resolve('src/i18n',name),'utf8'));
const dictionaries={fa:read('fa.json'),ar:read('ar.json'),tr:read('tr.json')},labels=read('page-labels.json');
export const parts=pathname=>{const match=/^\/(en|fa|ar|tr)(?=\/|$)/.exec(pathname);return {locale:match?.[1]||'en',path:(match?pathname.slice(match[0].length):pathname).replace(/\/$/,'')||'/'};};
const localPath=(path,locale)=>locale==='en'?path:'/'+locale+(path==='/'?'':path);
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function localizedDocument(html,pathname,site,origin){
  let {locale,path}=parts(pathname);if(['/admin','/design-system'].includes(path))locale='en';
  const t=s=>{if(locale==='en')return s;const exact=site.translations?.[locale]?.[s]??dictionaries[locale]?.[s];return exact??(s.includes(' | ')?s.split(' | ').map(t).join(' | '):s);};
  const article=path.startsWith('/blog/')?site.articles.find(a=>!a.draft&&path==='/blog/'+a.slug):null;
  const label=t(article?.title||labels[path]||'Page not found');
  const title=article?t(article.seoTitle||article.title):label===site.settings.siteName?label:label+' | '+site.settings.siteName;
  const description=t(article?.seoDescription||article?.summary||'Bextudio — brand strategy, intelligent tools and professional executive solutions.');
  const dir=['fa','ar'].includes(locale)?'rtl':'ltr';
  const alternates=['en','fa','ar','tr'].map(lang=>`<link data-localized-seo rel="alternate" hreflang="${lang}" href="${escape(origin+localPath(path,lang))}">`).join('');
  return html.replace(/<html[^>]*>/,`<html lang="${locale}" dir="${dir}">`).replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${escape(description)}">`).replace('</head>',`<link data-localized-seo rel="canonical" href="${escape(origin+localPath(path,locale))}">${alternates}<link data-localized-seo rel="alternate" hreflang="x-default" href="${escape(origin+path)}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"></head>`);
}
export function sitemap(routes,site,origin){const paths=routes.filter(p=>!['/admin','/design-system','/test','/form'].includes(p)&&!p.startsWith('/blog/')&&!site.hiddenRoutes.includes(p));paths.push(...site.articles.filter(a=>!a.draft).map(a=>'/blog/'+a.slug));return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.flatMap(path=>['en','fa','ar','tr'].map(locale=>'<url><loc>'+escape(origin+localPath(path,locale))+'</loc></url>')).join('')+'</urlset>';}
