#!/usr/bin/env node
/**
 * Copy lint: the mechanical half of docs/COPY.md "Copy law".
 * Scans site copy (components, pages, data, content) for:
 *   1. em dashes (U+2014)
 *   2. banned hype / empty-verb / jargon words
 *   3. chatbot-tone openers and exclamation marks in prose
 *   4. banned credential phrasings
 * Exit 1 on any hit. Run: pnpm lint:copy
 *
 * Suppress a single line with the comment marker `copy-lint-ignore` on that line
 * (only for code that talks ABOUT the rule, e.g. this file's own tests).
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
// `public` is scanned because public/llms.txt restates the locked credential and
// the site description verbatim, and used to sit outside every check.
const SCAN_DIRS = [
  'src/components', 'src/layouts', 'src/pages', 'src/data', 'src/content', 'public',
];
const EXTS = new Set([
  '.astro', '.ts', '.tsx', '.mjs', '.js', '.md', '.mdx', '.json', '.txt',
]);
// The archive is historical writing kept as written; it is exempt from tone rules
// but not from the em-dash rule? Old posts predate the rule; exempt entirely.
const EXEMPT_PREFIXES = ['src/content/archive', 'public/archive'];

/**
 * What this gate blocks, and what it only flags.
 *
 * An ERROR is for a broken COMMITMENT: a locked factual claim, or a house rule
 * Rob has explicitly set. A WARNING is for TASTE. The two used to be the same
 * severity, which meant the lint could force unnatural wording to get a build
 * green, and that is backwards. An authentic human voice matters more than
 * mechanical word control, so taste words are surfaced for a person to judge
 * rather than blocked outright (Rob, 2026-08-19).
 *
 * Before adding anything here, ask: does this protect a promise, or a
 * preference? Preferences go in WARN_WORDS.
 */
const BANNED_WORDS = [
  // Credential phrasings locked out by docs/COPY.md item 7. These are the only
  // word bans that protect a fact rather than a taste: they re-create the claim
  // that "50+ clinics, firsthand" deliberately replaced.
  'clinic owners advised', 'advisor to 50', 'ex-dso', 'audited by hand', 'by hand', 'the books',
  '40+ clinics',
  // The locked credential (docs/COPY.md item 7) bans these outright, not only in
  // the phrasings above. The verbs are the claim: "I advised clinic owners" and
  // "I audited fifty clinics" both used to pass, and both re-create the credential
  // that "50+ clinics, firsthand" deliberately replaced.
  //
  // The NOUNS are not banned. "advisor" and "advisory" name roles, and a named
  // role ("Canadian Digital Adoption Program advisor") is a checkable job title,
  // not a claim about how many clinics were advised. Banning them was an
  // over-correction on 2026-08-19; narrowed 2026-08-19.
  //
  // "audit" also stays legal: "audit trail retained" is approved copy.
  'audited', 'advised',
];
/**
 * Taste, not truth. These get a human's eye, not a failed build. Some have
 * perfectly good uses ("optimize the images", "transform the data"), and a word
 * that is wrong in a headline can be right in a sentence.
 */
const WARN_WORDS = [
  // declared rather than earned
  'simple', 'powerful', 'easy', 'modern', 'smart', 'insights', 'dashboard',
  // generic SaaS adjectives
  'seamless', 'intuitive', 'robust', 'best-in-class', 'world-class', 'cutting-edge',
  'next-gen', 'revolutionary', 'game-changing', 'industry-leading',
  // empty value verbs
  'unlock', 'transform', 'supercharge', 'elevate', 'empower',
  // corporate jargon
  'leverage', 'synergy', 'optimize', 'optimise',
];

const CHATBOT = [
  /\bgreat question\b/i, /\babsolutely!/i, /\bi love this\b/i, /\bhope this helps\b/i,
  /\bwhat a fantastic\b/i, /\bi'?m happy to help\b/i, /\btotally makes sense\b/i,
  /\bexciting milestone\b/i, /\bi just wanted to reach out\b/i,
];

const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (EXTS.has(extname(name))) files.push(p);
  }
}
for (const d of SCAN_DIRS) {
  try { walk(join(ROOT, d)); } catch { /* dir may not exist yet */ }
}

let errors = 0;
let warnings = 0;
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordRe = (w) => new RegExp(`(^|[^\\w-])${escapeRe(w)}(?=$|[^\\w-])`, 'i');

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  if (EXEMPT_PREFIXES.some((p) => rel.startsWith(p))) continue;
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  let inStyle = false; // CSS is not copy: skip word rules inside <style> blocks
  // Comment skipping applies to CODE only. Markdown uses `*` for bullets and
  // emphasis, so running it over .md would silently skip real copy.
  const isCode = ['.astro', '.ts', '.tsx', '.mjs', '.js'].includes(extname(file));
  let inComment = false;
  lines.forEach((line, i) => {
    if (line.includes('copy-lint-ignore')) return;
    const where = `${rel}:${i + 1}`;

    // A comment is not copy. Linting them made the gate police the code: a
    // JSDoc header failed the build for an em dash, and a note saying
    // "optimize this loop" would too.
    if (isCode) {
      if (inComment) {
        if (/\*\//.test(line)) inComment = false;
        return;
      }
      if (/^\s*\/\*/.test(line) && !/\*\//.test(line)) { inComment = true; return; }
      if (/^\s*(\/\/|\*|\/\*|<!--)/.test(line)) return;
    }

    // Strip whole-line block comments and trailing line comments before testing.
    const code = isCode ? line.replace(/\/\*[\s\S]*?\*\//g, ' ') : line;

    if (code.includes('—')) { console.error(`ERROR ${where}: em dash`); errors++; }
    if (/<style[\s>]/.test(code)) inStyle = true;
    if (/<\/style>/.test(code)) { inStyle = false; return; }
    if (inStyle || /^\s*[\w-]+\s*:\s*[^:]+;\s*$/.test(code)) return; // CSS declaration lines
    for (const w of BANNED_WORDS) {
      if (wordRe(w).test(code)) { console.error(`ERROR ${where}: banned word "${w}"`); errors++; }
    }
    for (const re of CHATBOT) {
      if (re.test(code)) { console.error(`ERROR ${where}: chatbot tone ${re}`); errors++; }
    }
    // Exclamation marks in prose strings (not in code punctuation like `!==` or `!important`).
    if (/[A-Za-z]![\s"'`)]/.test(code) && !/!==|!important|!\[|<!--/.test(code)) {
      console.error(`ERROR ${where}: exclamation mark in copy`); errors++;
    }
    for (const w of WARN_WORDS) {
      if (wordRe(w).test(code)) { console.warn(`WARN  ${where}: check "${w}" is earned, not declared`); warnings++; }
    }
  });
}

console.log(`copy-lint: ${files.length} files, ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
