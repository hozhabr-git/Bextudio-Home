import { useLocale } from '../i18n/Locale';
import { useSite } from '../content/SiteContent';

// Owned editorial source, not a user-submitted or remote HTML feed.
export function ArticleBody({slug}:{slug:string}) {
  const {site}=useSite();const {t,locale}=useLocale();const article=site.articles.find(item=>item.slug===slug);
  if(!article)return null;
  const template=document.createElement('template');template.innerHTML=article.bodyHtml;
  if(locale!=='en')for(const block of template.content.querySelectorAll('p,h2,h3,h4,li,blockquote')){if(block.querySelector('p,li'))continue;const source=block.textContent||'',text=t(source);if(text!==source)block.textContent=text;}
  const html=template.innerHTML.replace(/<(h2|h3|p|li|ul|ol)(?=[ >])/g,(_match,tag:string)=>`<${tag} class="bex-text ${tag==='h2'?'bex-styles-preset-g7l7gd':tag==='h3'?'bex-styles-preset-12xuyja':tag==='ul'||tag==='ol'?'':'bex-styles-preset-1yscu76'}"`);
  return <div data-translated className="article-cms-content" dangerouslySetInnerHTML={{__html:html}}/>;
}
