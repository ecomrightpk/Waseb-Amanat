'use client';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const [status, setStatus] = useState('');
  async function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('Submitting...');
    const form = e.currentTarget; const fd = new FormData(form);
    const res = await fetch('/api/newsletter', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email:fd.get('email') }) });
    const json = await res.json().catch(() => ({})); setStatus(res.ok ? 'Subscribed. Thank you!' : (json.error || 'Could not subscribe.')); if (res.ok) form.reset();
  }
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div><div className="brand" style={{color:'#fff',marginBottom:14}}><img src="/logo.svg" alt="Logo"/><span>{siteConfig.name}</span></div><p>{siteConfig.description}</p><div className="row">{siteConfig.social.facebook&&<a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18}/></a>}{siteConfig.social.instagram&&<a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a>}{siteConfig.social.linkedin&&<a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>}{siteConfig.social.youtube&&<a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18}/></a>}</div></div>
        <div><h4>Explore</h4><div className="footer-links"><Link href="/about">About us</Link><Link href="/focus-areas">Focus areas</Link><Link href="/projects">Projects</Link><Link href="/news">News</Link><Link href="/events">Events</Link></div></div>
        <div><h4>Take action</h4><div className="footer-links"><Link href="/donate">Donate</Link><Link href="/volunteers">Volunteer</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms & conditions</Link></div></div>
        <div><h4>Stay connected</h4><p className="small"><MapPin size={14} style={{display:'inline',marginRight:6}}/>{siteConfig.address}</p><p className="small"><Phone size={14} style={{display:'inline',marginRight:6}}/>{siteConfig.phone}</p><p className="small"><Mail size={14} style={{display:'inline',marginRight:6}}/>{siteConfig.email}</p><form className="newsletter" onSubmit={subscribe}><input name="email" type="email" required placeholder="Email address" aria-label="Email address"/><button className="btn btn-accent btn-sm">Join</button></form>{status && <p className="small" style={{marginTop:8}}>{status}</p>}</div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span><span>Serving humanity with dignity, transparency and local partnership.</span></div>
    </div>
  </footer>;
}
