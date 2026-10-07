import Admin from './admin/Admin';
import labels from './i18n/page-labels.json';
import { localizedPath, routeParts, useLocale } from './i18n/Locale';
import { ContentEffects, useSite } from './content/SiteContent';
import { ManagedArticleDetail } from './content/ManagedBlog';
import { Component, lazy, Suspense, type ComponentType, type ReactNode, useEffect, useState } from 'react';
import routes from './content/routes.json';
import DesignSystem from './design-system/DesignSystem';
import { Authentication } from './components/Forms';
import { Navigation, Footer } from './components/Navigation';
import { AgentStore, Pricing, EmptyForm } from './pages/DraftPages';
import { usePageBehavior } from './components/usePageBehavior';

const modules=import.meta.glob<{default:ComponentType}>(['./pages/*.tsx','!./pages/DraftPages.tsx']);
const pages=new Map(routes.map(route=>[route.path,lazy(modules[`./pages/${route.module}.tsx`])]));
const normalize=(path:string)=>routeParts(decodeURI(path)).path;

class PageBoundary extends Component<{children:ReactNode},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<div className="native-error"><h1>The page could not be loaded.</h1><button className="primary-button" onClick={()=>location.reload()}>Try again</button></div>:this.props.children;}
}

function ActivePage({path,Page}:{path:string;Page:ComponentType}) {
  usePageBehavior(path);
  return <><Page/><ContentEffects path={path}/></>;
}

export function App(){
  const {site}=useSite();const {locale,t}=useLocale();
  const [path,setPath]=useState(normalize(location.pathname));
  useEffect(()=>{
    const update=()=>setPath(normalize(location.pathname));
    const click=(e:MouseEvent)=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const a=(e.target as Element).closest<HTMLAnchorElement>('a[href]');
      if(!a||a.target==='_blank'||a.hasAttribute('download'))return;
      const url=new URL(a.href,location.href);
      if(url.origin!==location.origin||url.hash)return;
      e.preventDefault();history.pushState(null,'',localizedPath(url.pathname,locale)+url.search);update();window.dispatchEvent(new Event('bextudio:navigate'));window.scrollTo({top:0,behavior:'instant'});
    };
    window.addEventListener('popstate',update);window.addEventListener('bextudio:navigate',update);document.addEventListener('click',click);
    return ()=>{window.removeEventListener('popstate',update);window.removeEventListener('bextudio:navigate',update);document.removeEventListener('click',click);};
  },[locale]);
  useEffect(()=>{
    const article=site.articles.find(a=>path==='/blog/'+a.slug);
    const label=t(article?.title||(labels as Record<string,string>)[path]||'Page not found');
    document.title=article?t(article.seoTitle||article.title):label===site.settings.siteName?label:label+' | '+site.settings.siteName;
    const description=document.querySelector('meta[name="description"]');
    description?.setAttribute('content',t(article?.seoDescription||article?.summary||'Bextudio — brand strategy, intelligent tools and professional executive solutions.'));
    for(const link of document.querySelectorAll('link[data-localized-seo]'))link.remove();
    for(const lang of ['en','fa','ar','tr'] as const){const link=document.createElement('link');link.rel='alternate';link.hreflang=lang;link.href=location.origin+localizedPath(path,lang);link.dataset.localizedSeo='';document.head.append(link);}
    const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=location.origin+localizedPath(path,locale);canonical.dataset.localizedSeo='';document.head.append(canonical);
  },[path,locale,t,site.articles,site.settings.siteName]);
  const ArticlePage=()=> <ManagedArticleDetail slug={path.slice('/blog/'.length)}/>;
  const Page=site.hiddenRoutes.includes(path)?undefined:path==='/admin'?Admin:path.startsWith('/blog/')?ArticlePage:path==='/design-system'?DesignSystem:path==='/authentication'?Authentication:path==='/agent-store'?AgentStore:path==='/pricing'?Pricing:path==='/form'?EmptyForm:pages.get(path);
  return <><a className="skip-link" href="#page-main">Skip to content</a><PageBoundary key={path}><Suspense fallback={<div className="native-loading" role="status">Loading Bextudio…</div>}>{Page?<ActivePage key={path} path={path} Page={Page}/>:<><Navigation/><main id="page-main" className="native-error"><h1>Page not found</h1><p>The page you’re looking for doesn’t exist.</p><a className="primary-button" href="/">Back to home</a></main><Footer/></>}</Suspense></PageBoundary></>;
}
