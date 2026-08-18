# robsaric.com

Rob Saric's personal site and field notes. Astro 7, static output with on-demand newsletter routes, deployed on Vercel.

- Design: `docs/design-reference/site-directions-turn8.dc.html` (open in a browser; 8a desktop, 8b mobile)
- Structure: `docs/DESIGN-SPEC.md`
- Words: `docs/COPY.md` (includes the copy law and the launch verification table)
- Old site and redirects: `docs/MIGRATION.md`
- Agent rules: `AGENTS.md`

## Run

```
pnpm install
pnpm dev             # http://localhost:4321
pnpm gate            # astro check + copy lint + build + redirect check
```

Draft content (`draft: true`) shows in `pnpm dev` and is hidden in production builds.

## Write a field note

Add `src/content/notes/YYYY-MM-DD-slug.md`:

```md
---
title: "Title for the page"
summary: "One or two sentences. This is what the card shows."
type: "Field note"          # Field note | Shipped | Changed my mind
date: 2026-08-18
tags: ["Clinic revenue"]    # see src/data/filters.ts
stage: 4                    # 0 Found .. 4 Paid, or -1
meta: "Paid · Clinic revenue"
---

Body in Markdown.
```

## Environment

Copy `.env.example` to `.env` for local development. Set the same values in the Vercel project for Preview and Production as needed.

- `PUBLIC_NEWSLETTER_ENDPOINT`: public form action exposed to the browser. Use `/api/subscribe/`.
- `RESEND_API_KEY`: server-only Resend API key. Create a Full access key named `robsaric.com subscribe`.
- `RESEND_SEGMENT_ID`: server-only identifier copied from the Resend segment URL.
- `RESEND_TOPIC_ID`: optional server-only identifier copied from the Resend topic URL.

Only `PUBLIC_NEWSLETTER_ENDPOINT` uses the `PUBLIC_` prefix. The Resend key and identifiers must remain server-only.

When `PUBLIC_NEWSLETTER_ENDPOINT` is unset, the homepage hides the form and shows the contact fallback link.

## Newsletter

The homepage form posts to `/api/subscribe/`. The endpoint validates the address, creates or updates the Resend contact, adds it to the configured segment, opts it into the configured topic when present, then sends the browser to `/subscribed/`.

Field notes are sent through Resend Broadcasts scoped to the configured segment and topic.
