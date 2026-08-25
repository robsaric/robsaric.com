#!/usr/bin/env node
/**
 * Content gate: the note traps that every other check passes.
 *
 * `astro check` validates the collection schema and `astro build` exits 0 on all
 * of the following, because none of them is a type error:
 *   1. A Now item pointing at a note that is still `draft: true`. The link works
 *      in `pnpm dev` and 404s in production. This is the expensive one.
 *   2. A `description` between 156 and 200 characters. The schema allows 200,
 *      `src/lib/seo.ts` clamps at 155, so it silently truncates in search.
 *   3. A `summary` over 155 with no `description`, which truncates the same way
 *      because summary is the fallback.
 *   4. A filename date prefix that disagrees with the `date` field. The filename
 *      is the permanent URL; the field drives the ordering and the byline.
 *   5. A `meta` string whose stage name disagrees with the `stage` index, so the
 *      card footer and the five-dot rail tell the reader different things.
 *   6. A published note without its 1200x630 OG share card in public/og/notes/,
 *      so the page ships an og:image URL that 404s and shares carry no image.
 *   7. A stat/statLabel half-pair, which the OG card stat slot cannot render.
 *
 * Run: pnpm check:notes   (also runs inside `pnpm gate`, after the build)
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { frontmatter, isDraft } from './lib/frontmatter.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const NOTES_DIR = join(ROOT, 'src', 'content', 'notes');
const DIST = join(ROOT, 'dist', 'client');
const OG_DIR = join(ROOT, 'public', 'og', 'notes');

/** Keep in step with DESCRIPTION_LIMIT in src/lib/seo.ts. */
const DESCRIPTION_LIMIT = 155;

const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

/**
 * PNG pixel size from the IHDR chunk, which the format fixes at bytes 16..23.
 * Returns null when the file is missing or not a PNG.
 */
function pngSize(path) {
  if (!existsSync(path)) return null;
  const buf = readFileSync(path);
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

/** Stage names in index order, read from the data file rather than duplicated. */
function stageNames() {
  const source = readFileSync(join(ROOT, 'src', 'data', 'stages.ts'), 'utf8');
  return [...source.matchAll(/^\s*name:\s*['"]([^'"]+)['"]/gmu)].map((m) => m[1]);
}

/** Every href in the Now strip, with whether the item is a draft. */
function nowItems() {
  const source = readFileSync(join(ROOT, 'src', 'data', 'now.ts'), 'utf8');
  const items = [];
  for (const block of source.split(/\{\s*\n/u).slice(1)) {
    const href = /href:\s*['"]([^'"]+)['"]/u.exec(block);
    if (!href) continue;
    items.push({ href: href[1], draft: /draft:\s*true/u.test(block) });
  }
  return items;
}

const STAGES = stageNames();

// ---- notes -----------------------------------------------------------------

const noteFiles = existsSync(NOTES_DIR)
  ? readdirSync(NOTES_DIR).filter((name) => /\.mdx?$/u.test(name))
  : [];

for (const name of noteFiles) {
  const where = `src/content/notes/${name}`;
  const data = frontmatter(readFileSync(join(NOTES_DIR, name), 'utf8'));
  if (!data) {
    fail(where, 'no frontmatter block');
    continue;
  }

  const prefix = /^(\d{4}-\d{2}-\d{2})-/u.exec(name);
  if (!prefix) {
    fail(where, 'filename must start with YYYY-MM-DD-, it is the permanent URL');
  } else if (data.date && data.date !== prefix[1]) {
    fail(where, `filename date ${prefix[1]} does not match date: ${data.date}`);
  }

  // The URL and the OG card path both come from Astro's entry.id, which is the
  // filename run through github-slugger (or a frontmatter `slug`, which the
  // schema then silently strips). A stem that is not already a clean slug
  // diverges from its id: the page ships /og/notes/<slugified>.png while the
  // generator wrote <raw>.png, and the og:image 404s with the gate green. An
  // already-clean stem passes through the slugger unchanged, so requiring one
  // pins filename == entry.id and keeps every derived path honest.
  const stem = name.replace(/\.mdx?$/u, '');
  if (!/^[a-z0-9-]+$/u.test(stem)) {
    fail(where, `filename stem "${stem}" must be a clean slug (lowercase a-z, 0-9, hyphens): Astro slugifies the id and every URL derived from it would diverge from this file`);
  }
  if (data.slug !== undefined) {
    fail(where, 'frontmatter `slug` is not allowed: it silently rewrites entry.id away from the filename, and the filename is the permanent URL');
  }

  if (data.description && data.description.length > DESCRIPTION_LIMIT) {
    fail(where, `description is ${data.description.length} chars, clamps at ${DESCRIPTION_LIMIT} and truncates`);
  }

  if (!data.description && data.summary && data.summary.length > DESCRIPTION_LIMIT) {
    fail(
      where,
      `summary is ${data.summary.length} chars and there is no description, so the meta description`
      + ` truncates at ${DESCRIPTION_LIMIT}. Add a description under ${DESCRIPTION_LIMIT}.`,
    );
  }

  const stage = data.stage === undefined ? -1 : Number(data.stage);
  if (data.meta && stage >= 0 && STAGES[stage]) {
    const expected = STAGES[stage];
    if (!data.meta.startsWith(expected)) {
      fail(where, `meta "${data.meta}" does not start with stage ${stage} ("${expected}")`);
    }
  }

  // 7. A stat half-pair. The OG card's stat slot needs both the value and its
  //    label; one without the other means a card silently falls back to the
  //    plain layout (or would render a bare number with no claim).
  if (Boolean(data.stat) !== Boolean(data.statLabel)) {
    fail(where, 'stat and statLabel come as a pair; one without the other and the OG card stat slot cannot render');
  }
  if (data.statContext && !data.stat) {
    fail(where, 'statContext without stat does nothing; the OG card stat slot renders only from stat + statLabel');
  }

  // 6. A published note without its OG share card. The page still builds and
  //    ships pointing at a PNG that 404s, so every share falls back to no image.
  if (!isDraft(data)) {
    const size = pngSize(join(OG_DIR, `${stem}.png`));
    if (!size) {
      fail(where, `published note has no OG card at public/og/notes/${stem}.png. Run \`pnpm generate:og\` and commit the PNG.`);
    } else if (size.width !== 1200 || size.height !== 630) {
      fail(where, `OG card is ${size.width}x${size.height}, must be 1200x630. Re-run \`pnpm generate:og\`.`);
    }
  }
}

// ---- Now strip -------------------------------------------------------------

if (!existsSync(DIST)) {
  fail('dist/client', 'not found, run `astro build` before this gate');
} else {
  for (const { href, draft } of nowItems()) {
    if (draft) continue;
    if (!href.startsWith('/')) continue;
    if (!href.endsWith('/')) {
      fail('src/data/now.ts', `href "${href}" needs a trailing slash (trailingSlash: 'always')`);
      continue;
    }
    if (!existsSync(join(DIST, href, 'index.html'))) {
      fail(
        'src/data/now.ts',
        `href "${href}" is not in the production build.`
        + ' If it points at a note, that note is still draft: true. This link 404s in production.',
      );
    }
  }
}

// ---- report ----------------------------------------------------------------

if (errors.length > 0) {
  console.error(`check-notes: ${errors.length} problem(s)\n`);
  for (const error of errors) console.error(`  ${error}`);
  console.error('');
  process.exit(1);
}

console.log(`check-notes: ${noteFiles.length} note(s), Now strip resolves, no problems`);
