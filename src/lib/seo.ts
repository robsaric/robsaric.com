const DESCRIPTION_LIMIT = 155;
const ELLIPSIS = '…';

export function clampDescription(description: string): string {
  const normalized = description
    .trim()
    .replace(/\s+/gu, ' ');

  if (normalized.length <= DESCRIPTION_LIMIT) {
    return normalized;
  }

  const availableLength =
    DESCRIPTION_LIMIT - ELLIPSIS.length;
  const candidate = normalized.slice(
    0,
    availableLength + 1,
  );
  const wordBoundary = candidate.lastIndexOf(' ');
  const clipped = wordBoundary > 0
    ? candidate.slice(0, wordBoundary)
    : normalized.slice(0, availableLength);

  return `${clipped.trimEnd()}${ELLIPSIS}`;
}
