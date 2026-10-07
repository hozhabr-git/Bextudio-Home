import { useEffect, useState, type HTMLAttributes } from 'react';

type Breakpoint = {hash:string;mediaQuery?:string};
export function ResponsiveRoot({breakpoints,className='',...props}:HTMLAttributes<HTMLDivElement>&{breakpoints:Breakpoint[]}) {
  const select=()=>breakpoints.find(b=>(!b.mediaQuery || window.matchMedia(b.mediaQuery).matches))?.hash ?? breakpoints[0]?.hash;
  const [hash,setHash]=useState(select);
  useEffect(()=>{
    const queries=breakpoints.filter(b=>b.mediaQuery).map(b=>window.matchMedia(b.mediaQuery!));
    const update=()=>setHash(select());
    queries.forEach(q=>q.addEventListener('change',update));update();
    return ()=>queries.forEach(q=>q.removeEventListener('change',update));
  },[JSON.stringify(breakpoints)]);
  const base=className.split(' ').filter(c=>!breakpoints.some(b=>c===`bex-${b.hash}`));
  return <div {...props} className={[...base,`bex-${hash}`].join(' ')}/>;
}
