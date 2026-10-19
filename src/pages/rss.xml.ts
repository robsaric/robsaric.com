import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { EDITORIAL } from '../data/editorial';
import { SITE } from '../data/site';
import { UI } from '../data/ui';
import {
  getPublishedNotes,
  noteHref,
} from '../lib/notes';

export async function GET(context: APIContext) {
  const notes = (await getPublishedNotes()).filter(entry => !entry.data.draft);

  return rss({
    title: `${EDITORIAL.writing.pageTitle}${UI.meta.titleSeparator}${SITE.name}`,
    description: EDITORIAL.writing.pageIntro,
    site: context.site ?? SITE.url,
    items: notes.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.summary,
      link: noteHref(entry),
    })),
  });
}
