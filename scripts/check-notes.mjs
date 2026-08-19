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
 *
 * Run: pnpm check:notes   (also runs inside `pnpm gate`, after the build)
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const NOTES_DIR = join(ROOT, 'src', 'content', 'notes');
const DIST = join(ROOT, 'dist', 'client');

/** Keep in step with DESCRIPTION_LIMIT in src/lib/seo.ts. */
const DESCRIPTION_LIMIT = 155;

const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

/** Minimal frontmatter reader. Only the scalar fields this gate cares about. */
function frontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;

  const data = {};
  for (const line of raw.slice(3, end).split('\n')) {
    const match = /^([a-zA-Z]+):\s*(.*)$/.exec(line);
    if (!match) continue;
    const [, key, rest] = match;
    let value = rest.trim();
    if (value === '') continue;
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return data;
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
