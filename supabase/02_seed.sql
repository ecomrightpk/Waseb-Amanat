-- Optional starter content. Safe to run after 01_schema.sql.
insert into public.projects (slug,title,excerpt,description,category,location,image_url,goal_amount,raised_amount,beneficiaries,status,featured,published)
values
('rohi-clean-water','Rohi Clean Water Initiative','Solar-powered safe water access for underserved settlements.','A community-led clean water initiative combining filtration, solar pumping and hygiene education.','Clean Water','South Punjab','https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',3500000,2180000,4200,'Active',true,true),
('mobile-health-camps','Mobile Health Camps','Free consultations, medicines and maternal health support.','Mobile medical teams reaching communities with limited access to primary healthcare.','Healthcare','Multan Division','https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',2500000,1475000,6800,'Active',true,true),
('parwaz-scholarships','Parwaz Scholarships','Keeping talented students in school through targeted scholarships.','Scholarship assistance for students at risk of leaving education because of household financial pressure.','Education','South Punjab','https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',1800000,990000,180,'Active',true,true)
on conflict (slug) do nothing;

insert into public.news_posts (slug,title,excerpt,body,category,image_url,published_at,published)
values
('community-health-outreach','Community health outreach reaches remote villages','Volunteer doctors and local partners delivered consultations, medicine and health awareness.','Our community health outreach brought primary consultations, essential medicines and health awareness closer to families who often travel long distances for basic care. The program prioritizes dignity, referral pathways and local follow-up.','Healthcare','https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',now(),true),
('student-learning-kits','Learning kits distributed to students','School supplies and learning materials were provided to children in underserved communities.','The education team distributed learning kits and met teachers and families to understand barriers to regular attendance. Our education work combines direct support with community engagement.','Education','https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',now(),true)
on conflict (slug) do nothing;

insert into public.events (title,description,location,event_date,category,image_url,published)
select 'Free Medical Camp','General physician consultations, basic screening and medicine support.','South Punjab',now()+interval '14 days','Medical Camp','https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',true
where not exists (select 1 from public.events where title='Free Medical Camp');

insert into public.events (title,description,location,event_date,category,image_url,registration_url,published)
select 'Volunteer Orientation Day','Introduction to safeguarding, field conduct and volunteer pathways.','Multan',now()+interval '25 days','Volunteer Drive','https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80','/volunteers',true
where not exists (select 1 from public.events where title='Volunteer Orientation Day');
