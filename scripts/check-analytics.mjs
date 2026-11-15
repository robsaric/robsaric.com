#!/usr/bin/env node
/** Verify Web Analytics on every built page rendered through BaseLayout. */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { join, relative } from 'node:path';
import { createContext, runInContext } from 'node:vm';

const DIST = fileURLToPath(new URL('../dist/client/', import.meta.url));
const BASE_LAYOUT = /<html\b[^>]*\bdata-appearance="day"[^>]*>/u;
const SCRIPT = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/giu;
const SRC_ATTRIBUTE = /(?:^|\s)src(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?(?=\s|\/?$)/iu;
const LOADER_SRC = '/_vercel/insights/script.js';
const TEST_LOCATION = {
  href: 'https://robsaric.com/confirm/?token=abc.def#frag',
  origin: 'https://robsaric.com',
  pathname: '/confirm/',
};
const URL_CASES = [
  ['https://robsaric.com/confirm/?token=abc.def#frag', 'https://robsaric.com/confirm/'],
  ['/subscribed/?status=ok', 'https://robsaric.com/subscribed/'],
  ['https://robsaric.com/writing/', 'https://robsaric.com/writing/'],
  ['http://[', 'https://robsaric.com/confirm/'],
];

/** @typedef {{ attributes: string, text: string, start: number, end: number }} ScriptElement */

/**
 * @param {string} directory
 * @returns {string[]}
 */
function htmlFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...htmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path);
    }
  }
  return files;
}

/**
 * @param {string} html
 * @returns {ScriptElement[]}
 */
function scriptElements(html) {
  return [...html.matchAll(SCRIPT)].map((match) => {
    const start = match.index ?? 0;
    return {
      attributes: match[1] ?? '',
      text: match[2] ?? '',
      start,
      end: start + match[0].length,
    };
  });
}

/**
 * @param {string} attributes
 * @returns {string | null}
 */
function scriptSource(attributes) {
  const match = attributes.match(SRC_ATTRIBUTE);
  if (!match) return null;
  return match[1] ?? match[2] ?? match[3] ?? '';
}

/**
 * @param {unknown} error
 * @returns {string}
 */
function errorMessage(error) {
  if (
    error
    && typeof error === 'object'
    && 'message' in error
    && typeof error.message === 'string'
  ) {
    return error.message;
  }
  return String(error);
}

/**
 * @param {string} source
 * @param {string} where
 * @returns {string | null}
 */
function checkFilterBehaviour(source, where) {
  const context = createContext({
    URL,
    location: { ...TEST_LOCATION },
  });
  runInContext('globalThis.window = globalThis', context);

  try {
    runInContext(source, context, { filename: where, timeout: 1000 });
  } catch (error) {
    return `inline analytics script threw while running: ${errorMessage(error)}`;
  }

  if (!Array.isArray(context.vaq)) {
    return 'inline analytics script did not create window.vaq as an array';
  }

  const registration = context.vaq[0];
  if (
    !registration
    || registration[0] !== 'beforeSend'
    || typeof registration[1] !== 'function'
  ) {
    return 'window.vaq first entry must register a beforeSend function';
  }

  context.__analyticsFilterUnderTest = registration[1];

  for (const [input, expected] of URL_CASES) {
    context.__analyticsEventUnderTest = { type: 'pageview', url: input };

    let result;
    try {
      result = runInContext(
        'globalThis.__analyticsFilterUnderTest(globalThis.__analyticsEventUnderTest)',
        context,
        { filename: where, timeout: 1000 },
      );
    } catch (error) {
      return `beforeSend threw for ${JSON.stringify(input)}: ${errorMessage(error)}`;
    }

    if (!result || typeof result !== 'object') {
      return `beforeSend returned a non-object for ${JSON.stringify(input)}`;
    }
    if (result.type !== 'pageview') {
      return `beforeSend did not keep type for ${JSON.stringify(input)}`;
    }
    if (result.url !== expected) {
      return `beforeSend returned ${JSON.stringify(result.url)} for ${JSON.stringify(input)}, expected ${JSON.stringify(expected)}`;
    }
  }

  return null;
}

if (!existsSync(DIST)) {
  console.error('check-analytics: dist/client not found, run `astro build` before this gate');
  process.exit(1);
}

/** @type {string[]} */
const errors = [];
let pages = 0;

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  if (!BASE_LAYOUT.test(html)) continue;

  pages++;
  const where = relative(DIST, file).replaceAll('\\', '/');
  const scripts = scriptElements(html);
  const loaders = scripts.filter(
    (script) => scriptSource(script.attributes) === LOADER_SRC,
  );
  const inlineFilters = scripts.filter(
    (script) => scriptSource(script.attributes) === null
      && script.text.includes('beforeSend'),
  );

  if (loaders.length !== 1) {
    errors.push(`${where}: expected one Web Analytics loader, found ${loaders.length}`);
  }

  if (inlineFilters.length !== 1) {
    errors.push(`${where}: expected one inline beforeSend script, found ${inlineFilters.length}`);
  }

  if (
    loaders.length === 1
    && inlineFilters.length === 1
    && inlineFilters[0].end > loaders[0].start
  ) {
    errors.push(`${where}: inline beforeSend script must end before the Web Analytics loader`);
  }

  if (inlineFilters.length === 1) {
    const behaviourError = checkFilterBehaviour(inlineFilters[0].text, where);
    if (behaviourError) errors.push(`${where}: ${behaviourError}`);
  }
}

if (pages === 0) {
  errors.push('dist/client: found zero BaseLayout pages');
}

if (errors.length > 0) {
  console.error(`check-analytics: ${errors.length} problem(s)\n`);
  for (const error of errors) console.error(`  ${error}`);
  console.error('');
  process.exit(1);
}

console.log(`check-analytics: ${pages} BaseLayout page(s); each runs the URL filter before one Web Analytics loader`);
