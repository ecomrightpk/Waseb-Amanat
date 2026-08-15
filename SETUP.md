# Waseb Amanat Foundation — Supabase + Vercel Setup

Follow these steps in order.

## A. GitHub

1. Create a new GitHub repository, e.g. `waseb-amanat-foundation`.
2. Extract this ZIP.
3. Upload **the contents of the extracted folder** to the repository root. `package.json` must be at the root.
4. Commit to the `main` branch.

## B. Supabase project

1. Create a new Supabase project.
2. Open **SQL Editor**.
3. Paste and run `supabase/01_schema.sql`.
4. Optional: run `supabase/02_seed.sql` to add starter Projects, News and Events.
5. Confirm that `media` exists in **Storage** and is public. The schema SQL creates it.

## C. Supabase keys

From the Supabase project **Connect** panel copy:

- Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- Publishable key → `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

For server-side public form inserts, copy the server secret/secret key → `SUPABASE_SECRET_KEY`.

**Never commit the service role/server secret to GitHub.** It goes only in local `.env.local` and Vercel Environment Variables.

## D. Create the first admin

1. Supabase → Authentication → Users → Add/Create user.
2. Give the admin an email and strong password.
3. Copy the user's UUID.
4. Open `supabase/03_make_admin.sql`.
5. Replace the UUID and email placeholders.
6. Run that SQL in Supabase SQL Editor.
7. After deployment, login at `/admin/login`.

## E. Local environment (optional testing)

Copy `.env.example` to `.env.local` and fill values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY=YOUR_SERVER_SECRET_KEY
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
NEXT_PUBLIC_DONATION_PAYMENT_URL=
```

Run:

```bash
npm install
npm run dev
```

## F. Vercel deployment

1. Sign in to Vercel.
2. Add New → Project.
3. Import the GitHub repository.
4. Vercel should detect **Next.js** automatically.
5. In Environment Variables add all variables from `.env.example`.
6. For `NEXT_PUBLIC_SITE_URL`, initially you can use your Vercel production URL, then replace it with your final custom domain URL.
7. Deploy.
8. Test `/`, `/projects`, `/contact`, `/volunteers`, `/donate` and `/admin/login`.

## G. Custom domain

1. Vercel Project → Settings → Domains.
2. Add your purchased domain, e.g. `yourfoundation.org`.
3. Add the exact DNS records Vercel displays at the company where you purchased the domain.
4. After Vercel verifies the domain, set:

```env
NEXT_PUBLIC_SITE_URL=https://yourfoundation.org
```

5. Redeploy so sitemap/social metadata use the production domain.

## H. Final logo

Replace:

```text
public/logo.svg
```

You can use SVG, or change the header/footer image paths if your final file is PNG/WebP. Keep the logo approximately square for the current header layout.

## I. Content administration

Open:

```text
https://YOUR-DOMAIN/admin/login
```

Admin can:

- Create/edit/delete Projects
- Publish/unpublish Projects
- Create/edit/delete News
- Create/edit/delete Events
- Upload Gallery media to Supabase Storage
- Review volunteer applications
- Review contact messages
- Review donation intents
- Update workflow statuses
- View newsletter subscribers

## J. Donations

The repository intentionally does not hardcode a payment processor because the correct provider depends on your registered entity, bank/merchant approvals and chosen gateway.

Current workflow:

1. Donor fills the donation page.
2. Donation intent is saved in Supabase.
3. If `NEXT_PUBLIC_DONATION_PAYMENT_URL` is configured, donor is redirected to that hosted payment URL.

For a full gateway integration with payment verification/webhooks, add the provider's server API/webhook after your merchant account is approved. Do not mark a donation paid based only on a browser redirect.

## K. Production checklist

- Replace placeholder logo/contact info.
- Use verified impact numbers only.
- Replace demo Unsplash images with owned/consented media.
- Add real social profile links.
- Review Privacy/Terms.
- Configure payment gateway.
- Test emails/forms/admin on production.
- Enable MFA for administrative accounts if available for your Supabase Auth configuration.
- Keep server secret keys only in Vercel server environment variables.
