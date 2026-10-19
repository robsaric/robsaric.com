import { getCollection } from 'astro:content';
import { EARLIER_WRITING } from '../data/editorial';
import { getPublishedNotes, noteHref } from './notes';

export interface ReadingItem {
  title: string;
  summary: string;
  href: string;
  date: Date;
  earlier: boolean;
}
export async function getEarlierWriting(): Promise<ReadingItem[]> {
  const entries = await getCollection('archive', entry => !entry.data.draft);
  return EARLIER_WRITING.flatMap(selection => {
    const entry = entries.find(item => item.id === selection.id);
    return entry ? [{ title: entry.data.title, summary: selection.summary, href: `/archive/${entry.id}/`, date: entry.data.date, earlier: true }] : [];
  });
}
export async function getRecentWriting(): Promise<ReadingItem[]> {
  return (await getPublishedNotes()).map(entry => ({
    title: entry.data.title, summary: entry.data.summary,
    href: noteHref(entry), date: entry.data.date, earlier: false,
  }));
}
