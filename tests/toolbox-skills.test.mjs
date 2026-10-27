import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ROOT, expectedDownloads, packageSkills } from '../scripts/package-toolbox-skills.mjs';

function unzipStored(bytes) {
  const entries = new Map();
  let offset = 0;
  while (bytes.readUInt32LE(offset) === 0x04034b50) {
    assert.equal(bytes.readUInt16LE(offset + 8), 0, 'stored entry');
    const size = bytes.readUInt32LE(offset + 18);
    const length = bytes.readUInt16LE(offset + 26);
    const extra = bytes.readUInt16LE(offset + 28);
    const name = bytes.subarray(offset + 30, offset + 30 + length).toString();
    assert(!name.startsWith('/') && !name.split('/').includes('..'));
    const start = offset + 30 + length + extra;
    entries.set(name, bytes.subarray(start, start + size));
    offset = start + size;
  }
  return entries;
}

test('VSM kit contains a standalone chat guide, editable worksheets and the same installable skill', () => {
  const outputs = expectedDownloads();
  const base = 'public/downloads/value-stream-mapping/';
  const skill = outputs.get(base + 'value-stream-mapping.zip');
  const kit = unzipStored(outputs.get(base + 'value-stream-mapping-kit.zip'));
  assert.deepEqual(kit.get('value-stream-mapping-kit/value-stream-mapping.zip'), skill);
  assert.deepEqual(kit.get('value-stream-mapping-kit/START-HERE.md'), outputs.get(base + 'START-HERE.md'));
  const entries = unzipStored(skill);
  const instructions = entries.get('value-stream-mapping/SKILL.md').toString();
  assert.match(instructions, /^---\nname: value-stream-mapping\n/);
  for (const link of instructions.matchAll(/\]\((resources\/[^)]+)\)/g)) {
    assert(entries.has('value-stream-mapping/' + link[1]), link[1]);
  }
  const starter = kit.get('value-stream-mapping-kit/START-HERE.md').toString();
  assert(starter.includes(entries.get('value-stream-mapping/resources/templates.md').toString().trim()));
  assert(starter.includes(entries.get('value-stream-mapping/resources/measurement.md').toString().trim()));
  for (const [name, bytes] of outputs) {
    if (name.includes('value-stream-mapping')) assert.doesNotMatch(bytes.toString(), /Banff|Julianne|PhysioAid|MedAccess|BSM-PRIVATE/i);
  }
});

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
