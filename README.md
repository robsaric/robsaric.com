# robsaric.com

Rob Saric's personal site and field notes. Astro 7, static output with on-demand newsletter routes, deployed on Vercel.

- Product and audience: `PRODUCT.md`
- Design: `DESIGN.md`, `.impeccable/design.json`, and `docs/personal-site-direction.md`
- Current words: `src/data/editorial.ts`, `src/data/ui.ts`, and the content collections
- Voice and historical facts: `docs/COPY.md` (copy law and earlier verification table)
- Editorial plan and review: `docs/AUDIENCE-AND-PUBLISHING.md`, `docs/REDESIGN-HANDOFF.md`
- Old site and redirects: `docs/MIGRATION.md`
- Agent rules: `AGENTS.md`

## Run

```
pnpm install
pnpm dev             # http://localhost:4321
pnpm gate            # types, copy, build, redirects, notes, share cards and responsive layout
```

Draft content (`draft: true`) shows in `pnpm dev` and is hidden in production builds.

To review a noindex copy of the published site locally:

```
pnpm build --mode editorial-review --outDir .impeccable/review/site
```

Serve `.impeccable/review/site/client` locally. This output has a visible preview notice and `noindex`; drafts stay excluded. Keep it local. Ordinary `pnpm build` and `pnpm gate` produce the deployable version. Run the ordinary build last before any authorized deployment because the Vercel adapter also writes its output directory during review builds.

After Rob approves an essay's wording and publication, change its `draft` flag to `false`, run `pnpm generate:og` after a build, then run the gate again. Do not treat approval of the redesign as approval to publish the proposed essays.

Every sitemap page has its own warm 1200x630 share image, including archive entries. After changing a heading or adding a public page, run `pnpm build`, `pnpm generate:og`, then `pnpm gate`; commit the generated PNGs. The renderer uses each built page's actual heading and the site's self-hosted fonts. The homepage, dashboard essay and analog-life essay have their own compositions. `pnpm check:social` verifies every public URL's metadata and image. When replacing an existing card family, update `SOCIAL_IMAGE_VERSION` in `src/lib/social.mjs` so crawlers see a new image URL. Existing platform caches may still need a refresh through LinkedIn's Post Inspector.

Rob approved publication of both October 18 essays and the dashboard replacement on October 19. The three retired clinic notes are kept outside the content collection in `docs/retired-notes/`; their old URLs return 404, and they are absent from navigation, RSS and the sitemap. See `docs/publishing-2026-10-19.md` for the research and publication decisions.

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
- `RESEND_TOPIC_ID`: required server-only personal newsletter topic identifier copied from the Resend topic URL.

Only `PUBLIC_NEWSLETTER_ENDPOINT` uses the `PUBLIC_` prefix. The Resend key and identifiers must remain server-only.

When `PUBLIC_NEWSLETTER_ENDPOINT` is unset, the homepage hides the form and shows the contact fallback link.

## Newsletter

The shared signup form posts to `/api/subscribe/`. For new contacts, the endpoint explicitly opts into the personal topic and out of every other current topic, overriding shared-workspace defaults. For existing contacts, it adds only the personal topic and segment, preserving other preferences. A prior global unsubscribe remains in place and displays a recovery message. Missing configuration, incomplete provider responses and failed writes never produce a success confirmation.

The new-contact path uses a provider lookup followed by creation. Resend's ordinary create endpoint is an upsert, so simultaneous creation of the same email by another integration remains a provider concurrency limitation. The provider does not offer conditional creation on this endpoint.

Field notes are sent through Resend Broadcasts scoped to the configured segment and topic.
