'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accessibility, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, siteConfig } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [fontScale, setFontScale] = useState(100);

  useEffect(() => {
    const saved = localStorage.getItem('waf-theme');
    const nextDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(nextDark); document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
    const savedScale = Number(localStorage.getItem('waf-font-scale') || '100'); setFontScale(savedScale); document.documentElement.style.fontSize = `${savedScale}%`;
  }, []);


  function cycleFont() {
    const next = fontScale >= 120 ? 100 : fontScale + 10;
    setFontScale(next); document.documentElement.style.fontSize = `${next}%`; localStorage.setItem('waf-font-scale', String(next));
  }

  function toggleTheme() {
    const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('waf-theme', next ? 'dark' : 'light');
  }

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.classList.toggle('no-scroll', open); return () => document.body.classList.remove('no-scroll'); }, [open]);

  return <>
    <header className="site-header">
      <div className="container">
        <nav className="nav-shell" aria-label="Primary navigation">
          <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
            <img src="/logo.svg" alt={`${siteConfig.name} logo`} /><span>{siteConfig.name}</span>
          </Link>
          <div className="nav-links">
            {navItems.map(([label, href]) => <Link key={href} href={href} style={pathname === href ? { color:'var(--primary)', background:'rgba(11,79,138,.07)' } : undefined}>{label}</Link>)}
          </div>
          <div className="nav-actions">
            <Link className="icon-btn" href="/search" aria-label="Search website"><Search size={18}/></Link>
            <button className="icon-btn" onClick={cycleFont} aria-label={`Increase text size. Current ${fontScale}%`} title={`Text ${fontScale}%`}><Accessibility size={18}/></button>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <Link className="btn btn-accent btn-sm donate-nav" href="/donate">Donate</Link>
            <button className="icon-btn mobile-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20}/></button>
          </div>
        </nav>
      </div>
    </header>
    <div className={`mobile-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
    <aside className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile navigation">
      <div className="row" style={{justifyContent:'space-between',marginBottom:18}}><strong>Menu</strong><button className="icon-btn" onClick={() => setOpen(false)}><X size={20}/></button></div>
      {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      <Link href="/donate">Donate</Link>
    </aside>
  </>;
}
