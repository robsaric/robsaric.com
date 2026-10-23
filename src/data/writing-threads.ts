export type WritingThread = 'digital' | 'analog';

// Threads describe the writing, independently of the reader's appearance choice.
export const WRITING_THREADS: Record<string, WritingThread[]> = {
  '2026-10-19-are-dashboards-dead': ['digital'],
  '2026-10-18-small-teams-deserve-their-time-back': ['digital'],
  '2026-10-18-building-with-ai-and-life-beyond-the-feed': ['digital', 'analog'],
};
