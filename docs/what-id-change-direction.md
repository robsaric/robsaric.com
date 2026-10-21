# What I’d change

Rob confirmed Grill Q24–26 on October 21, 2026. The decisions are recorded in CAR-1171 under “Decisions — 2026-10-21: What I’d change (Grill Q24–26)”. This is a local-preview pass; publishing requires a separate decision.

## Scope

- Establish a recurring feature that examines one task, what gets in the way, a proposed change and its trade-offs.
- Start with the dashboard essay’s existing hypothetical renovation-company scenario. Its proposed daily view pairs completed work, a price decision and a partial failure with the reasoning behind the design.
- Introduce the feature beside the selected essay on the homepage and Writing page, with a direct link to the annotated example.
- Retain warm paper, dark text, blue actions, Manrope/Inter and the current homepage opening and Building page. Family photographs remain on About only.
- Change the About subheading to “What shaped how I work.” Remove its rejected closing slogan and the footer’s “Built with care in Ottawa.” Link About directly to Building.
- Add an email-signup anchor beside article metadata only when the newsletter endpoint is configured. Preserve the current form and confirmation behavior.

## Surface and evidence contract

Mode: Read. The notebook quality comes from specific annotations, clear correspondence and a visible trade-off. A ruled list keeps each proposed record beside its design note on wider screens. On phones, each note follows its record. The drawing is selectable HTML text with simple authored SVG connector marks. It is labelled as a proposed design of a hypothetical example, not a screenshot, customer evidence, or a claim about a live product.

The figure is static and fully readable without JavaScript. Existing finite link/focus feedback and reduced-motion support remain; no animation is added to a reading task that needs none. No added dependencies, raster assets, analytics, provider writes or subscription behavior changes.

The former dashboard section anchor remains on the figure; new feature links target `#what-id-change`. Article URL, title, original publication date and share card remain intact.

Current tokens and DESIGN.md retain authority for the visual system, read through the warm-throughout override in `docs/editorial-refinement-2026-10-19.md`. This direction adds the annotated-record composition and the series invitation; it does not replace the system.

MCP compatibility: not applicable to this static personal-site presentation.

## Verification

`pnpm gate` passed with the local public signup endpoint configured: 25 subscription/confirmation tests, Astro diagnostics (zero errors or warnings, 25 existing hints), copy lint, production build, 112 redirect checks, nine note checks, 49 social-card checks and 84 layout checks. The first sandboxed run could not start Chrome; a browser-enabled rerun completed the entire gate successfully. Existing copy taste warnings remain non-blocking.

The bounded browser review covered home, Writing, About and the dashboard essay at 1440, 900 and 390 pixels. Each had one H1, no horizontal overflow and no broken loaded images. The new feature link reaches `#what-id-change`; the metadata email link reaches the visible email field. All 28 homepage keyboard stops have visible focus. The mobile menu opens and closes with Escape.

The new figure is complete in the built HTML and has no JavaScript or motion. Its reading order and the existing global reduced-motion rules were inspected in source; no new runtime no-JavaScript or reduced-motion simulation was performed. No live email submission was made. The local preview uses only the public form-action setting, without email-service credentials.

The independent source/copy and screenshot finish review returned `ship`, with no material findings. Evidence is saved locally under `.impeccable/review/what-id-change/`; full-page captures can leave lazily loaded photographs blank and include Astro’s development toolbar. The article’s full 900px capture supplied the intermediate review because its separate detail capture was malformed. These are review evidence, not public marketing assets. No Impeccable detector ran because its launcher is unavailable. No production publishing is included.
