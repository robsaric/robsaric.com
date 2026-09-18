# Verification and acceptance

## Personal website implementation

Run existing commands without piping away their exit codes:

```sh
pnpm install --frozen-lockfile
pnpm gate
pnpm generate:og
pnpm gate
```

The second gate is to verify generated assets and any fixes, not permission to repeat tests indefinitely. If no fix affects build output after generation, targeted generated-asset verification can replace redundant work. Use the repository's required gates as the floor.

Inspect screenshots of Home, About, Contact and notes at 390, 900 and 1440. Existing `check:layout` covers 320, 390, 768, 900, 1024, 1280 and 1440, but is not a visual-design review. Check methods and one note/archive template for regressions.

- New H1 and work area communicate a person with a current focus. Caretrics remains easy to find.
- All homepage project links work; Clinic Operations link uses /contact/ until public site passes its checks.
- No multi-location or Jane-only restriction in Clinic Operations invitation.
- One H1, visible keyboard focus, 44px mobile targets, adequate contrast and reduced-motion support.
- Desktop/mobile content has same essential promise and participation option.
- No horizontal overflow, broken image, orphan heading or empty filter result caused by new composition.
- All 38 archive entries and redirects retained. Published note URLs retained; six drafts absent in production feed, pages and sitemap.
- RSS, canonical, schema, OG and llms describe their own domain correctly.
- Existing subscription success/existing/invalid/error behavior preserved. Test with mocks/staging if exercising backend; never add a real person merely to test. No new subscription API code is planned.
- No forced migration, new tracking, dependency upgrade or deployment change hidden in the copy PR.

## Clinic Operations launch

Build/check; inspect all three pages at 390, 900 and 1440, plus 320 overflow. Tab through nav/CTAs. Verify email link and visible fallback address. Launch copy and privacy page must match deployed behavior.

- A solo owner sees themselves included; a multi-site operator also sees relevance.
- Home states that the project is starting, names Rob and discloses Caretrics.
- Primary action leads to participation explanation and email, not software pricing.
- Participant can learn the time commitment, topics, publication process and what they get back.
- No fake article inventory, member counts, partner logos, testimonials, “independent research” or unearned benchmark labels.
- No patient records or screenshots requested; no recording by default; names/quotes approved before publication.
- No promise of a live discussion forum. No automatic sales or newsletter enrollment.
- Production apex loads over HTTPS, www redirects consistently, canonicals point to clinicoperations.com; preview deployments are protected or noindex.
- Check sitemap, robots, OG card and favicon belong to Clinic Operations. No inherited personal-site RSS subscription or archive links.
- Email mailbox is real and tested. Launch default is rob@caretrics.com; do not display a new-domain inbox until provisioned.
- Vercel project and domain are verified by Rob before public outreach links are sent.

## Done report

State exact branch/commit, routes touched, gates passed or blocked, screenshots reviewed, factual omissions and whether deployment was performed. Never call the site launched merely because a build succeeded. No production deployment is authorized by this planning package alone.
