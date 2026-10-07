import { LanguageSwitcher, localizedPath, routeParts, useLocale } from '../i18n/Locale';
import { useSite } from '../content/SiteContent';
import { useEffect, useRef, useState } from 'react';
import { asset } from '../content/assets';



export function Navigation() {
  const {site}=useSite();const {locale,t}=useLocale();const links=site.settings.navigation.filter(n=>n.desktop).map(n=>[n.label,n.href]);const allLinks=site.settings.navigation.map(n=>[n.label,n.href]);
  const [open,setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const key = (e:KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (e.key === 'Tab') {
        const items=[toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
        const first=items[0], last=items.at(-1);
        if (e.shiftKey && document.activeElement===first) { e.preventDefault();last?.focus(); }
        if (!e.shiftKey && document.activeElement===last) { e.preventDefault();first?.focus(); }
      }
    };
    const resize=()=>{ if(window.innerWidth>=810)setOpen(false); };
    document.addEventListener('keydown',key);window.addEventListener('resize',resize);
    return ()=>{document.removeEventListener('keydown',key);window.removeEventListener('resize',resize);};
  },[open]);
  return <header className="native-nav">
    <div className="native-nav-inner">
      <a href={localizedPath('/',locale)} className="brand-logo" aria-label="Bextudio home"><img src={asset('2zYRIIwpAQvIRrzdUstH5gpEjAE.png')} alt="Bextudio" width="108" height="35" /></a>
      <nav className="native-desktop-links" aria-label="Main navigation">
        {links.map(([label,href])=><a key={href} href={localizedPath(href,locale)} aria-current={routeParts(location.pathname).path===href?'page':undefined}>{t(label)}</a>)}
      </nav>
      <LanguageSwitcher onOpen={()=>setOpen(false)}/><a className="native-dashboard" href={site.settings.dashboardUrl}>{t(site.settings.dashboardLabel)}</a>
      <button ref={toggle} type="button" className="native-menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button>
    </div>
    {open && <nav id="mobile-menu" className="native-mobile-links" ref={panel} aria-label="Mobile navigation">{allLinks.map(([label,href])=><a key={href} href={localizedPath(href,locale)} onClick={()=>setOpen(false)}>{t(label)}</a>)}<a href={site.settings.dashboardUrl}>{t(site.settings.dashboardLabel)}</a></nav>}
  </header>;
}

export function Footer() { const {site}=useSite();return <footer className="native-footer">{site.settings.footerText}</footer>; }

export function CustomAgentCTA() { return <section className="custom-agent-cta"><div><h2>Need a Custom AI Agent?</h2><p>Our team can build a tailored solution specifically for your business requirements.</p></div><a className="primary-button" href="/contact">Contact Us</a></section>; }
