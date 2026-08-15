'use client';
import { useMemo, useState } from 'react';
import type { Project } from '@/types';
import { ProjectCard } from './Cards';
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const cats = useMemo(()=>['All',...Array.from(new Set(projects.map(p=>p.category)))],[projects]); const [active,setActive]=useState('All');
  const shown=active==='All'?projects:projects.filter(p=>p.category===active);
  return <><div className="filter-bar">{cats.map(c=><button key={c} className={`filter-pill ${active===c?'active':''}`} onClick={()=>setActive(c)}>{c}</button>)}</div><div className="grid-3">{shown.map(p=><ProjectCard key={p.id} project={p}/>)}</div></>
}
