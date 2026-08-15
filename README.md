# Waseb Amanat Foundation — Operational Website

Production-oriented NGO/Foundation website built as one GitHub repository using **Next.js 16 App Router + Supabase + Vercel**.

## What is included

- Separate public pages: Home, About, Mission, Focus Areas, Projects, Flood Relief, Healthcare, Education, Gallery, Volunteers, Events, News, Donate, Contact, Privacy, Terms.
- Dynamic detail pages for individual projects and news articles.
- Responsive premium UI, dark mode, animations, project filters, gallery lightbox, before/after relief slider, impact counters and donation impact calculator.
- Supabase-backed public content.
- Working contact, volunteer, newsletter and donation-intent API endpoints.
- Protected `/admin` login and operations dashboard.
- Admin CRUD for projects, news, events and gallery.
- Admin status workflows for volunteers, messages and donations.
- Supabase Storage media uploads.
- Row Level Security policies and SQL schema.
- SEO metadata, sitemap, robots and manifest.
- Vercel-ready deployment.

## Repository structure

```text
src/app/                 Next.js pages and API routes
src/components/          Reusable public/admin UI
src/lib/                 Site data and Supabase clients
supabase/01_schema.sql   Database + RLS + Storage setup
supabase/02_seed.sql     Optional starter content
supabase/03_make_admin.sql  Admin registration helper
public/logo.svg          Replace this with the final logo
.env.example             Environment variables template
SETUP.md                 Full deployment instructions
```

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000`.

## Important before public launch

1. Replace `public/logo.svg` with the approved logo.
2. Update contact details in `src/lib/site.ts`.
3. Replace illustrative impact statistics with verified figures.
4. Review Privacy Policy / Terms with appropriate legal or compliance advice.
5. Connect an approved payment provider. The current donation flow records donation intent and can redirect to a configured payment URL.
6. Configure domain, Supabase, environment variables and first admin using `SETUP.md`.

## Security notes

- Never expose `SUPABASE_SECRET_KEY` in browser code or commit it to GitHub.
- Public forms insert through server-side Next.js API routes.
- Admin browser access is protected by Supabase Auth + Row Level Security.
- Only admins can write to the public `media` Storage bucket.
