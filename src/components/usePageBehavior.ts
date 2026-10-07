import { useEffect } from 'react';

export function usePageBehavior(path:string) {
  useEffect(()=>{
    const cleanups:(()=>void)[]=[];
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const videos=Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-native-video]'));
    const observer=new IntersectionObserver(entries=>{for(const entry of entries){const v=entry.target as HTMLVideoElement;if(entry.isIntersecting&&!reduce){v.muted=true;void v.play().catch(()=>{});}else v.pause();}},{threshold:.2});
    for(const video of videos){observer.observe(video);if(reduce)video.controls=true;}
    for(const button of document.querySelectorAll<HTMLButtonElement>('button[aria-label="pause"]')){
      const video=button.closest('[data-design-name="On Pause"]')?.querySelector('video') ?? button.parentElement?.querySelector('video');
      if(!video)continue;const click=()=>{if(video.paused){void video.play();button.setAttribute('aria-label','Pause video');}else{video.pause();button.setAttribute('aria-label','Play video');}};
      button.addEventListener('click',click);cleanups.push(()=>button.removeEventListener('click',click));
    }
    // Convert the original carousel's static layout to native scrolling and buttons.
    for(const list of document.querySelectorAll<HTMLElement>('[aria-roledescription="carousel"] ul')){
      if(!list.querySelector('[aria-roledescription="slide"]')&&!list.closest('[aria-roledescription="carousel"]'))continue;
      const viewport=list;viewport.classList.add('native-carousel-viewport');list.classList.add('native-carousel-track');
      const section=list.closest('[aria-roledescription="carousel"]');
      for(const button of section?.querySelectorAll<HTMLButtonElement>('button')??[]){const label=(button.getAttribute('aria-label')??button.textContent??'').toLowerCase();const direction=label.includes('previous')?-1:label.includes('next')?1:0;if(!direction)continue;button.style.pointerEvents='auto';button.disabled=false;const click=()=>viewport.scrollBy({left:(document.documentElement.dir==='rtl'?-1:1)*direction*Math.min(viewport.clientWidth,416),behavior:reduce?'instant':'smooth'});button.addEventListener('click',click);cleanups.push(()=>button.removeEventListener('click',click));}
    }
    // The centered controls sit outside the carousel's responsive variants.
    for(const button of document.querySelectorAll<HTMLButtonElement>('button[aria-label="Previous slide"], button[aria-label="Next slide"]')){
      let container=button.parentElement;
      while(container&&!container.querySelector('[aria-roledescription="carousel"] ul'))container=container.parentElement;
      if(!container)continue;
      const group=container,direction=button.getAttribute('aria-label')==='Next slide'?1:-1;
      button.style.pointerEvents='auto';button.disabled=false;
      const click=()=>{
        const list=Array.from(group.querySelectorAll<HTMLElement>('[aria-roledescription="carousel"] ul')).find(x=>x.clientWidth>0);
        list?.scrollBy({left:(document.documentElement.dir==='rtl'?-1:1)*direction*Math.min(list.clientWidth,416),behavior:reduce?'instant':'smooth'});
      };
      button.addEventListener('click',click);cleanups.push(()=>button.removeEventListener('click',click));
    }
    for(const list of document.querySelectorAll<HTMLElement>('[data-design-name="Logos"] ul')){
      if(reduce)continue;
      const clones=Array.from(list.children).map(child=>{const clone=child.cloneNode(true) as HTMLElement;clone.setAttribute('aria-hidden','true');list.append(clone);return clone;});
      list.classList.add('native-logo-marquee');
      cleanups.push(()=>{clones.forEach(x=>x.remove());list.classList.remove('native-logo-marquee');});
    }
    return ()=>{observer.disconnect();cleanups.forEach(fn=>fn());};
  },[path]);
}
