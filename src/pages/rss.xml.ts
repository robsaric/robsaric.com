import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { COPY } from '../data/copy';
import { SITE } from '../data/site';
import { UI } from '../data/ui';
import {
  getPublishedNotes,
  noteHref,
} from '../lib/notes';

export async function GET(context: APIContext) {
  const notes = await getPublishedNotes();

  return rss({
    title: `${COPY.pages.fieldNotes.title}${UI.meta.titleSeparator}${SITE.name}`,
    description: COPY.pages.fieldNotes.description,
    site: context.site ?? SITE.url,
    items: notes.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.summary,
      link: noteHref(entry),
    })),
  });
}
