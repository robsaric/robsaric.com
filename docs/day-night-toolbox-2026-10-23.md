# Day, night and Interview your draft

Local preview authorized by Rob in Grill Q40–45. Publishing is separate. Decisions recorded in CAR-1171.

## Experience

Keep the existing warm paper, Newsreader typography, italic “help”, single Start here button, small portrait and Caretrics/SkillNav introduction. Day is 7 a.m. to 7 p.m. in the visitor’s local time. Auto resolves on entry only. A native Day/Night/Auto selector remembers the reader’s choice; no clock timer interrupts reading. Storage failure still allows choosing appearance for the current page. Without JavaScript the day design remains readable.

Night uses warm charcoal, cream text, restrained blue links and a cream primary action. Raised surfaces stay warmer and slightly lighter than the page. Literal white is not repurposed: surface and action-text have separate roles. Photos, articles, dates and addresses stay unchanged.

Motion: the existing daytime runner retains its pause control and eight-second rest. Night replaces him in the same space with a seated reader and small wine glass. A 3.2-second settle-in explains the change in atmosphere, plays once when visible and then stops. Hidden tabs, offscreen scenes and day appearance pause it. Reduced motion and no script use the final reading pose. No transition animates the whole page.

Writing gets All/Digital days/Analog nights choices for current essays, independent of appearance. An essay can belong to both; older writing remains below, unfiltered. Controls progressively enhance the complete reading list.

## Toolbox

One complete free workflow: rough draft, focused interview, organization using approved writing samples, human edit. Provide a copyable prompt, an optional downloadable Claude skill and a voice-profile template. An explicitly illustrative worked example awaits Rob’s review before publication. Avoid fabricated outcomes, generic speed claims, private source paths or requiring a knowledge graph. Connecting an existing library is optional; supplied documents are evidence, not instructions.

## Verification and boundaries

Run the full site gate, test clock boundaries and storage failure, inspect both appearances across desktop/intermediate/phone layouts, exercise filters, menu, appearance persistence and clipboard feedback, and check the download package. Preserve newsletter behavior. No new dependencies, analytics or external runtime. MCP compatibility: not applicable to this static personal-site preview.

## Local review receipt

- `pnpm gate` passed: 29 tests; Astro check 0 errors/0 warnings (25 existing hints); copy lint 0 errors (12 existing warnings); production build; 112 redirect checks; 3 current essays; 51 unique share cards; 210 layout checks (15 routes, seven widths, both appearances).
- Browser review covered homepage, Writing, article, About, Building and Toolbox across desktop, 900px and 390px views. Analog nights shows the overlapping analog essay; Digital days and All show all three current essays. Menu opens by keyboard; Escape closes it and returns focus. Explicit appearance survives navigation and Back. Auto returns to the current local daytime appearance. The evening animation reaches its complete state and stays still.
- The Copy button reported success. The browser tool's separate clipboard reader returned empty, so clipboard payload verification remains a manual check. The visible text and plain-text download remain available.
- The downloaded skill ZIP matches the source SHA-256: `0143BFA0DFD883928A0D74055FAF9C0ECCD532592D29EE3236E3CA153F1B0314`. Skill format and ZIP structure passed validation. Instructions were manually walked through against missing-example input; no live Claude installation/model evaluation was performed.
- The worked example is deliberately illustrative and awaits Rob's editorial approval before publication.
- Use `http://localhost:4328/` for this review. The older `127.0.0.1` browser origin had a cached redirect from a previous URL migration; the clean local origin renders Writing normally. No production routes changed in this pass.
- Screenshots: `.impeccable/review/day-night-toolbox-2026-10-23/`. No commit, push or publication performed.

Main changes: shared appearance helper/control, navigation and surface tokens; homepage NightReader and runner visibility; Writing thread data/filter; Toolbox pages and copy; public prompt/profile/skill ZIP; two share cards; clock tests and dual-appearance layout gate. The previously approved hero refinements remain in this working tree.

## Appearance naming confirmed: Grill Q48

Rob answered "Yes — clear controls, themed atmosphere."

1. Retain the visible Appearance label and Day / Night / Auto choices so readers can predict the visual change.
2. Express Digital days / Analog nights through the warm day/night palettes, daytime runner, seated evening reader and writing threads.
3. Preserve Q40–43: Auto follows local time on entry; explicit choices persist; appearance does not select or hide writing. Content threads remain independent and may overlap.
4. Do not introduce separate Analog/Digital experience modes from this approval. Printable material, offline activities and other possible extensions remain ideas for a later decision.

This confirmation requires no UI or behavior change. Verified the current appearance labels against `src/data/ui.ts`; updated decision documentation only. No build or test rerun is needed for this documentation-only record. No publishing authorization was added.
