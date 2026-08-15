import Link from 'next/link';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import type { Event, NewsPost, Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  const pct = project.goal_amount > 0 ? Math.min(100, Math.round((project.raised_amount/project.goal_amount)*100)) : 0;
  return <article className="card"><div className="card-media"><img loading="lazy" src={project.image_url || '/placeholder.svg'} alt={project.title}/></div><div className="card-body"><div className="meta"><span className="badge">{project.category}</span><span><MapPin size={13}/>{project.location || 'South Punjab'}</span></div><h3>{project.title}</h3><p>{project.excerpt}</p><div className="progress" aria-label={`${pct}% funded`}><span style={{width:`${pct}%`}}/></div><div className="money-row"><span><strong>PKR {Number(project.raised_amount).toLocaleString()}</strong> raised</span><span>{pct}%</span></div><div className="row" style={{marginTop:16,justifyContent:'space-between'}}><span className="small"><Users size={14} style={{display:'inline',marginRight:5}}/>{project.beneficiaries.toLocaleString()} people</span><Link className="btn btn-primary btn-sm" href={`/projects/${project.slug}`}>View project</Link></div></div></article>
}

export function NewsCard({ post }: { post: NewsPost }) {
  return <article className="card"><div className="card-media"><img loading="lazy" src={post.image_url || '/placeholder.svg'} alt={post.title}/></div><div className="card-body"><div className="meta"><span className="badge">{post.category}</span><span><CalendarDays size={13}/>{post.published_at ? new Date(post.published_at).toLocaleDateString('en-PK',{day:'numeric',month:'short',year:'numeric'}) : 'News'}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="btn btn-ghost btn-sm" href={`/news/${post.slug}`}>Read story</Link></div></article>
}

export function EventCard({ event }: { event: Event }) {
  return <article className="card"><div className="card-media"><img loading="lazy" src={event.image_url || '/placeholder.svg'} alt={event.title}/></div><div className="card-body"><div className="meta"><span className="badge">{event.category}</span><span><CalendarDays size={13}/>{new Date(event.event_date).toLocaleDateString('en-PK',{day:'numeric',month:'short',year:'numeric'})}</span></div><h3>{event.title}</h3><p>{event.description}</p><p className="small"><MapPin size={14} style={{display:'inline',marginRight:5}}/>{event.location || 'South Punjab'}</p>{event.registration_url && <a className="btn btn-secondary btn-sm" href={event.registration_url}>Register</a>}</div></article>
}
