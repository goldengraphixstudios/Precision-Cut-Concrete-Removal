# Precision Cut Concrete Removal - Funnel Website

Production-ready marketing funnel for Precision Cut Concrete Removal LLC built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
LEAD_TO_EMAIL=
LEAD_FROM_EMAIL=
```

The lead form posts to `/api/lead` and sends an email using Nodemailer (when deployed on a server).

## Static Hosting (GitHub Pages)

This repo is configured to deploy to GitHub Pages using a static export. The form will open the visitor's email client on the live site.

1. Enable GitHub Pages in the repo settings.
2. Wait for the `Deploy to GitHub Pages` action to finish.
3. Your live URL will be:
   `https://goldengraphixstudios.github.io/Precision-Cut-Concrete-Removal/`

## Fetch Gallery Images

```bash
npm run fetch:gallery
```

Images are downloaded to `public/gallery`. If you skip this, the site shows clean gradient placeholders.

## Key Routes

- `/` landing funnel
- `/services` detailed services
- `/projects` gallery + before/after
- `/about` company story + values
- `/contact` map + form + click-to-call
- `/thank-you` form confirmation

## Where To Edit Copy

- Global content and service list: `src/lib/data.ts`
- Home page layout: `src/app/page.tsx`
- Services page: `src/app/services/page.tsx`
- Projects page: `src/app/projects/page.tsx`
- About page: `src/app/about/page.tsx`
- Contact page: `src/app/contact/page.tsx`

## Brand Assets

- Logos and favicon: `public/brand/`
- SVG icon set: `src/components/svg/`

## Deployment

### GitHub Pages
- Push to `main` and GitHub Actions will publish from `out/`.

### Vercel
1. Push to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables in Vercel settings.
4. Deploy.

### Low-cost Hosting
- Any Node-compatible host works. Configure environment variables for SMTP.
- Run `npm run build` and `npm run start`.
