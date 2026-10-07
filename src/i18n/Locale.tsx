import { createContext, useContext, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useSite } from '../content/SiteContent';
import fa from './fa.json';
import ar from './ar.json';
import tr from './tr.json';
import './locale.css';

export const languages={en:{name:'English',dir:'ltr',regional:'en-GB'},fa:{name:'فارسی',dir:'rtl',regional:'fa-IR'},ar:{name:'العربية',dir:'rtl',regional:'ar'},tr:{name:'Türkçe',dir:'ltr',regional:'tr-TR'}} as const;
export type Locale=keyof typeof languages;
export const dictionaries:Record<Exclude<Locale,'en'>,Record<string,string>>={fa,ar,tr};
export function translateText(source:string,locale:Locale,overrides:Record<string,string>={}):string{if(locale==='en')return source;const exact=overrides[source]??dictionaries[locale][source]??dictionaries[locale][source.trim()];if(exact!==undefined)return exact;if(source.includes(' | '))return source.split(' | ').map(part=>translateText(part,locale,overrides)).join(' | ');return source;}
export function routeParts(path:string){const match=/^\/(en|fa|ar|tr)(?=\/|$)/.exec(path);return {locale:(match?.[1]||'en') as Locale,path:(match?path.slice(match[0].length):path).replace(/\/$/,'')||'/'};}
export function localizedPath(path:string,locale:Locale){const base=routeParts(path).path;if(/^\/(admin|design-system|api|assets|uploads)(?:\/|$)/.test(base))return base;return locale==='en'?base:'/'+locale+(base==='/'?'':base);}
type ContextValue={locale:Locale;t:(source:string)=>string;setLocale:(locale:Locale)=>void};
const Context=createContext<ContextValue>({locale:'en',t:s=>s,setLocale:()=>{}});
export const useLocale=()=>useContext(Context);
export function LocaleProvider({children}:{children:ReactNode}){
  const {site}=useSite();const read=()=>/^\/(admin|design-system)/.test(routeParts(location.pathname).path)?'en':routeParts(location.pathname).locale;
  const [locale,change]=useState<Locale>(read);
  const value=useMemo<ContextValue>(()=>({locale,t:(source)=>translateText(source,locale,site.translations?.[locale]),setLocale:(next)=>{history.pushState(null,'',localizedPath(location.pathname,next)+location.search+location.hash);window.dispatchEvent(new Event('bextudio:navigate'));}}),[locale,site.translations]);
  useEffect(()=>{const update=()=>change(read());window.addEventListener('popstate',update);window.addEventListener('bextudio:navigate',update);return()=>{window.removeEventListener('popstate',update);window.removeEventListener('bextudio:navigate',update);};},[]);
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=languages[locale].dir;},[locale]);
  return <Context.Provider value={value}>{children}<LegacyTranslationAdapter/></Context.Provider>;
}

// The extracted static page trees and original tool UIs retain their markup.
// React-owned editorial blocks use t() directly; this adapter covers legacy labels.
const textSources=new WeakMap<Text,{source:string;last:string}>();
const attributeSources=new WeakMap<Element,Map<string,{source:string;last:string}>>();
function LegacyTranslationAdapter(){
  const {locale,t}=useLocale();
  useEffect(()=>{
    const root=document.getElementById('root')!;let frame=0;
    const apply=()=>{
      frame=0;observer.disconnect();
      if(!/^\/(admin|design-system)/.test(routeParts(location.pathname).path)){
        const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
        let node:Text|null;while((node=walker.nextNode() as Text|null)){
          if(node.parentElement?.closest('script,style,code,pre,textarea,input,[data-translated],.language-switcher'))continue;
          const current=node.data;let entry=textSources.get(node);
          if(!entry||current!==entry.last)entry={source:current,last:current};
          const trimmed=entry.source.trim(),translated=t(trimmed);const next=translated===trimmed?entry.source:entry.source.replace(trimmed,()=>translated);
          entry.last=next;textSources.set(node,entry);if(current!==next)node.data=next;
        }
        for(const element of root.querySelectorAll('[placeholder],[aria-label],[title],img[alt]')){
          if(element.closest('[data-translated],.language-switcher'))continue;
          let entries=attributeSources.get(element);if(!entries){entries=new Map();attributeSources.set(element,entries);}
          for(const attr of ['placeholder','aria-label','title','alt']){const current=element.getAttribute(attr);if(current===null)continue;let entry=entries.get(attr);if(!entry||current!==entry.last)entry={source:current,last:current};const next=t(entry.source);entry.last=next;entries.set(attr,entry);if(current!==next)element.setAttribute(attr,next);}
        }
        for(const a of root.querySelectorAll<HTMLAnchorElement>('a[href]')){
          const href=a.getAttribute('href')||'';
          if(!href.startsWith('/')||href.startsWith('//'))continue;
          const url=new URL(href,location.origin);a.setAttribute('href',localizedPath(url.pathname,locale)+url.search+url.hash);
        }
      }
      observer.observe(root,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','alt']});
    };
    const observer=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(apply);});apply();
    const navigate=()=>{if(!frame)frame=requestAnimationFrame(apply);};window.addEventListener('bextudio:navigate',navigate);window.addEventListener('popstate',navigate);
    return()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('bextudio:navigate',navigate);window.removeEventListener('popstate',navigate);};
  },[locale,t]);
  return null;
}
const localeOptions=Object.keys(languages) as Locale[];
export function LanguageSwitcher({onOpen}:{onOpen?:()=>void}){
  const {locale,setLocale,t}=useLocale();
  const [open,setOpen]=useState(false);
  const root=useRef<HTMLDivElement>(null),trigger=useRef<HTMLButtonElement>(null),menu=useRef<HTMLDivElement>(null);
  const initialFocus=useRef<Locale>(locale),menuId=useId();
  const show=(focus:Locale=locale)=>{initialFocus.current=focus;onOpen?.();setOpen(true);};
  useEffect(()=>{
    if(!open)return;
    menu.current?.querySelector<HTMLButtonElement>(`[data-locale="${initialFocus.current}"]`)?.focus();
    const outside=(event:PointerEvent)=>{if(!root.current?.contains(event.target as Node))setOpen(false);};
    const close=()=>{if(menu.current?.contains(document.activeElement))trigger.current?.focus();setOpen(false);};
    document.addEventListener('pointerdown',outside);
    window.addEventListener('bextudio:navigate',close);window.addEventListener('popstate',close);window.addEventListener('resize',close);
    return()=>{document.removeEventListener('pointerdown',outside);window.removeEventListener('bextudio:navigate',close);window.removeEventListener('popstate',close);window.removeEventListener('resize',close);};
  },[open]);
  const keyboard=(event:KeyboardEvent<HTMLDivElement>)=>{
    if(event.key==='Escape'&&open){event.preventDefault();event.stopPropagation();setOpen(false);trigger.current?.focus();return;}
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    if(!open){if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();show(event.key==='ArrowDown'?localeOptions[0]:localeOptions.at(-1)!);}return;}
    event.preventDefault();
    const current=localeOptions.indexOf(document.activeElement?.getAttribute('data-locale') as Locale);
    const next=event.key==='Home'?0:event.key==='End'?localeOptions.length-1:(current+(event.key==='ArrowDown'?1:-1)+localeOptions.length)%localeOptions.length;
    menu.current?.querySelector<HTMLButtonElement>(`[data-locale="${localeOptions[next]}"]`)?.focus();
  };
  return <div className="language-switcher" ref={root} onKeyDown={keyboard} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setOpen(false);}}>
    <button className="language-switcher-trigger" type="button" ref={trigger} aria-label={`${t('Language')}: ${languages[locale].name}`} aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} onClick={()=>open?setOpen(false):show()}><span className="language-switcher-code" aria-hidden="true" dir="ltr">{locale.toUpperCase()}</span></button>
    {open&&<div className="language-switcher-menu" id={menuId} ref={menu} role="menu" aria-label={t('Language')}>{localeOptions.map(id=><button className="language-switcher-option" type="button" key={id} role="menuitemradio" tabIndex={-1} aria-checked={id===locale} aria-label={languages[id].name} data-locale={id} lang={id} onClick={()=>{setOpen(false);trigger.current?.focus();if(id!==locale)setLocale(id);}}><span className="language-switcher-option-name" dir={languages[id].dir}>{languages[id].name}</span><span className="language-switcher-option-meta" aria-hidden="true"><span className="language-switcher-option-code" dir="ltr">{id.toUpperCase()}</span><span className="language-switcher-option-check">{id===locale&&<svg viewBox="0 0 16 16" fill="none"><path d="m3.5 8 3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</span></span></button>)}</div>}
  </div>;
}

export function AgentMessage({text,role}:{text:string;role:string}){const {t}=useLocale();return <span data-translated style={{display:"contents"}}>{role==="user"?text:t(text)}</span>;}
