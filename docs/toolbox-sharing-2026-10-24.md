# Toolbox sharing — October 24, 2026

Rob approved Grill Q53: use `/toolbox/interview-draft-edit/`, permanently redirect the old address, and prepare two matching visuals for local review. This replaces the previous choice to retain the confusing guide address. No publication is authorized by this decision.

Subsequent release approval: Rob answered “Yes — publish the guide update” to the explicit guide-only release request on October 24. That approval covers this guide, route, redirect, share assets and metadata, but not the separate homepage/Building previews, a newsletter setup or a LinkedIn post.

- The existing guide moves intact, retaining section anchors and downloads. The Toolbox listing points directly to it.
- The new 1200 × 630 link card uses the reader promise, a small free-writing-skill label, the method name and Rob's wordmark. Its new image path distinguishes it from the old card in crawler caches.
- The 1080 × 1350 standalone visual explains the five steps, including the reader answering questions before AI drafts and making the final edit. AI stages use restrained blue; human stages remain dark. All text is rendered with the site's self-hosted fonts.
- The guide's social title uses the reader promise while its browser title retains the skill name. Canonical and OG URLs use the new route. Other pages retain their existing metadata.
- Source wording is shared through `src/data/interview-method.mjs`; rerun `pnpm generate:og /toolbox/interview-draft-edit/` after a build to generate both assets.
- Publishing still needs separate approval. After publication, verify the redirect and destination live, then refresh the new guide URL with LinkedIn Post Inspector. Existing LinkedIn posts will not be rewritten by that refresh.

Q52 clarifies that Rob meant a newsletter for readers, not a paid LinkedIn plan. The proposed name is Digital days. Analog nights. This remains a recommendation, not an approved newsletter launch or cadence promise.

Validation: `pnpm gate` passed, including 29 tests, 114 redirect checks, 51 complete social previews and 210 layout checks. The new guide self-canonicalizes, the old guide is excluded from the sitemap, generated links target the new route, and the redirect resolver retains the downloads fragment. Both image files were generated and visually inspected; the standalone headline was balanced in one follow-up render with no overflow. `git diff --check` passed. The skill ZIP's SHA-256 remains `5280AF98C6411CAEF3BC98D925CFDF02CC17028A857E45E6F87907392D0FCEC6`. The local server needed a restart to recognize the renamed route; the guide and both images then opened successfully. Production redirect and LinkedIn's cached preview remain post-publication checks.
