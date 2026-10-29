# Seasonal homepage character

Status: reviewed locally; Rob approved publishing on October 29, 2026. Deployment verification follows the release.

Rob requested a Halloween wand scene with flying image tiles and OpenAI, Claude and Meta Muse logos. Preserve the existing animations for future reuse. This is a seasonal variation of the homepage only, with the current editorial ink style. Footer and 404 remain unchanged.

## Switching scenes

`src/data/hero-scenes.ts` owns `HERO_SCENE`:

- `halloween`: the wizard in both day and night appearance.
- `everyday`: the original daytime runner and nighttime reader, unchanged.

This is an explicit editorial switch, not an automatic holiday calendar. Future scenes should get their own component and assets, then another named option here. Do not overwrite the earlier strips. Publication still requires review.

## Motion

The wizard lifts and flicks the wand, image tiles and brand marks rise, and he looks toward the reader. The performance occupies about seven seconds of a fifteen-second cycle. The remaining time is quiet. One 44px pause/resume control pauses every layer in place. Offscreen, hidden tabs and page exits pause it. Reduced motion, missing JavaScript and unsupported animation APIs retain a composed still. No sound, external runtime requests or animation dependency.

The browser uses the Web Animations API rather than a JavaScript frame loop. A resize re-registers the flight paths while preserving progress. The generated WebP sprite is about 100 KB. Sources stay out of the public bundle.

Local preview: `/`. Development-only still review: `/?motion=still`.

## Assets and provenance

- Character: generated using the built-in image tool, with Rob's supplied portrait and the existing runner as references. Source: `src/assets/illustrations/halloween-wizard-source.png`.
- Packaging: `node scripts/prepare-halloween-character.mjs` produces `public/illustrations/rob-ink/halloween.webp`; four registered 384px cells, original source retained.
- Claude mark: https://claude.com/icon.svg
- Meta mark on the official Muse page: https://ai.meta.com/muse/ ; asset https://static.xx.fbcdn.net/rsrc.php/yf/r/-7pQO6hUGK_.svg . Labelled Meta Muse; not represented as a separately verified Muse-only logo.
- OpenAI vector: https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-svg/icons/openai.svg . Brand context: https://openai.com/brand/ . Lobe Icons collection is MIT; brand marks remain the property of their respective owners.
- The landscape and pumpkin miniatures are authored SVG drawings. Brand tiles denote tools in the playful scene, not partnerships or endorsements.

### Generation prompt

Four full-body poses in a 2x2 transparent sheet. Match Rob's bald head, salt-and-pepper beard, sturdy build and warm expression using his portrait and the site's existing ink character as references. Black ink editorial cartoon, grey wash and sparse hatching. Slightly crooked wizard hat and short dark cape over a light sweater, dark trousers and white sneakers. Face three-quarter right; align feet and body across cells. Poses: relaxed wand at waist; wand lifted; upward flick; wand held up with a knowing glance to the viewer. No logos, flying objects, background or text in the sprite; these are separate code layers. Built-in image generation, not a CLI/API fallback.

## Review

Check the whole hero at desktop, intermediate and phone sizes; day and night; pause/resume; reduced motion; hidden and offscreen suspension. `pnpm gate` includes `tests/halloween-character.test.mjs` alongside the unchanged original-character tests.

Validation completed: full pnpm gate passed, including 238 layout checks (17 routes, seven widths, two appearances). Desktop, intermediate and phone previews inspected; day/night, pause/resume and reduced-motion behavior checked. Astro check passed after the development-only still-review option was added. Original character assets remain unchanged. Local preview opened; no publication performed.
