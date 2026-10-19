# What I’m building

Confirmed by Rob on 2026-10-19 (Grill Q11–Q14). Mode: Persuade. Local review only.

## Decisions

1. Give What I’m building its own page, with a short invitation on the homepage.
2. Lead with opportunity, ownership and independence: more people able to start, own and grow a business on their terms.
3. Make the why personal through Windsor roots and documented lessons from building companies, without inventing an origin story.
4. Explain Togetheren and SkillNav as work toward the ambition. SkillNav stays explicitly in development. Caretrics is another expression of the mission, not the umbrella identity.
5. Useful AI and good design should increase capability and control while leaving room for life. Invite readers to follow on LinkedIn or start a conversation.
6. Retain warm paper, blue accents and the unbranded portrait. Use dark headline text and blue primarily for links and actions on the homepage and building page.

## Surface contract

Route: `/building/`. Preserve `/work` and `/mission` legacy redirects. Keep `#work` and restore `#caretrics` at the homepage invitation so historical incoming links still find a meaningful destination.

First viewport: a dark, generous statement about the chance to build something of your own, a short account of the ambition, and links to the personal why and current work. No product logo strip, invented traction, or decorative diagram. Continue the existing Manrope/Inter typography and warm theme.

Reading order: ambition → personal reasons → Togetheren and developing SkillNav → Caretrics → the standard for useful technology → follow/contact invitation. Open text, thin rules and one quiet tonal section provide variation. The personal section uses the existing outdoor image; the homepage retains its approved portrait.

Motion: inherit finite arrow feedback and mobile-menu entrance. All content is immediately visible; reduced motion and no-JavaScript reading remain supported. No new runtime dependency.

Homepage: retain its current headline and reading selections. Replace the full project descriptions with a compact mission invitation. Update the navigation and hero link to the new page. Reading remains the primary homepage action.

## Evidence and copy boundaries

- Windsor/blue-collar background: current approved `src/data/editorial.ts` About copy.
- Athlete Builder found youth-sports customers but had unsustainable economics: approved About copy and `docs/COPY.md` factual correction.
- Dad’s work, breakfasts and ordinary pleasures: Rob’s 2011 `enjoy-the-little-things` essay. Use only that already-public recollection; no private stories about Rob’s children.
- Product descriptions/status: `PRODUCT.md` and current editorial data. No launch, adoption, integrations or quantified outcomes added.
- New opinions are presented as Rob’s approved ambition, not achieved results.

## Verification

Review homepage and building page at 1440, 900 and 390px. Check all seven supported widths through the existing layout gate. Exercise new navigation, anchors, active state, keyboard focus, reduced motion, no-JavaScript content and internal destinations. Preserve draft exclusions and legacy redirects. Run the repository gate and obtain a fresh Impeccable finish review.

## Decision record status

Automatic approval review initially blocked the append to CAR-1171. Rob then explicitly authorized recording the six decisions in that destination. The append succeeded on 2026-10-19 under “Decisions — 2026-10-19 mission page”; the existing issue history was preserved.
