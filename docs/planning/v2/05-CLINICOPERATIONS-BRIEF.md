# Clinic Operations: smallest trustworthy launch

## Purpose and audience

A place for the people running clinics to compare practical experience and make the work easier. Owners, managers, coordinators, front-desk and billing teams are welcome, from one clinic to many. Initial topics fit allied health and rehab. Jane users are welcome but software vendor is not an eligibility criterion.

At launch, the “community” is a set of human conversations. The site must say that plainly. It does not need accounts, Slack, Circle, a podcast, events calendar, directory, paid membership or a benchmark database.

## Three public pages

| Route | Purpose | Essential content | Action |
|---|---|---|---|
| `/` | Make the idea relevant and credible | Promise, audience, three concrete questions, useful five-question weekly check, Rob identity and Caretrics disclosure | Compare notes → `/about/#take-part` |
| `/about/` | Explain who is behind it and what participation means | Rob bio and links, starting-stage intent, 20-minute conversation, optional email response, value returned, publication choices | Email Rob |
| `/privacy/` | Explain actual information handling | Email correspondence, hosting logs, use of notes, publication approval, no automatic marketing subscription, contact | Email Rob |

Add a basic 404 with Home link, not a fourth marketing page. Home navigation: About, Compare notes. Footer: Rob Saric, Caretrics relationship, Privacy, email. No empty Notes navigation at launch. Add `/notes/` and `/notes/[slug]/` only when the first approved article exists.

## Participant benefit

Someone gets a brief conversation about an issue relevant to their clinic and a short written recap of the useful points. They can choose whether they want later field notes. They may contribute by email rather than accept a meeting. Their participation is valuable without them buying Caretrics or being publicly named.

Rob's commitment: personally send the recap, ask permission for attribution, and follow through on anything promised. Do not promise peer benchmarking, introductions or tailored consulting that has not been arranged.

## Immediate utility without invented evidence

Home includes “Five questions for your next clinic check-in,” an original suggested discussion aid, not a proven SOP or validated clinical protocol:

1. What went better this week, and what helped?
2. Where did work get stuck?
3. What needs a clear owner?
4. What one change will we try next?
5. How will we know whether it helped?

Render as readable HTML. No email gate or downloadable asset required. This gives an invited operator something useful even before interviews are published.

## Design

Borrow the personal site's restraint, readable typography and spacing rather than copying its personal branding everywhere. Use an editorial Clinic Operations wordmark, cream background, dark forest text, restrained accent, and a small real Rob portrait in the host section. No stock medical montage, dashboard mockup, animated counters or logo wall. Use existing approved portrait only, with descriptive alt text. New site must have its own social image and favicon.

## Technical decision

Separate Astro project and Vercel project. Static HTML, TypeScript, CSS, local assets, sitemap. Vercel's static Astro deployment does not require an adapter; add one only if a genuine server route is introduced later. Start with plain email links and visible address. No secrets or environment variables required for participation.

Reference: https://docs.astro.build/en/guides/deploy/vercel/ (checked 2026-09-18).

Do not clone robsaric.com and forget to strip personal canonicals, Resend API, legacy redirects, content, robots, schema or OG assets. Reuse only the small layout/token/image parts needed. Keep Clinic Operations code out of robsaric.com/src/pages.

## Later, only after evidence

First three useful conversations: publish one consented field note. Repeated requests to receive notes: add a separate opt-in list with working unsubscribe and handling disclosure. Requests to meet peers: manually arrange a small discussion with consent. These are sequential decisions, not launch requirements.
