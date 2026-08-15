-- Waseb Amanat Foundation - Supabase production schema
-- Run this entire file once in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  description text,
  category text not null default 'Community Development',
  location text,
  image_url text,
  goal_amount numeric(14,2) not null default 0 check (goal_amount >= 0),
  raised_amount numeric(14,2) not null default 0 check (raised_amount >= 0),
  beneficiaries integer not null default 0 check (beneficiaries >= 0),
  status text not null default 'Active',
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body text,
  category text not null default 'News',
  image_url text,
  published_at timestamptz default now(),
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location text,
  event_date timestamptz not null,
  category text not null default 'Community Event',
  image_url text,
  registration_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Community',
  media_type text not null default 'image' check (media_type in ('image','video')),
  media_url text not null,
  thumbnail_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.volunteers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  age integer,
  occupation text,
  availability text,
  skills text[] not null default '{}',
  motivation text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  donor_name text not null,
  email text not null,
  phone text,
  amount numeric(14,2) not null check (amount >= 0),
  donation_type text not null default 'One-time',
  cause text not null default 'General Fund',
  payment_reference text,
  payment_status text not null default 'pending',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Generic updated_at trigger
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

do $$ begin
  if not exists (select 1 from pg_trigger where tgname='projects_set_updated_at') then create trigger projects_set_updated_at before update on public.projects for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='news_set_updated_at') then create trigger news_set_updated_at before update on public.news_posts for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='events_set_updated_at') then create trigger events_set_updated_at before update on public.events for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='gallery_set_updated_at') then create trigger gallery_set_updated_at before update on public.gallery_items for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='volunteers_set_updated_at') then create trigger volunteers_set_updated_at before update on public.volunteers for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='messages_set_updated_at') then create trigger messages_set_updated_at before update on public.contact_messages for each row execute function public.set_updated_at(); end if;
  if not exists (select 1 from pg_trigger where tgname='donations_set_updated_at') then create trigger donations_set_updated_at before update on public.donations for each row execute function public.set_updated_at(); end if;
end $$;

-- Admin helper used by RLS. SECURITY DEFINER keeps the admins table private.
create or replace function public.is_admin(check_user uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(select 1 from public.admins where user_id = check_user);
$$;

-- Enable RLS
alter table public.admins enable row level security;
alter table public.projects enable row level security;
alter table public.news_posts enable row level security;
alter table public.events enable row level security;
alter table public.gallery_items enable row level security;
alter table public.volunteers enable row level security;
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.donations enable row level security;

-- Remove existing policies if re-running setup.
drop policy if exists "admins can read self" on public.admins;
drop policy if exists "public read published projects" on public.projects;
drop policy if exists "admins manage projects" on public.projects;
drop policy if exists "public read published news" on public.news_posts;
drop policy if exists "admins manage news" on public.news_posts;
drop policy if exists "public read published events" on public.events;
drop policy if exists "admins manage events" on public.events;
drop policy if exists "public read published gallery" on public.gallery_items;
drop policy if exists "admins manage gallery" on public.gallery_items;
drop policy if exists "admins manage volunteers" on public.volunteers;
drop policy if exists "admins manage messages" on public.contact_messages;
drop policy if exists "admins manage subscribers" on public.newsletter_subscribers;
drop policy if exists "admins manage donations" on public.donations;

create policy "admins can read self" on public.admins for select to authenticated using (user_id = auth.uid());

create policy "public read published projects" on public.projects for select to anon, authenticated using (published = true or public.is_admin());
create policy "admins manage projects" on public.projects for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "public read published news" on public.news_posts for select to anon, authenticated using (published = true or public.is_admin());
create policy "admins manage news" on public.news_posts for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "public read published events" on public.events for select to anon, authenticated using (published = true or public.is_admin());
create policy "admins manage events" on public.events for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "public read published gallery" on public.gallery_items for select to anon, authenticated using (published = true or public.is_admin());
create policy "admins manage gallery" on public.gallery_items for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "admins manage volunteers" on public.volunteers for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage messages" on public.contact_messages for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage subscribers" on public.newsletter_subscribers for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage donations" on public.donations for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Explicit API grants. RLS remains the security boundary.
grant select on public.projects, public.news_posts, public.events, public.gallery_items to anon;
grant all on public.projects, public.news_posts, public.events, public.gallery_items to authenticated;
grant all on public.volunteers, public.contact_messages, public.newsletter_subscribers, public.donations to authenticated;
grant select on public.admins to authenticated;
grant execute on function public.is_admin(uuid) to anon, authenticated;

-- Public media bucket. Writes are admin-only; public read is allowed.
insert into storage.buckets (id, name, public)
values ('media','media',true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "public read foundation media" on storage.objects;
drop policy if exists "admins upload foundation media" on storage.objects;
drop policy if exists "admins update foundation media" on storage.objects;
drop policy if exists "admins delete foundation media" on storage.objects;

create policy "public read foundation media" on storage.objects for select to public using (bucket_id='media');
create policy "admins upload foundation media" on storage.objects for insert to authenticated with check (bucket_id='media' and public.is_admin());
create policy "admins update foundation media" on storage.objects for update to authenticated using (bucket_id='media' and public.is_admin()) with check (bucket_id='media' and public.is_admin());
create policy "admins delete foundation media" on storage.objects for delete to authenticated using (bucket_id='media' and public.is_admin());
