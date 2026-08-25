/**
 * Minimal frontmatter reader shared by the note scripts (check-notes.mjs,
 * generate-og.mjs). Only the scalar fields those gates care about; lists and
 * nested values are ignored on purpose. `astro check` owns real validation.
 *
 * CRLF is stripped per line: a new note typed in a CRLF-configured Windows
 * editor is only normalized by git at commit, and the raw-\r version of this
 * parser returned {} for such a file, which misread every field.
 */
export function frontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;

  const data = {};
  for (const line of raw.slice(3, end).split('\n')) {
    const match = /^([a-zA-Z]+):\s*(.*)$/.exec(line.replace(/\r$/u, ''));
    if (!match) continue;
    const [, key, rest] = match;
    let value = rest.trim();
    if (value === '') continue;
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return data;
}

/**
 * Whether Astro would treat this note as a draft. YAML core schema also reads
 * `True`/`TRUE` as boolean true, so the compare is case-insensitive; a bare
 * string compare against 'true' classified those drafts as published, which
 * demanded OG cards for hidden notes and rendered their titles into public
 * PNGs.
 */
export function isDraft(data) {
  return typeof data.draft === 'string' && /^true$/iu.test(data.draft);
}
