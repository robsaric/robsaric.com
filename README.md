# robsaric.com

Rob Saric's personal site and field notes. Astro 7, static output with on-demand newsletter routes, deployed on Vercel.

- Product and audience: `PRODUCT.md`
- Design: `DESIGN.md`, `.impeccable/design.json`, and `docs/personal-site-direction.md`
- Current words: `src/data/editorial.ts`, `src/data/ui.ts`, and the content collections
- Voice and historical facts: `docs/COPY.md` (copy law and earlier verification table)
- Editorial plan and review: `docs/AUDIENCE-AND-PUBLISHING.md`, `docs/REDESIGN-HANDOFF.md`
- Old site and redirects: `docs/MIGRATION.md`
- Agent rules: `AGENTS.md`

## Public Toolbox skills

The reusable public workflows live in [skills/](skills/README.md). Edit those
sources, then run `pnpm skills:build`. The website downloads are generated,
including compatibility downloads at older URLs. `pnpm skills:check` detects drift.
Only the skill instructions and resources are MIT licensed; other site materials
are outside that licence.

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
- `NEWSLETTER_CONFIRMATION_SECRET`: 32 cryptographically random bytes encoded as 64 hexadecimal characters, stored as a sensitive server-only variable. Rotating it invalidates outstanding confirmation links.

Only `PUBLIC_NEWSLETTER_ENDPOINT` uses the `PUBLIC_` prefix. The Resend key and identifiers must remain server-only.

When `PUBLIC_NEWSLETTER_ENDPOINT` is unset, the homepage hides the form and shows the contact fallback link.

## Newsletter

The shared form posts to `/api/subscribe/`, which sends a confirmation email from `Rob Saric <rob@robsaric.com>`, with replies directed to Rob's monitored inbox. It does not create contacts or change subscriptions. Email copy lives in `src/data/newsletter.ts`; the HTML and plain-text versions share that copy.

An authenticated, encrypted link expires after 24 hours. `/confirm/` validates the link without changing anything, so an email scanner's GET does not subscribe the reader. A deliberate form POST to `/api/confirm/` completes the subscription. Confirmation pages and responses are no-store, noindex, and excluded from the sitemap. `Referrer-Policy: strict-origin` hides the token path and query while preserving the origin needed by Astro's native form protection; `no-referrer` would turn that origin into `null` and block confirmation. Addresses are encrypted inside links, never logged by the application.

New contacts explicitly opt into the personal topic and out of every other current topic. Existing contacts outside the personal segment receive only the personal topic and segment. Existing personal readers are checked without writes, including on repeat confirmation; personal topic opt-outs and global unsubscribes remain in place and show a recovery message. Keep former readers in the personal segment: its membership is the replay guard, so manually removing it (or deleting the contact) removes that guard for an unexpired link. No existing subscribers receive a reconfirmation campaign.

Resend idempotency limits repeat sends for the same email to one per UTC calendar day (up to two across a day boundary). A repeat request keeps the first email valid. This is a duplicate-send control, not an IP-wide bot limiter; the honeypot and same-origin checks remain, and a distributed attack across many addresses needs a provider/WAF rate rule. Missing configuration, incomplete provider responses and failed writes never produce a successful subscription. The confirmation email is the only automatic email; there is no second welcome message.

The new-contact path uses a provider lookup followed by creation. Resend's ordinary create endpoint is an upsert, so simultaneous creation of the same email by another integration remains a provider concurrency limitation. The provider does not offer conditional creation on this endpoint.

Field notes are sent through Resend Broadcasts scoped to the configured segment and topic.

Rollback: revert the confirmation commit and redeploy the previous release. The previous release subscribes immediately, so disable the public form instead if confirmation must remain mandatory. The new secret can remain unused. No data migration is needed.
