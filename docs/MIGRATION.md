# Migration from the WordPress site

The current robsaric.com is WordPress (nginx/PHP, Plesk, Site Kit) with the REST API open at `https://robsaric.com/wp-json/wp/v2/`. Sitemap: 44 URLs (38 posts + home, about, contact, blog, work, links). Posts run from July 2009 to February 2019.

## URL plan

| Old | New | How |
|---|---|---|
| `/` | `/` | rebuilt |
| `/about/` | `/about/` | rebuilt (same URL) |
| `/contact/` | `/contact/` | rebuilt (same URL) |
| `/blog/` | `/archive/` | 301 |
| `/work/` | `/#caretrics` | 301 |
| `/links/` | `/` | 301 |
| `/<post-slug>/` (38) | `/archive/<post-slug>/` | 301, both with and without trailing slash |
| `/feed/` | `/rss.xml` | 301 |
| (new) | `/field-notes/`, `/field-notes/<slug>/`, `/principles/`, `/methodology/`, `/rss.xml`, `/sitemap-index.xml` | new |

Redirect source of truth: `src/data/legacy-redirects.mjs`, consumed by `astro.config.mjs` (`redirects`). With the Vercel adapter these become platform 301s; in a plain static build Astro emits meta-refresh pages with a canonical link, which is a weaker but valid signal.

Why `/archive/` and not the same root slugs: keeping 38 root-level slugs alongside the new routes would make the root namespace permanently hostage to 2009 titles. A single 301 hop is the standard cost. Do not add a second hop later (never redirect `/archive/x` somewhere else).

## Importing the posts

`pnpm import:legacy` (script: `scripts/import-legacy.mjs`) does the following, idempotently:

1. Fetches `wp-json/wp/v2/posts?per_page=100&_fields=slug,date,modified,title,content,excerpt,categories,link` and `wp-json/wp/v2/categories`.
2. For each slug in `LEGACY_POST_SLUGS`, converts `content.rendered` HTML to Markdown (turndown, with `<pre>`/`<code>` and images preserved), decodes entities in the title, and writes `src/content/archive/<slug>.md` with frontmatter `title, date, originalUrl, excerpt, categories`.
3. Downloads any `wp-content/uploads` images referenced in the post into `public/archive/<slug>/` and rewrites the image URLs to that path, so nothing on the archive depends on the WordPress host staying up.
4. Skips a post whose file already exists unless `--force`.
5. Prints a summary and exits non-zero on any fetch failure so a partial import is visible.

After importing, run `pnpm build` and spot-check three posts against the live site (headings, lists, images, links).

Old posts are kept as written and are exempt from `pnpm lint:copy` by path (`src/content/archive`). Do not edit their prose. If a post is truly not worth keeping, remove it from the collection but keep its redirect pointing at `/archive/`.

## Cutover checklist

1. `pnpm gate` green; all `[VERIFY]` items in `docs/COPY.md` cleared or removed from the page.
2. `/methodology/` written (V5) or the `$127,000` metric removed from the Evidence band.
3. Newsletter endpoint set (`PUBLIC_NEWSLETTER_ENDPOINT`) or the card ships in its no-form state.
4. `src/data/site.ts` links set (LinkedIn, X, GitHub, View source, email).
5. Deploy to Vercel preview; run the redirect check: `node scripts/check-redirects.mjs https://<preview>` should report 301 for every legacy URL (script to add when the preview exists).
6. Point DNS; keep the WordPress host up read-only for 30 days; then run the same redirect check against production and submit the new sitemap in Search Console.
7. Retire the WordPress host.
