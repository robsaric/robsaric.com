import {
  getCollection,
  type CollectionEntry,
} from 'astro:content';
import { STAGES } from '../data/stages';

export type NoteEntry = CollectionEntry<'notes'>;

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

export async function getPublishedNotes(): Promise<NoteEntry[]> {
  const notes = await getCollection('notes');

  return notes
    .filter((entry) => import.meta.env.DEV || !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function noteHref(entry: NoteEntry): string {
  return `/field-notes/${entry.id}/`;
}

export function noteMeta(entry: NoteEntry): string {
  if (entry.data.meta) return entry.data.meta;

  const firstTag = entry.data.tags[0];
  const stage = STAGES[entry.data.stage];

  if (entry.data.stage >= 0 && stage) {
    return `${stage.name} · ${firstTag}`;
  }

  return firstTag;
}

export function formatNoteDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function noteTypeColorClass(
  type: NoteEntry['data']['type'],
): string {
  return type === 'Changed my mind'
    ? 'note-card__type--changed'
    : '';
}
