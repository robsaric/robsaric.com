# robsaric.com

Rob Saric's personal site and field notes. Astro 7, static output, deployed on Vercel.

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

- `PUBLIC_NEWSLETTER_ENDPOINT` (optional): POST target for the subscribe form. Unset hides the form and shows an email link instead.
