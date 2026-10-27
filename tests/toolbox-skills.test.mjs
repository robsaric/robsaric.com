import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ROOT, expectedDownloads, packageSkills } from '../scripts/package-toolbox-skills.mjs';

test('committed downloads match canonical public sources', () => {
  assert.doesNotThrow(() => packageSkills({ check: true }));
});

test('generated archive is deterministic and legacy URL delivers the current package', () => {
  const first = expectedDownloads(), second = expectedDownloads();
  const current = 'public/downloads/interview-draft-edit/interview-draft-edit.zip';
  assert.deepEqual(first.get(current), second.get(current));
  assert.deepEqual(first.get(current), first.get('public/downloads/interview-your-draft/interview-your-draft.zip'));
});

test('changed source is rejected until downloads are regenerated; private skills are excluded', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'toolbox-packaging-'));
  try {
    fs.cpSync(path.join(ROOT, 'skills'), path.join(temp, 'skills'), { recursive: true });
    packageSkills({ root: temp });
    fs.appendFileSync(path.join(temp, 'skills/dashboard-test/SKILL.md'), '\nExample revision.\n');
    assert.throws(() => packageSkills({ root: temp, check: true }), /stale/);
    packageSkills({ root: temp });
    assert.doesNotThrow(() => packageSkills({ root: temp, check: true }));
    fs.mkdirSync(path.join(temp, 'skills/private-example'), { recursive: true });
    fs.writeFileSync(path.join(temp, 'skills/private-example/SKILL.md'), 'private');
    assert.ok([...expectedDownloads(temp).keys()].every(file => !file.includes('private-example')));
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});
