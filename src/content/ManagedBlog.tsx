import { useEffect } from 'react';
import { useLocale, languages, localizedPath } from '../i18n/Locale';
import { useSite, type Article } from './SiteContent';
import { Navigation, Footer } from '../components/Navigation';
import { ArticleBody } from '../components/ArticleBody';
import './managed-blog.css';

const date=(value:string,regional:string)=>{try{return new Date(value+'T00:00:00').toLocaleDateString(regional,{year:'numeric',month:'long',day:'numeric'});}catch{return value;}};
function ArticleCard({article,featured=false}:{article:Article;featured?:boolean}){const {locale,t}=useLocale();return <a data-translated className={'managed-article-card '+(featured?'managed-featured':'')} href={localizedPath('/blog/'+article.slug,locale)}><img src={article.image} alt={t(article.title)} loading="lazy"/><div><p className="managed-meta">{date(article.date,languages[locale].regional)} · {t(article.readTime)}</p><h2>{t(article.title)}<span aria-hidden="true">↗</span></h2><p className="managed-summary">{t(article.summary)}</p></div></a>;}
export function FeaturedArticleCard(){const {site}=useSite();const article=site.articles.find(a=>a.featured&&!a.draft)||site.articles.find(a=>!a.draft);return article?<ArticleCard article={article} featured/>:null;}
export function ManagedArticleCollection(){const {site}=useSite();return <>{site.articles.filter(a=>!a.draft).map(a=><ArticleCard article={a} key={a.id}/>)}</>;}
export function ManagedArticleDetail({slug}:{slug:string}){
  const {site}=useSite();const {locale,t}=useLocale();const article=site.articles.find(a=>a.slug===slug&&!a.draft);
  useEffect(()=>{if(article){document.title=t(article.seoTitle||article.title);document.querySelector('meta[name="description"]')?.setAttribute('content',t(article.seoDescription||article.summary));}},[article,locale,t]);
  if(!article)return <><Navigation/><main id="page-main" className="native-error"><h1>Article not found</h1><a href="/blog">Back to blog</a></main><Footer/></>;
  return <><Navigation/><main id="page-main" className="managed-article-detail" data-translated><header className="managed-article-header"><p className="managed-meta">{date(article.date,languages[locale].regional)} · {t(article.readTime)}</p><h1>{t(article.title)}</h1><p>{t(article.summary)}</p></header><img className="managed-article-cover" src={article.image} alt={t(article.title)}/><article className="managed-article-body"><ArticleBody slug={slug}/><p className="managed-author">{article.author} · {t(article.readTime)}</p></article><section className="managed-related"><h2>{t('Other resources')}</h2><div className="managed-related-grid">{site.articles.filter(a=>a.id!==article.id&&!a.draft).slice(0,3).map(a=><ArticleCard article={a} key={a.id}/>)}</div></section></main><Footer/></>;
}
