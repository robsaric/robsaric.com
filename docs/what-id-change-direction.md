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

## October 22 revision: short note, optional design detail

Rob confirmed Grill Q27–29. This supersedes the earlier requirement to keep the title and share card intact and to show every annotation in the main reading flow.

- Headline: “Your dashboard still leaves you with the job.”
- The main prose is 304 words, based on Rob’s supplied draft and informed by his own writing from the shared Drive folder. One explicitly imagined renovation-company story carries the argument; no invented experience is attributed to Rob.
- A compact proposed view distinguishes a recorded decision, a price request requiring judgement and a partially completed task. The longer annotations move into a native “See my design notes” expansion, closed by default.
- Existing homepage and Writing links to `#what-id-change` open that expansion. Without JavaScript, readers can still open it using the native control.
- The vendor survey becomes a brief further-reading credit to Attio and Julien Bek at Sequoia. The original article URL and October 19 publication date remain; October 22 appears as the update date.
- The summary, description, Now title and share card use the revised framing. The social-image version changes to refresh cached cards. The newsletter promise and confirmation service are unchanged.
- This revision is a local preview. No push, merge or production deployment is included.

The full site gate passed, including subscription fixtures, copy lint, Astro diagnostics, build, redirects, notes, share cards and layout checks. The article, homepage and Writing page were inspected at 1440, 900 and 390 pixels: one H1, no horizontal overflow and complete writing selections. Native expansion controls work with Enter and Space; the direct feature link opens the notes. Homepage controls have visible keyboard focus, and Escape closes the mobile menu.

The independent editorial review found no material copy or source issues. Screenshots are saved locally under `.impeccable/review/shorter-dashboard/`. Native no-JavaScript behavior and existing reduced-motion rules were reviewed in source, without a new runtime simulation. No email was submitted or sent.

## October 22 preview feedback: remove the unexplained feature

Rob found “design notes” unclear and rejected keeping the extra explanation. This supersedes the optional-expansion decision above. The expansion and its homepage/Writing invitations are removed, while the three-row proposed view stays within the essay. The former `#what-id-change` fragment remains as an alias at that view so existing links still land on relevant content.

Rob approved this homepage introduction: “I build software for small teams. I write about making sense of AI, raising kids, and making time for the people in our lives.” It replaces the previous introduction and separate goal line. The headline, portrait and primary actions stay as approved. These revisions remain local until publishing is authorized.
