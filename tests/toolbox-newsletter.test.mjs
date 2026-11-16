import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const pages = [
  ['index.astro', 'toolbox-newsletter'],
  ['dashboard-test.astro', 'dashboard-test-newsletter'],
  ['interview-draft-edit.astro', 'interview-draft-edit-newsletter'],
  ['value-stream-mapping.astro', 'value-stream-newsletter'],
  ['crm-by-conversation.astro', 'crm-by-conversation-newsletter'],
];

for (const [file, id] of pages) {
  test(`${file} renders the shared toolbox newsletter`, () => {
    const source = readFileSync(new URL(`../src/pages/toolbox/${file}`, import.meta.url), 'utf8');
    assert.ok(source.includes("import ToolboxNewsletter from '../../components/ToolboxNewsletter.astro';"));
    assert.ok(source.includes(`<ToolboxNewsletter id="${id}" />`));
  });
}

test('toolbox newsletter renders only when the endpoint is set', () => {
  const source = readFileSync(new URL('../src/components/ToolboxNewsletter.astro', import.meta.url), 'utf8');
  assert.ok(source.includes('const endpoint = import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT?.trim();'));
  assert.ok(source.includes('{endpoint && <div class="toolbox-newsletter">'));
  assert.ok(source.includes('<Newsletter id={id} showLinkedIn />'));
  assert.equal(source.match(/<Newsletter /g)?.length, 1);
});
