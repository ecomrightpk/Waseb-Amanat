import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const routes=['','/about','/mission','/focus-areas','/projects','/flood-relief','/healthcare','/education','/gallery','/volunteers','/events','/news','/donate','/contact','/privacy-policy','/terms','/search'];return routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:route===''?'weekly':'monthly',priority:route===''?1:.7}))}
