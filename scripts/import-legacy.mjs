import TurndownService from 'turndown';
import {
  access,
  mkdir,
  readdir,
  stat,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEGACY_POST_SLUGS } from '../src/data/legacy-redirects.mjs';

const POSTS_URL =
  'https://robsaric.com/wp-json/wp/v2/posts?per_page=100&_fields=id,slug,date,modified,title,content,excerpt,categories,link';
const CATEGORIES_URL =
  'https://robsaric.com/wp-json/wp/v2/categories?per_page=100&_fields=id,name';

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url));
const ARCHIVE_CONTENT_DIR = path.join(
  REPO_ROOT,
  'src',
  'content',
  'archive',
);
const ARCHIVE_IMAGE_DIR = path.join(
  REPO_ROOT,
  'public',
  'archive',
);

const NAMED_ENTITIES = {
  amp: '&',
  apos: "'",
  quot: '"',
  lt: '<',
  gt: '>',
  nbsp: ' ',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  bull: '•',
  copy: '©',
  reg: '®',
  trade: '™',
};

function parseOptions(argv) {
  const options = {
    force: false,
    dry: false,
    only: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--force') {
      options.force = true;
      continue;
    }

    if (argument === '--dry') {
      options.dry = true;
      continue;
    }

    if (argument === '--only') {
      const slug = argv[index + 1];
      if (!slug || slug.startsWith('--')) {
        throw new Error('--only requires a slug.');
      }
      options.only.push(slug);
      index += 1;
      continue;
    }

    if (argument.startsWith('--only=')) {
      const slug = argument.slice('--only='.length);
      if (!slug) throw new Error('--only requires a slug.');
      options.only.push(slug);
      continue;
    }

    throw new Error(`Unknown option: ${argument}`);
  }

  const unknownSlugs = options.only.filter(
    (slug) => !LEGACY_POST_SLUGS.includes(slug),
  );

  if (unknownSlugs.length > 0) {
    throw new Error(
      `Unknown legacy slug(s): ${unknownSlugs.join(', ')}`,
    );
  }

  options.only = [...new Set(options.only)];
  return options;
}

async function fetchJson(url, label) {
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    const detail = (await response.text()).trim().slice(0, 500);
    throw new Error(
      `${label} request failed with ${response.status} ${response.statusText}${detail ? `: ${detail}` : ''}`,
    );
  }

  return response.json();
}

function decodeNumericEntity(match, hexadecimal, value) {
  const codePoint = Number.parseInt(value, hexadecimal ? 16 : 10);

  if (
    !Number.isInteger(codePoint)
    || codePoint < 0
    || codePoint > 0x10ffff
    || (codePoint >= 0xd800 && codePoint <= 0xdfff)
  ) {
    return match;
  }

  return String.fromCodePoint(codePoint);
}

function decodeHtmlEntities(value) {
  let decoded = String(value ?? '');

  for (let pass = 0; pass < 2; pass += 1) {
    const previous = decoded;

    decoded = decoded
      .replace(
        /&#(x?)([0-9a-f]+);/gi,
        (match, hexadecimal, number) =>
          decodeNumericEntity(match, Boolean(hexadecimal), number),
      )
      .replace(/&([a-z][a-z0-9]+);/gi, (match, name) => (
        NAMED_ENTITIES[name.toLowerCase()] ?? match
      ));

    if (decoded === previous) break;
  }

  return decoded;
}

function stripHtml(value) {
  return decodeHtmlEntities(
    String(value ?? '')
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/(?:p|div|li|h[1-6]|blockquote)>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/gu, ' ')
    .trim();
}

function excerptFromHtml(value) {
  const excerpt = stripHtml(value);
  return excerpt.length > 240
    ? excerpt.slice(0, 240).trimEnd()
    : excerpt;
}

function yamlQuote(value) {
  return JSON.stringify(String(value));
}

function createTurndownService() {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });

  turndown.remove(['script', 'style']);

  turndown.addRule('wordpress-widgets', {
    filter(node) {
      if (node.nodeType !== 1) return false;

      const marker = [
        node.getAttribute?.('class') ?? '',
        node.getAttribute?.('id') ?? '',
      ].join(' ').toLowerCase();

      return [
        'sharedaddy',
        'sd-sharing',
        'sd-like',
        'jp-relatedposts',
        'related-posts',
        'yarpp',
        'addtoany',
        'shareaholic',
        'wp-block-jetpack-sharing',
      ].some((name) => marker.includes(name));
    },
    replacement() {
      return '';
    },
  });

  turndown.addRule('figure', {
    filter: 'figure',
    replacement(content) {
      const cleaned = content.trim();
      return cleaned ? `\n\n${cleaned}\n\n` : '';
    },
  });

  turndown.addRule('figcaption', {
    filter: 'figcaption',
    replacement(content) {
      const cleaned = content.trim();
      return cleaned ? `\n\n*${cleaned}*\n\n` : '';
    },
  });

  return turndown;
}

function isLegacyUploadUrl(url) {
  const hostname = url.hostname.toLowerCase();

  return (
    (hostname === 'robsaric.com' || hostname === 'www.robsaric.com')
    && url.pathname.startsWith('/wp-content/uploads/')
  );
}

function safeBasename(url) {
  const encodedName = path.posix.basename(url.pathname);
  let decodedName = encodedName;

  try {
    decodedName = decodeURIComponent(encodedName);
  } catch {
    decodedName = encodedName;
  }

  return decodedName
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '-')
    .trim();
}

function collectImageReferences(html, slug) {
  const attributePattern =
    /\b(?:src|srcset)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  const references = new Map();

  for (const match of html.matchAll(attributePattern)) {
    const attributeValue = match[1] ?? match[2] ?? match[3] ?? '';
    const candidates = match[0]
      .toLowerCase()
      .startsWith('srcset')
      ? attributeValue
        .split(',')
        .map((candidate) => candidate.trim().split(/\s+/)[0])
      : [attributeValue];

    for (const candidate of candidates) {
      if (!candidate) continue;

      const decodedCandidate = decodeHtmlEntities(candidate);
      let url;

      try {
        url = new URL(decodedCandidate, 'https://robsaric.com');
      } catch {
        continue;
      }

      if (!isLegacyUploadUrl(url)) continue;

      const basename = safeBasename(url);
      if (!basename) continue;

      const destination = path.join(
        ARCHIVE_IMAGE_DIR,
        slug,
        basename,
      );
      const publicPath =
        `/archive/${slug}/${encodeURIComponent(basename)}`;

      let reference = references.get(destination);

      if (!reference) {
        reference = {
          url,
          destination,
          publicPath,
          originals: new Set(),
        };
        references.set(destination, reference);
      }

      reference.originals.add(candidate);
      reference.originals.add(decodedCandidate);
      reference.originals.add(url.href);
    }
  }

  return [...references.values()];
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage(reference, dry) {
  if (await pathExists(reference.destination)) {
    return true;
  }

  if (dry) {
    console.log(
      `[dry] image ${reference.url.href} -> ${path.relative(REPO_ROOT, reference.destination)}`,
    );
    return true;
  }

  try {
    const response = await fetch(reference.url);

    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}`,
      );
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    await mkdir(path.dirname(reference.destination), {
      recursive: true,
    });

    try {
      await writeFile(reference.destination, bytes, {
        flag: 'wx',
      });
    } catch (error) {
      if (error?.code !== 'EEXIST') throw error;
    }

    return true;
  } catch (error) {
    console.warn(
      `WARN image failed: ${reference.url.href}: ${error.message}`,
    );
    return false;
  }
}

function rewriteReferences(value, references) {
  const replacements = references
    .flatMap((reference) => (
      [...reference.originals].map((original) => ({
        original,
        replacement: reference.publicPath,
      }))
    ))
    .sort((a, b) => b.original.length - a.original.length);

  let rewritten = value;

  for (const { original, replacement } of replacements) {
    rewritten = rewritten.replaceAll(original, replacement);
  }

  return rewritten;
}

function buildArchiveDocument(post, categoryNames, markdown) {
  const title = stripHtml(post.title?.rendered ?? '');
  const excerpt = excerptFromHtml(post.excerpt?.rendered ?? '');
  const date = String(post.date ?? '').slice(0, 10);
  const categories = categoryNames.length > 0
    ? [
      'categories:',
      ...categoryNames.map((name) => `  - ${yamlQuote(name)}`),
    ]
    : ['categories: []'];

  const frontmatter = [
    `title: ${yamlQuote(title)}`,
    `date: ${date}`,
    `originalUrl: ${yamlQuote(`https://robsaric.com/${post.slug}/`)}`,
    ...(excerpt ? [`excerpt: ${yamlQuote(excerpt)}`] : []),
    ...categories,
  ];

  return [
    '---',
    ...frontmatter,
    '---',
    '',
    markdown.trim(),
    '',
  ].join('\n');
}

async function countExistingImages(slug) {
  try {
    const entries = await readdir(
      path.join(ARCHIVE_IMAGE_DIR, slug),
      { withFileTypes: true },
    );
    return entries.filter((entry) => entry.isFile()).length;
  } catch {
    return 0;
  }
}

async function existingSummary(slug, outputPath) {
  const details = await stat(outputPath);

  return {
    slug,
    bytes: details.size,
    images: await countExistingImages(slug),
    status: 'existing',
  };
}

async function importPost({
  post,
  categoryMap,
  options,
}) {
  const slug = post.slug;
  const outputPath = path.join(
    ARCHIVE_CONTENT_DIR,
    `${slug}.md`,
  );
  const exists = await pathExists(outputPath);

  if (exists && !options.force) {
    return existingSummary(slug, outputPath);
  }

  const rawHtml = String(post.content?.rendered ?? '')
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');

  const references = collectImageReferences(rawHtml, slug);
  const availableReferences = [];

  for (const reference of references) {
    if (await downloadImage(reference, options.dry)) {
      availableReferences.push(reference);
    }
  }

  const rewrittenHtml = rewriteReferences(
    rawHtml,
    availableReferences,
  );
  const turndown = createTurndownService();
  let markdown = turndown.turndown(rewrittenHtml);
  markdown = rewriteReferences(markdown, availableReferences);

  const categoryNames = (post.categories ?? [])
    .map((categoryId) => {
      const category = categoryMap.get(categoryId);

      if (!category) {
        console.warn(
          `WARN ${slug}: category ${categoryId} was not returned by the API.`,
        );
        return undefined;
      }

      return decodeHtmlEntities(category.name);
    })
    .filter(Boolean);

  const document = buildArchiveDocument(
    post,
    categoryNames,
    markdown,
  );
  const bytes = Buffer.byteLength(document, 'utf8');

  if (options.dry) {
    console.log(
      `\n--- ${path.relative(REPO_ROOT, outputPath)} ---\n${document}`,
    );

    return {
      slug,
      bytes,
      images: availableReferences.length,
      status: 'dry',
    };
  }

  await mkdir(ARCHIVE_CONTENT_DIR, { recursive: true });
  await writeFile(outputPath, document, {
    encoding: 'utf8',
    flag: options.force ? 'w' : 'wx',
  });

  return {
    slug,
    bytes,
    images: availableReferences.length,
    status: 'written',
  };
}

async function main() {
  const options = parseOptions(process.argv.slice(2));
  const selectedSlugs = options.only.length > 0
    ? LEGACY_POST_SLUGS.filter((slug) =>
      options.only.includes(slug))
    : [...LEGACY_POST_SLUGS];

  const [posts, categories] = await Promise.all([
    fetchJson(POSTS_URL, 'Posts'),
    fetchJson(CATEGORIES_URL, 'Categories'),
  ]);

  if (!Array.isArray(posts) || !Array.isArray(categories)) {
    throw new Error('WordPress returned an unexpected response shape.');
  }

  const listedSlugs = new Set(LEGACY_POST_SLUGS);
  const apiSlugs = new Set(posts.map((post) => post.slug));
  const postsBySlug = new Map();
  let redirectMapIncomplete = false;

  for (const post of posts) {
    if (postsBySlug.has(post.slug)) {
      console.error(`ERROR duplicate API slug: ${post.slug}`);
      redirectMapIncomplete = true;
    }
    postsBySlug.set(post.slug, post);
  }

  for (const slug of LEGACY_POST_SLUGS) {
    if (!apiSlugs.has(slug)) {
      console.warn(`WARN post not returned by API: ${slug}`);
    }
  }

  for (const post of posts) {
    if (!listedSlugs.has(post.slug)) {
      console.error(
        `ERROR redirect map is missing API slug: ${post.slug}`,
      );
      redirectMapIncomplete = true;
    }
  }

  const categoryMap = new Map(
    categories.map((category) => [category.id, category]),
  );
  const summary = [];

  for (const slug of selectedSlugs) {
    const post = postsBySlug.get(slug);
    const outputPath = path.join(
      ARCHIVE_CONTENT_DIR,
      `${slug}.md`,
    );

    if (!post) {
      if (
        !options.force
        && await pathExists(outputPath)
      ) {
        summary.push(await existingSummary(slug, outputPath));
      } else {
        console.error(`ERROR cannot import missing post: ${slug}`);
        summary.push({
          slug,
          bytes: 0,
          images: 0,
          status: 'failed',
        });
      }
      continue;
    }

    try {
      summary.push(await importPost({
        post,
        categoryMap,
        options,
      }));
    } catch (error) {
      console.error(`ERROR ${slug}: ${error.message}`);
      summary.push({
        slug,
        bytes: 0,
        images: 0,
        status: 'failed',
      });
    }
  }

  console.log('');
  console.table(summary);

  const completeStatuses = new Set([
    'written',
    'existing',
    'dry',
  ]);
  const everySelectedPostComplete =
    summary.length === selectedSlugs.length
    && summary.every((row) => completeStatuses.has(row.status));

  if (redirectMapIncomplete || !everySelectedPostComplete) {
    process.exitCode = 1;
    console.error('Legacy import did not complete cleanly.');
    return;
  }

  console.log(
    options.dry
      ? `Dry run complete for ${summary.length} post(s).`
      : `Legacy import complete for ${summary.length} post(s).`,
  );
}

main().catch((error) => {
  console.error(`Legacy import failed: ${error.message}`);
  process.exitCode = 1;
});
