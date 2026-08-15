'use client';
import { FormEvent, useState } from 'react';

async function submitJson(url:string, body:Record<string,unknown>) {
  const res = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const json = await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(json.error || 'Something went wrong.');
  return json;
}

export function ContactForm(){
  const[status,setStatus]=useState<{type:'success'|'error';text:string}|null>(null);const[busy,setBusy]=useState(false);
  async function onSubmit(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setStatus(null);const f=e.currentTarget;const d=new FormData(f);try{await submitJson('/api/contact',{name:d.get('name'),email:d.get('email'),phone:d.get('phone'),subject:d.get('subject'),message:d.get('message')});setStatus({type:'success',text:'Your message has been received. Our team will contact you soon.'});f.reset()}catch(err){setStatus({type:'error',text:err instanceof Error?err.message:'Could not submit.'})}finally{setBusy(false)}}
  return <form className="card form-card" onSubmit={onSubmit}><div className="form-grid"><div className="field"><label>Name *</label><input name="name" required maxLength={100}/></div><div className="field"><label>Email *</label><input name="email" type="email" required/></div><div className="field"><label>Phone</label><input name="phone"/></div><div className="field"><label>Subject *</label><input name="subject" required maxLength={150}/></div><div className="field full"><label>Message *</label><textarea name="message" required maxLength={3000}/></div><div className="field full">{status&&<div className={`form-status ${status.type}`}>{status.text}</div>}<button className="btn btn-primary" disabled={busy}>{busy?'Sending...':'Send message'}</button></div></div></form>
}

const skillOptions=['Medical','Teaching','Fundraising','Field Work','Media & Photography','Data & IT','Logistics','Community Mobilization','Design','Administration'];
export function VolunteerForm(){
 const[status,setStatus]=useState<{type:'success'|'error';text:string}|null>(null);const[busy,setBusy]=useState(false);
 async function onSubmit(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setStatus(null);const f=e.currentTarget;const d=new FormData(f);const skills=d.getAll('skills').map(String);try{await submitJson('/api/volunteer',{name:d.get('name'),email:d.get('email'),phone:d.get('phone'),city:d.get('city'),age:d.get('age'),occupation:d.get('occupation'),availability:d.get('availability'),skills,motivation:d.get('motivation')});setStatus({type:'success',text:'Application submitted successfully. Thank you for volunteering.'});f.reset()}catch(err){setStatus({type:'error',text:err instanceof Error?err.message:'Could not submit.'})}finally{setBusy(false)}}
 return <form className="card form-card" onSubmit={onSubmit}><div className="form-grid"><div className="field"><label>Full name *</label><input name="name" required/></div><div className="field"><label>Email *</label><input name="email" type="email" required/></div><div className="field"><label>Phone *</label><input name="phone" required/></div><div className="field"><label>City *</label><input name="city" required/></div><div className="field"><label>Age</label><input name="age" type="number" min="16" max="100"/></div><div className="field"><label>Occupation</label><input name="occupation"/></div><div className="field full"><label>Availability *</label><select name="availability" required defaultValue=""><option value="" disabled>Select availability</option><option>Weekdays</option><option>Weekends</option><option>Evenings</option><option>Emergency / On call</option><option>Flexible</option></select></div><div className="field full"><label>Skills / areas of interest</label><div className="check-grid">{skillOptions.map(s=><label className="check-chip" key={s}><input type="checkbox" name="skills" value={s}/>{s}</label>)}</div></div><div className="field full"><label>Why would you like to volunteer?</label><textarea name="motivation" maxLength={1500}/></div><div className="field full">{status&&<div className={`form-status ${status.type}`}>{status.text}</div>}<button className="btn btn-secondary" disabled={busy}>{busy?'Submitting...':'Submit volunteer application'}</button></div></div></form>
}
