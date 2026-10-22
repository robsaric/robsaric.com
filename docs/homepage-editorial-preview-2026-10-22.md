# Personal homepage preview, October 22, 2026

Status: local preview, not approved for publication.

## Direction and supersession

Rob approved Q37: use lighter typography and a more deliberate composition, adapted to his personal identity. He then rejected the resulting blue illustration and yellow signup treatment: "Never have images compete with CTAs." This supersedes the colour choices in `homepage-colour-2026-10-22.md` and the first Mercury-inspired preview.

Current reference: https://github.com/scroobius-pip/fudge-design-md/blob/main/design-md/diabrowser.com.md. This is a third-party design analysis, not Dia's official specification. Adopt the separation between editorial content and actions: paper surfaces, serif display, neutral illustration frames and restrained dark buttons. Do not copy proprietary fonts, screenshots, decorative postage, product claims or the whole reference page.

## Preview contract

- Homepage mode: Read, with a personal introduction. Writing remains the first action.
- Keep the approved headline, lead, unbranded portrait, actual photos and Start here runner. Keep family pictures on About only.
- Newsreader 400 for homepage display headings; existing Inter for text and controls. Newsreader is by Production Type, SIL OFL 1.1: https://github.com/productiontype/Newsreader. Self-host through the existing Astro font pipeline. Keep other routes' type unchanged during this homepage preview.
- Warm paper, near-black text, readable secondary copy. Charcoal fill is for actual buttons. Small blue brand/focus details remain; no saturated illustration panel or filled yellow decision row.
- Homepage review-loop illustration is a neutral white framed figure. Typography and thin rules carry the sequence.
- Email invitation remains after the writing, in a compact pale inset with the same dark button as the hero. Preserve confirmation, privacy and validation behavior.
- Caretrics example uses Rob's Q36 account to show a change in thinking: manual reporting, insights and recommendations, then workflows. Supportive agents remain future direction. The diagram is an editorial summary, not a live product screenshot or evidence of measured outcomes.
- The footer returns to warm paper. Do not add a dark band merely for contrast.
- Adaptation remains left-aligned to preserve the approved personal-site composition. Dia informs hierarchy and material, not a literal centered-page clone.

## Interview-based essay update

URL and publication date retained for `2026-10-18-building-with-ai-and-life-beyond-the-feed`. Updated date October 22. Title stays "I want my analog life back." The revised note uses Rob's paper notebook/iPad recollection, QR codes in books, undivided attention, and "Analog nights, digital days." It retains a short, verified Cory Doctorow quote and a concrete reader exit. Cuts the separate Meta/revenue and family-policy arguments from this short note. Does not invent a family scene, routine or outcome.

The paragraph implying he was "waiting" to take out his phone was cut after editorial review, since that reversed his intended frustration. No new bracketed prose was needed in the article: edits cut and reorder current interview words and previously approved copy, with punctuation and transcription corrections.

## Validation and handoff

Run `pnpm gate`, regenerate the homepage share card, inspect homepage at 1440, 900, 390 and the user's viewport. Check email invalid state and keyboard focus without sending a real signup. Retain runner reduced-motion behavior. Independent finish review and design documentation must reflect this superseding direction.

No push, merge or deployment is authorized for this preview.

### Completed checks

- Final `pnpm gate` passed after the last typography adjustment: 25 newsletter fixtures, Astro check, copy lint, build, 112 redirects, three notes, 49 share cards, and 84 route/width checks. Astro reports zero errors/warnings and 25 existing hints. Copy lint has zero errors and 12 warnings, including two deliberate terms in Rob's Caretrics account.
- Regenerated and visually checked the homepage share card. Existing article cards retain their established treatment.
- Inspected homepage captures at 1440, 900, 390, and the actual 890px browser width. All photos loaded; no horizontal overflow. Evidence is in the ignored `.impeccable/review/dia-personal/` directory.
- Invalid signup shows a clear inline error and returns focus to the field. Tab reaches the submit button with a visible blue focus ring. No valid email was submitted. The mobile menu opens and Escape closes it.
- Fresh independent finish reviewer: **ship for local preview**, with no material visual findings across the four required captures. This is not approval to publish. The design detector remains unavailable because the vendored launcher is absent.
- Independent editorial review of the analog essay: both identified clarity fixes resolved. The revised article was also checked in the local browser.
- Existing runner motion and reduced-motion code are unchanged; this pass does not claim a new full motion audit.
