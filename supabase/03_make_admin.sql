-- STEP 1: In Supabase Dashboard > Authentication > Users, create your admin user.
-- STEP 2: Copy that user's UUID.
-- STEP 3: Replace BOTH placeholders below, then run this file in SQL Editor.

insert into public.admins (user_id, email)
values ('REPLACE-WITH-AUTH-USER-UUID', 'REPLACE-WITH-ADMIN-EMAIL')
on conflict (user_id) do update set email = excluded.email;
