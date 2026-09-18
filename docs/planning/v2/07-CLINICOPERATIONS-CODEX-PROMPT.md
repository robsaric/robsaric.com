# Codex prompt: build the minimal Clinic Operations site

Use in a separate Astro project checkout. Suggested repository name: `robsaric/clinicoperations.com`. Do not create it remotely or assume it exists without the user's implementation-session authorization. Copy this package into that project's docs/planning/v1 if useful; do not commit production Clinic Operations routes into the personal site repository.

---

Build the smallest trustworthy clinicoperations.com using Astro and Vercel, based on 05-CLINICOPERATIONS-BRIEF.md and 06-CLINICOPERATIONS-COPY.md. Use 04-ACCEPTANCE.md for launch checks.

The audience includes single-location clinic owners and small teams as well as multi-location operators. Jane is one example of a system participants use, not an eligibility requirement. Present an early conversation project, with Rob Saric and his Caretrics relationship clearly disclosed.

Create a lightweight static site with:
- `src/pages/index.astro`
- `src/pages/about.astro` including #take-part
- `src/pages/privacy.astro`
- `src/pages/404.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro` and `Footer.astro`
- `src/data/site.ts` and `copy.ts`
- `src/styles/tokens.css` and `global.css`
- site-specific favicon, social card, robots and sitemap
- README with commands, Vercel settings, email behavior and launch checklist

Use the existing robsaric.com design as a reference for typography, restraint and spacing. Inspect reference source when available. Reuse its approved portrait and relevant tokens without copying personal-site content, logos, subscriber endpoints, redirects or metadata. Do not add React, Tailwind, a CMS or animation libraries. Use the current compatible Astro toolchain with a committed lockfile and Node version supported by its installed dependencies. If using reference versions, inspect package.json and lockfile instead of guessing.

Configure `site: 'https://clinicoperations.com'`, static output and consistent trailing slash behavior. Use the sitemap integration. Static Vercel deployment needs no server adapter. Configure build as `pnpm build` and output `dist` for this static-only project. The reference personal site uses an adapter because it has dynamic routes; that is not a reason to copy it here.

All participation CTAs route to /about/#take-part and a working mailto to rob@caretrics.com, using `encodeURIComponent('Clinic Operations: compare notes')` for the subject. Display the address beside the link. A mailto click is not evidence an email was sent; do not show a success confirmation. No forms, database, authentication, analytics, newsletter or secret env vars are needed for v1.

Home includes the five-question check-in as readable ungated HTML. Use the supplied words. Keep labels readable, mobile touch targets at least 44px, one H1 per page, keyboard focus visible, images sized, and everything useful without JavaScript. Do not add claims of members, outcomes, research, benchmarks, partner approval or published interviews.

Acceptance:
1. Install, type-check and production build succeed.
2. Review every route at 390/900/1440 and overflow at 320.
3. Verify all internal links, mailto, external identity links, canonical/OG metadata, favicon and sitemap.
4. Verify preview protection or noindex, production HTTPS and domain routing when hosting access is authorized. A build alone is not a deployment.
5. Report exact routes, changed files, screenshots, tests and deployment status. Do not send outreach messages.

Once this public site is checked, update the personal site's Clinic Operations project link as a separate small change. Until then, retain /contact/ there.
