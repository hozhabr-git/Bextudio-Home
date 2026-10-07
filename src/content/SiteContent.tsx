import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import originalArticles from './articles.json';
import { useLocale, localizedPath } from '../i18n/Locale';

export type Article=typeof originalArticles[number];
export type SiteData={translations:Record<string,Record<string,string>>;revision:number;settings:{siteName:string;dashboardUrl:string;dashboardLabel:string;footerText:string;navigation:{label:string;href:string;desktop:boolean}[]};edits:Record<string,string>;articles:Article[];tokenOverrides:Record<string,string>;assetOverrides:Record<string,string>;hiddenRoutes:string[]};
const initial:SiteData={translations:{},revision:0,settings:{siteName:'Bextudio',dashboardUrl:'https://app.bextudio.com/',dashboardLabel:'Dashboard',footerText:'© 2026 Bextudio',navigation:[{label:'Services',href:'/services',desktop:true},{label:'Projects',href:'/works',desktop:true},{label:'Agent Store',href:'/agent-store',desktop:false},{label:'Pricing',href:'/pricing',desktop:false},{label:'Blog',href:'/blog',desktop:false},{label:'Contact',href:'/contact',desktop:false}]},edits:{},articles:originalArticles,tokenOverrides:{},assetOverrides:{},hiddenRoutes:[]};
const Context=createContext<{site:SiteData;refresh:()=>Promise<void>}>({site:initial,refresh:async()=>{}});
export function SiteProvider({children}:{children:ReactNode}){
  const [site,setSite]=useState(initial);
  async function refresh(){try{const response=await fetch('/api/site');if(response.ok)setSite(await response.json());}catch{/* Local source still renders while API is unavailable. */}}
  useEffect(()=>{void refresh();const channel=new BroadcastChannel('bextudio-content');channel.onmessage=()=>{void refresh();};const focus=()=>{void refresh();};window.addEventListener('focus',focus);return()=>{channel.close();window.removeEventListener('focus',focus);};},[]);
  useEffect(()=>{
    let style=document.getElementById('site-theme') as HTMLStyleElement|null;
    if(!style){style=document.createElement('style');style.id='site-theme';document.head.append(style);}
    style.textContent=':root{'+Object.entries(site.tokenOverrides).map(([key,value])=>key+':'+value).join(';')+'}';
  },[site.tokenOverrides]);
  return <Context.Provider value={{site,refresh}}>{children}</Context.Provider>;
}
export const useSite=()=>useContext(Context);
export function EditableCopy({id,fallback,children}:{id:string;fallback:string;children:ReactNode}){
  const {site}=useSite();const {locale,t}=useLocale();
  const render=(text:string)=><span data-translated style={{display:'contents'}}>{t(text)}</span>;
  if(locale!=='en'&&fallback.includes('Privacy Policy')){const text=t(site.edits[id]??fallback),term=t('Privacy Policy'),parts=text.split(term);return <span data-translated style={{display:'contents'}}>{parts[0]}<a href={localizedPath('/',locale)}>{term}</a>{parts.slice(1).join(term)}</span>;}
  if(fallback==='© 2026 Bextudio')return render(site.settings.footerText);if(Object.hasOwn(site.edits,id))return render(site.edits[id]);
  for(const original of originalArticles){const current=site.articles.find(a=>a.id===original.id);if(!current)continue;for(const field of ['title','summary','readTime','author'] as const){if(fallback===original[field]&&current[field]!==original[field])return render(current[field]);}}
  return locale==='en'?<>{children}</>:render(fallback);
}
export function ContentEffects({path}:{path:string}){
  const {site}=useSite();
  useEffect(()=>{
    const replace=()=>{for(const image of document.querySelectorAll<HTMLImageElement>('img')){const original=image.dataset.originalSrc||image.getAttribute('src')||'';image.dataset.originalSrc=original;let target=site.assetOverrides[original];for(const article of originalArticles){const current=site.articles.find(a=>a.id===article.id);if(current&&original===article.image&&current.image!==article.image)target=current.image;}if(target){image.src=target;image.srcset='';}else if(image.getAttribute('src')!==original){image.src=original;}}};
    replace();const observer=new MutationObserver(replace);observer.observe(document.getElementById('root')!,{childList:true,subtree:true});return()=>observer.disconnect();
  },[path,site.assetOverrides,site.articles]);
  return null;
}
