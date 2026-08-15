import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { focusAreas } from '@/lib/site';
export function FocusGrid({limit}:{limit?:number}){const items=limit?focusAreas.slice(0,limit):focusAreas;return <div className="grid-3">{items.map(a=>{const I=a.icon;return <article className="card feature-card" key={a.title}><div className="icon-box"><I size={24}/></div><h3 style={{marginTop:16}}>{a.title}</h3><p>{a.description}</p><Link className="read-more" href={a.title==='Healthcare'?'/healthcare':a.title==='Education'?'/education':a.title==='Flood Relief'?'/flood-relief':'/focus-areas'}>Read more <ArrowRight size={14}/></Link></article>})}</div>}
