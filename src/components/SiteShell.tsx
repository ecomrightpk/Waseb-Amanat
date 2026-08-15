'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingUI } from './FloatingUI';

export function SiteShell({children}:{children:ReactNode}){
  const pathname=usePathname();
  if(pathname.startsWith('/admin')) return <>{children}</>;
  return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><FloatingUI/></>;
}
