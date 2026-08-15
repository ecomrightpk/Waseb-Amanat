'use client';
import { useMemo, useState } from 'react';
import type { GalleryItem } from '@/types';
import { X } from 'lucide-react';
const fallbacks: GalleryItem[] = [
 {id:'g1',title:'Community outreach',category:'Community',media_type:'image',media_url:'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80',thumbnail_url:null,published:true,created_at:''},
 {id:'g2',title:'Education support',category:'Education',media_type:'image',media_url:'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80',thumbnail_url:null,published:true,created_at:''},
 {id:'g3',title:'Healthcare service',category:'Healthcare',media_type:'image',media_url:'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',thumbnail_url:null,published:true,created_at:''},
 {id:'g4',title:'Volunteer action',category:'Volunteers',media_type:'image',media_url:'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',thumbnail_url:null,published:true,created_at:''},
];
export function GalleryGrid({items}:{items:GalleryItem[]}){const data=items.length?items:fallbacks;const cats=useMemo(()=>['All',...Array.from(new Set(data.map(i=>i.category)))],[data]);const[a,setA]=useState('All');const[open,setOpen]=useState<GalleryItem|null>(null);const shown=a==='All'?data:data.filter(i=>i.category===a);return <><div className="filter-bar">{cats.map(c=><button className={`filter-pill ${a===c?'active':''}`} key={c} onClick={()=>setA(c)}>{c}</button>)}</div><div className="masonry">{shown.map(i=><button aria-label={`Open ${i.title}`} style={{border:0,padding:0,background:'transparent',width:'100%'}} className="gallery-item" key={i.id} onClick={()=>setOpen(i)}><img loading="lazy" src={i.thumbnail_url||i.media_url} alt={i.title}/><span className="gallery-caption"><strong>{i.title}</strong><br/><small>{i.category}</small></span></button>)}</div>{open&&<div className="lightbox" onClick={()=>setOpen(null)}><button className="icon-btn" onClick={()=>setOpen(null)}><X/></button><img src={open.media_url} alt={open.title}/></div>}</>}
