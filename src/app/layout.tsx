import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — Humanity in Action`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['South Punjab NGO','Waseb Amanat Foundation','humanitarian Pakistan','healthcare','education','flood relief','donation','volunteer'],
  openGraph: { title: siteConfig.name, description: siteConfig.description, type:'website', images:['/og-image.svg'] },
  twitter: { card:'summary_large_image', title:siteConfig.name, description:siteConfig.description },
  icons: { icon:'/favicon.svg' },
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" suppressHydrationWarning><body><SiteShell>{children}</SiteShell></body></html>;
}
