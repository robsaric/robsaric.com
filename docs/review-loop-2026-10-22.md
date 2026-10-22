# Review loop and Start here motion

Rob approved replacing the dashboard illustration with the review loop and exporting a standalone LinkedIn version, followed by a local preview before publication. He then requested a purposeful animation beside Start here, with Dieter Rams, small business and thoughtful systems design as the direction.

## Implemented scope

- Homepage and Writing feature: four ordered questions with a returning line. The example is explicitly illustrative: reviewing overdue invoices.
- Shared copy in src/data/review-loop.mjs and shared illustration styling in src/styles/review-loop.css.
- LinkedIn image: public/social/dashboard-review-loop.png, 1080 by 1350. Plain-language questions, an example, a human decision boundary and Rob's attribution make it usable independently of the essay.
- Article link preview: existing 1200 by 630 share card now carries the same four questions. Its cache version changes. The article text, original date and URL remain unchanged.
- Start here: Rob rejected the abstract loop and requested a person taking off from a start line. In Q30–31 he then approved a wider sequence: set, push off, run, stumble, fall, get up and brush off. The 6.2-second sequence resets to the starting pose, rests for eight seconds and repeats. A visible pause/resume button preserves the current position. Offscreen or hidden pages suspend it. Reduced motion and no JavaScript show the starting pose without an active control.
- No new dependencies, runtime services, tracking or subscription behaviour.

## Regeneration

Run pnpm build, then pnpm generate:og, then pnpm gate. The existing generator now renders both the share cards and the portrait social image from the self-hosted fonts and site tokens. The artwork source stays editable in scripts/og-card-template.mjs.

## Evidence and editorial boundary

This diagram teaches a review method; it does not claim that Caretrics or SkillNav has produced a measured customer result. The site remains Rob's personal editorial space. A future collection should clearly distinguish a proposed method, a change tried in practice and an observed result.

The next recommendation is to document one real Caretrics improvement: the starting problem, the change made, a usable artifact, the observation period, what happened and what remains uncertain. Publication needs appropriate evidence and permission for any customer material. This is a content recommendation, not a new product roadmap or an assertion that that proof already exists.

## Review

Local preview only, on branch codex/dashboard-review-loop at http://127.0.0.1:4328/#start-here.

- pnpm gate passed: 25 newsletter fixtures, copy gate, build, 112 redirect checks, three notes, 49 share cards and 84 route/width layout checks.
- Visual inspection: homepage at 1440, 900 and 390px; Writing at 390px; portrait image and article share card at native size.
- Browser interaction from the review-loop pass: mobile menu opened and closed with Escape; Enter on Read my writing reached the section. The runner replacement adds a labelled replay button with a visible keyboard focus state and a 44px minimum target.
- Reduced-motion and no-JavaScript fallbacks were reviewed in source; browser preference emulation was not available in the inspection tool.
- Screenshot evidence is in the ignored .impeccable/review/review-loop directory.

### Runner correction

The final runner pass passed pnpm gate again, including all 84 layout checks. Visual review covered 1440, 900, 390 and 320px. The replay target is at least 44 by 44px; Enter replays it with a visible 2px focus outline. Browser observation confirmed the head coordinates change during replay. The initial phone wrapping issue was corrected in one batch.

Runner geometry and timing live in src/lib/start-runner.mjs, the component in src/components/StartHereMark.astro, styles in src/styles/start-runner.css and the replay label in src/data/ui.ts. Proof screenshots, a pose sheet and an animated GIF rendered from the same poses are under .impeccable/review/start-runner. The GIF is a review artifact; the website uses lightweight SVG and runs once per visit, with deliberate replay.

### Wider looping runner, Q30–31

This revision supersedes the play-once behavior documented above and is a narrow, user-approved exception to the earlier prohibition on continuous motion. The loop has an eight-second still interval, a 44px pause/resume target, and no animation frames scheduled during the still interval. Its desktop track is 280px wide, with a separate control; on phones it occupies its own row and fits the available width.

The full pnpm gate passed after the phone-width correction: 25 newsletter fixtures, Astro check, copy lint, build, 112 redirects, three notes, 49 share cards and 84 layout checks. The first sandboxed attempt could not start the layout-checking browser; the final run outside the sandbox passed. Visual inspection covered 1440, 900, 390 and 320px. Browser checks confirmed the pause preserved the pose, Enter resumed it, the control remained 44px wide and motion resumed in a later cycle. Reduced-motion, hidden-page and no-JavaScript fallbacks were checked in source; preference emulation was not available.

Current screenshots, pose sheet, a frame exporter and a 960×276 looping GIF are in .impeccable/review/start-runner-loop. The GIF uses the same pose data as the website; the website retains SVG so it can pause and respect motion preferences. The approved decisions are recorded under the dated Q30–31 heading in CAR-1171. Local preview only; no commit, push or publication in this pass.

### Release authorization

After reviewing the final local preview, Rob explicitly approved committing and merging these changes to main, publishing them and opening the live homepage on October 22, 2026. This authorizes release of the reviewed illustration, social image, share card and runner sequence. It does not authorize unrelated content or service changes.
