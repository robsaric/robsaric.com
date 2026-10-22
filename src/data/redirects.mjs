import { buildLegacyRedirects } from './legacy-redirects.mjs';

/** Approved October 22: Writing is now a real index; old essays keep their URLs.
 * Preserve the historical map and apply the current route migration explicitly.
 */
export function buildSiteRedirects() {
  const redirects = buildLegacyRedirects();
  delete redirects['/writing'];
  redirects['/field-notes'] = { status: 301, destination: '/writing/' };
  return redirects;
}
