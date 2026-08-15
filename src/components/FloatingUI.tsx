'use client';
import { ArrowUp, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingUI() {
  const [cookie, setCookie] = useState(false);
  useEffect(() => { setCookie(!localStorage.getItem('waf-cookie')); }, []);
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  return <>
    <div className="floating-actions">
      {phone && <a className="float-btn whatsapp" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={21}/></a>}
      <button className="float-btn top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp size={20}/></button>
    </div>
    {cookie && <div className="cookie"><div className="row" style={{justifyContent:'space-between'}}><strong>Privacy choices</strong><button className="icon-btn" onClick={()=>setCookie(false)}><X size={18}/></button></div><p className="small" style={{marginTop:8}}>We use essential browser storage for preferences such as theme and cookie acknowledgement. Analytics can be added later with your consent configuration.</p><button className="btn btn-primary btn-sm" onClick={()=>{localStorage.setItem('waf-cookie','accepted');setCookie(false)}}>Accept essentials</button></div>}
  </>;
}
