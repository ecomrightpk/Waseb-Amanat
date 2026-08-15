import { redirect } from 'next/navigation';
import { AdminPanel } from '@/components/AdminPanel';
import { createClient } from '@/lib/supabase/server';
export const metadata={title:'Admin Dashboard',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AdminPage(){
 if(!process.env.NEXT_PUBLIC_SUPABASE_URL||!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY){return <div className="admin-login"><div className="card login-card"><h1>Supabase not configured</h1><p>Add the environment variables from <code>.env.example</code> before opening the admin dashboard.</p><a className="btn btn-primary" href="/">Back to site</a></div></div>}
 const supabase=await createClient();const{data:{user}}=await supabase.auth.getUser();if(!user)redirect('/admin/login');
 const{data:admin}=await supabase.from('admins').select('user_id,email').eq('user_id',user.id).maybeSingle();if(!admin){await supabase.auth.signOut();redirect('/admin/login')}
 return <AdminPanel email={user.email||admin.email||'Admin'}/>;
}
