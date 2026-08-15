'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export function AdminLogin(){const[error,setError]=useState('');const[busy,setBusy]=useState(false);const router=useRouter();
 async function login(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setError('');const d=new FormData(e.currentTarget);try{const supabase=createClient();const{error}=await supabase.auth.signInWithPassword({email:String(d.get('email')),password:String(d.get('password'))});if(error)throw error;router.push('/admin');router.refresh()}catch(err){setError(err instanceof Error?err.message:'Login failed')}finally{setBusy(false)}}
 return <div className="admin-login"><form className="card login-card" onSubmit={login}><div className="brand" style={{marginBottom:24}}><img src="/logo.svg" alt="Logo"/><span>Waseb Amanat Foundation</span></div><span className="eyebrow">Secure administration</span><h1>Admin login</h1><p>Use the Supabase Auth account that you have added to the <code>admins</code> table.</p><div className="stack"><div className="field"><label>Email</label><input type="email" name="email" required/></div><div className="field"><label>Password</label><input type="password" name="password" required/></div>{error&&<div className="form-status error">{error}</div>}<button className="btn btn-primary" disabled={busy}>{busy?'Signing in...':'Sign in'}</button><a className="small muted center" href="/">← Back to website</a></div></form></div>
}
