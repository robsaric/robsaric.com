import { getCollection } from 'astro:content';
import { EARLIER_WRITING, NEXT_READS } from '../data/editorial';
import { getPublishedNotes, noteHref } from './notes';
import { WRITING_THREADS, type WritingThread } from '../data/writing-threads';

export interface ReadingItem {
  title: string;
  summary: string;
  href: string;
  date: Date;
  earlier: boolean;
  threads?: WritingThread[];
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
    threads: WRITING_THREADS[entry.id] ?? [],
  }));
}

export async function getNextRead(pathname: string): Promise<ReadingItem | undefined> {
  const choices = NEXT_READS[pathname];
  if (!choices) return;

  // Resolve against the same visible collections as the index, so curated
  // links never expose an unpublished essay in an ordinary production build.
  const available = [...await getRecentWriting(), ...await getEarlierWriting()];
  for (const choice of choices) {
    const item = available.find(entry => entry.href === choice.href && entry.href !== pathname);
    if (item) return { ...item, summary: choice.reason };
  }
}
