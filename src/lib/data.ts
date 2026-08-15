import { createClient } from '@/lib/supabase/server';
import { fallbackEvents, fallbackNews, fallbackProjects } from '@/lib/site';
import type { Event, GalleryItem, NewsPost, Project } from '@/types';

function configured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

export async function getProjects(featuredOnly = false): Promise<Project[]> {
  if (!configured()) return [...fallbackProjects] as Project[];
  try {
    const supabase = await createClient();
    let query = supabase.from('projects').select('*').eq('published', true).order('created_at', { ascending: false });
    if (featuredOnly) query = query.eq('featured', true);
    const { data, error } = await query;
    if (error || !data?.length) return [...fallbackProjects] as Project[];
    return data as Project[];
  } catch { return [...fallbackProjects] as Project[]; }
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!configured()) return ([...fallbackProjects] as Project[]).find(p => p.slug === slug) || null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('projects').select('*').eq('slug', slug).eq('published', true).maybeSingle();
    return (data as Project | null) || ([...fallbackProjects] as Project[]).find(p => p.slug === slug) || null;
  } catch { return ([...fallbackProjects] as Project[]).find(p => p.slug === slug) || null; }
}

export async function getNews(): Promise<NewsPost[]> {
  if (!configured()) return [...fallbackNews] as NewsPost[];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('news_posts').select('*').eq('published', true).order('published_at', { ascending: false });
    if (error || !data?.length) return [...fallbackNews] as NewsPost[];
    return data as NewsPost[];
  } catch { return [...fallbackNews] as NewsPost[]; }
}

export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  if (!configured()) return ([...fallbackNews] as NewsPost[]).find(p => p.slug === slug) || null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('news_posts').select('*').eq('slug', slug).eq('published', true).maybeSingle();
    return (data as NewsPost | null) || ([...fallbackNews] as NewsPost[]).find(p => p.slug === slug) || null;
  } catch { return ([...fallbackNews] as NewsPost[]).find(p => p.slug === slug) || null; }
}

export async function getEvents(): Promise<Event[]> {
  if (!configured()) return [...fallbackEvents] as Event[];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('events').select('*').eq('published', true).order('event_date', { ascending: true });
    if (error || !data?.length) return [...fallbackEvents] as Event[];
    return data as Event[];
  } catch { return [...fallbackEvents] as Event[]; }
}

export async function getGallery(): Promise<GalleryItem[]> {
  if (!configured()) return [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('gallery_items').select('*').eq('published', true).order('created_at', { ascending: false });
    return (data || []) as GalleryItem[];
  } catch { return []; }
}
