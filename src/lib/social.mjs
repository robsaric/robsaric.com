/** Deterministic card paths shared by the page layout and the build-time renderer. */
export function socialImagePath(pathname) {
  const path = pathname.replace(/^\/+|\/+$/g, '');
  if (!path) return '/og-default.png';
  if (path.startsWith('field-notes/')) return `/og/notes/${path.slice(12)}.png`;
  return `/og/pages/${path.replaceAll('/', '--')}.png`;
}

/**
 * New URLs let crawlers see a replaced card family instead of a cached one.
 * The homepage headline changed on November 23.
 */
export const SOCIAL_IMAGE_VERSION = 'editorial-20261123';
