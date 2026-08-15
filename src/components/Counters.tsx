'use client';
import { useEffect, useRef, useState } from 'react';
const stats = [
  ['25K+','Families Supported'],['12K+','Children Reached'],['180+','Medical Camps'],['1.6K+','Volunteers'],['42K+','Relief Packages'],['850+','Scholarships'],['74','Water Projects'],['95K+','Trees Planted'],['PKR 85M+','Aid Mobilized']
];
export function Counters() {
  const ref = useRef<HTMLDivElement>(null); const [on,setOn]=useState(false);
  useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);o.disconnect()}},{threshold:.2});o.observe(ref.current);return()=>o.disconnect()},[]);
  return <section className="section stats-band" ref={ref}><div className="container"><div className="section-head"><span className="eyebrow" style={{color:'#fff',borderColor:'rgba(255,255,255,.18)',background:'rgba(255,255,255,.08)'}}>Measured impact</span><h2 className="display-2">Local action. Measurable change.</h2><p>Illustrative launch figures below can be replaced from the admin/database once verified organizational data is available.</p></div><div className="stats-grid">{stats.map(([n,l],i)=><div className="stat-box" key={l}><strong>{on?n:'0'}</strong><span>{l}</span></div>)}</div></div></section>
}
