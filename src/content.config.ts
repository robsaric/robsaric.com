import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { NOTE_TAGS, NOTE_TYPES } from './data/filters';

/**
 * Field notes: the current writing. Cards on the homepage show `summary`, not
 * the title. `stage` is the Caretrics stage index (0 Found .. 4 Paid) or -1
 * when a note is not about a stage; it drives the five-dot rail on the card.
 */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences. This is the card body. Keep it under 200 characters. */
    summary: z.string().max(220),
    type: z.enum(NOTE_TYPES),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.enum(NOTE_TAGS)).min(1),
    stage: z.number().int().min(-1).max(4).default(-1),
    /** Card footer meta, e.g. "Paid · Aging AR workspace". Falls back to stage · first tag. */
    meta: z.string().optional(),
    description: z.string().max(200).optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Archive: the 2009 to 2019 WordPress posts, kept as written. Imported by
 * scripts/import-legacy.mjs. `originalUrl` is the URL that now 301s here.
 */
const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    originalUrl: z.string().url(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, archive };
