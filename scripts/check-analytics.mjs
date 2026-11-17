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

/**
 * The three counted actions. Each selector is the hook the page's own markup
 * carries, so the source checks below fail if one is renamed. An event may
 * carry the page path and, for a download, the file path. Nothing else.
 */
const COPY_SELECTOR = '[data-copy-quick]';
const DOWNLOAD_SELECTOR = 'a[href^="/downloads/"]';
const SIGNUP_SELECTOR = '[data-newsletter-form]';
const DOWNLOAD_HREF = '/downloads/dashboard-test/dashboard-test.zip';
const ALLOWED_EVENT_KEYS = ['page', 'file'];
const SOURCE_HOOKS = [
  ['src/components/ToolboxQuickStart.astro', 'data-copy-quick'],
  ['src/components/Newsletter.astro', 'data-newsletter-form'],
];

/** A stand-in element that answers only the selectors it was given. */
class FakeElement {
  /**
   * @param {string[]} selectors
   * @param {Record<string, string>} [attributes]
   */
  constructor(selectors, attributes = {}) {
    this.selectors = selectors;
    this.attributes = attributes;
    // A reader's typing. The analytics script must never read it.
    this.value = 'private text typed by a reader';
  }
  /** @param {string} selector */
  matches(selector) { return this.selectors.includes(selector); }
  /** @param {string} selector */
  closest(selector) { return this.matches(selector) ? this : null; }
  /** @param {string} name */
  getAttribute(name) { return this.attributes[name] ?? null; }
}

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
  /** @type {Record<string, Array<(event: unknown) => void>>} */
  const listeners = {};
  const context = createContext({
    URL,
    Element: FakeElement,
    location: { ...TEST_LOCATION },
    document: {
      /**
       * @param {string} type
       * @param {(event: unknown) => void} listener
       */
      addEventListener(type, listener) { (listeners[type] ??= []).push(listener); },
    },
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

  return checkEventBehaviour(context, listeners);
}

/**
 * @param {{ vaq: unknown[] }} context
 * @param {Record<string, Array<(event: unknown) => void>>} listeners
 * @returns {string | null}
 */
function checkEventBehaviour(context, listeners) {
  /**
   * @param {string} type
   * @param {unknown} event
   * @returns {unknown[] | string}
   */
  const dispatch = (type, event) => {
    const before = context.vaq.length;
    try {
      for (const listener of listeners[type] ?? []) listener(event);
    } catch (error) {
      return `${type} listener threw: ${errorMessage(error)}`;
    }
    return context.vaq.slice(before).map((entry) => Array.from(/** @type {ArrayLike<unknown>} */ (entry)));
  };
  const page = TEST_LOCATION.pathname;
  /** @type {Array<[string, string, unknown, Array<[string, Record<string, string>]>]>} */
  const cases = [
    ['a prompt copy', 'click', { target: new FakeElement([COPY_SELECTOR]) }, [['Prompt copied', { page }]]],
    ['a download', 'click', { target: new FakeElement([DOWNLOAD_SELECTOR], { href: DOWNLOAD_HREF }) }, [['Download', { page, file: DOWNLOAD_HREF }]]],
    ['a click elsewhere', 'click', { target: new FakeElement([]) }, []],
    ['a click with no element target', 'click', { target: null }, []],
    ['a signup request', 'submit', { target: new FakeElement([SIGNUP_SELECTOR]), defaultPrevented: false }, [['Signup requested', { page }]]],
    ['a signup stopped for an invalid email', 'submit', { target: new FakeElement([SIGNUP_SELECTOR]), defaultPrevented: true }, []],
    ['another form', 'submit', { target: new FakeElement([]), defaultPrevented: false }, []],
  ];

  for (const [label, type, event, expected] of cases) {
    const sent = dispatch(type, event);
    if (typeof sent === 'string') return sent;
    const wanted = expected.map(([name, data]) => ['event', { name, data }]);
    if (JSON.stringify(sent) !== JSON.stringify(wanted)) {
      return `${label}: expected ${JSON.stringify(wanted)}, sent ${JSON.stringify(sent)}`;
    }
    for (const [, payload] of /** @type {Array<[string, { data: Record<string, unknown> }]>} */ (sent)) {
      for (const [key, value] of Object.entries(payload.data)) {
        if (!ALLOWED_EVENT_KEYS.includes(key)) return `${label}: event carries an unexpected key ${JSON.stringify(key)}`;
        if (typeof value !== 'string' || !value.startsWith('/') || /[?#]/u.test(value)) {
          return `${label}: ${key} must be a path with no query or fragment, got ${JSON.stringify(value)}`;
        }
      }
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
let downloadLinks = 0;

for (const [file, hook] of SOURCE_HOOKS) {
  const source = readFileSync(fileURLToPath(new URL(`../${file}`, import.meta.url)), 'utf8');
  if (!source.includes(hook)) errors.push(`${file}: ${hook} is gone, so its action is no longer counted`);
}

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  if (!BASE_LAYOUT.test(html)) continue;

  pages++;
  downloadLinks += html.split('href="/downloads/').length - 1;
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

if (downloadLinks === 0) {
  errors.push('dist/client: found no link to /downloads/, so downloads are no longer counted');
}

if (errors.length > 0) {
  console.error(`check-analytics: ${errors.length} problem(s)\n`);
  for (const error of errors) console.error(`  ${error}`);
  console.error('');
  process.exit(1);
}

console.log(`check-analytics: ${pages} BaseLayout page(s); each runs the URL filter before one Web Analytics loader and counts copies, downloads and signup requests with paths only`);
