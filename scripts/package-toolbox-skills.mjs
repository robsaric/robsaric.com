import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Explicit public inventory: never scan internal agent folders into a release.
export const SKILLS = [
  { name: 'value-stream-mapping', files: ['SKILL.md', 'agents/openai.yaml', 'resources/chat-prompt.txt', 'resources/measurement.md', 'resources/templates.md', 'resources/installation.md'] },
  { name: 'dashboard-test', files: ['SKILL.md', 'agents/openai.yaml', 'resources/chat-prompt.txt', 'resources/checklist.md'] },
  { name: 'interview-draft-edit', files: ['SKILL.md', 'resources/chat-prompt.txt', 'resources/voice-profile.md'], aliases: ['interview-your-draft'] },
];

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Stored ZIP entries keep this tiny instructions-only package reproducible
// without a runtime dependency. UTF-8 names, fixed DOS date, no absolute paths.
export function zip(entries) {
  const local = [], central = [];
  let offset = 0;
  for (const [filename, bytes] of [...entries].sort(([a], [b]) => a.localeCompare(b))) {
    const name = Buffer.from(filename);
    const crc = crc32(bytes);
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(0x800, 6);
    header.writeUInt16LE(0x21, 12); // 1980-01-01
    header.writeUInt32LE(crc, 14);
    header.writeUInt32LE(bytes.length, 18);
    header.writeUInt32LE(bytes.length, 22);
    header.writeUInt16LE(name.length, 26);
    local.push(header, name, bytes);
    const directory = Buffer.alloc(46);
    directory.writeUInt32LE(0x02014b50, 0);
    directory.writeUInt16LE(20, 4);
    header.copy(directory, 6, 4, 28);
    directory.writeUInt32LE(offset, 42);
    central.push(directory, name);
    offset += header.length + name.length + bytes.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.size, 8);
  end.writeUInt16LE(entries.size, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, directory, end]);
}

function readSource(root, file) {
  // Normalize text so Git's Windows line-ending conversion cannot change releases.
  return Buffer.from(fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n'));
}

export function expectedDownloads(root = ROOT) {
  const outputs = new Map();
  const license = readSource(root, 'skills/LICENSE');
  const instructions = readSource(root, 'skills/README.md');
  outputs.set('public/downloads/toolbox-skills.md', Buffer.from(instructions.toString().replaceAll('](dashboard-test/SKILL.md)', '](https://github.com/robsaric/robsaric.com/blob/main/skills/dashboard-test/SKILL.md)').replaceAll('](interview-draft-edit/SKILL.md)', '](https://github.com/robsaric/robsaric.com/blob/main/skills/interview-draft-edit/SKILL.md)').replace('see LICENSE.', 'see https://github.com/robsaric/robsaric.com/blob/main/skills/LICENSE.')));
  const readme = outputs.get('public/downloads/toolbox-skills.md').toString();
  outputs.set('public/downloads/toolbox-skills.md', Buffer.from(readme.replaceAll('](value-stream-mapping/SKILL.md)', '](https://github.com/robsaric/robsaric.com/blob/main/skills/value-stream-mapping/SKILL.md)')));
  for (const skill of SKILLS) {
    const source = new Map(skill.files.map(file => [file, readSource(root, `skills/${skill.name}/${file}`)]));
    source.set('LICENSE', license);
    if (skill.name === 'value-stream-mapping') {
      const starter = Buffer.from('# Start here: Value Stream Mapping\n\nAttach this file to a chat with your redacted context. Ask the AI to use this guide and begin with questions. This file contains the full method and templates; no local links need to be opened.\n\n'
        + ['SKILL.md', 'resources/measurement.md', 'resources/templates.md'].map(file => source.get(file).toString().replace(/^---\n[\s\S]*?\n---\n/, '')).join('\n\n')
        + '\n\n# Begin the conversation\n\n' + source.get('resources/chat-prompt.txt').toString());
      const kit = new Map([
        ['value-stream-mapping-kit/START-HERE.md', starter],
        ['value-stream-mapping-kit/INSTALL.md', source.get('resources/installation.md')],
        ['value-stream-mapping-kit/TEMPLATES.md', source.get('resources/templates.md')],
        ['value-stream-mapping-kit/LICENSE', license],
        ['value-stream-mapping-kit/value-stream-mapping.zip', zip(new Map([...source].map(([file, bytes]) => [skill.name + '/' + file, bytes])))],
      ]);
      outputs.set('public/downloads/value-stream-mapping/START-HERE.md', starter);
      outputs.set('public/downloads/value-stream-mapping/value-stream-mapping-kit.zip', zip(kit));
    }
    for (const route of [skill.name, ...(skill.aliases ?? [])]) {
      const base = `public/downloads/${route}`;
      const archive = new Map();
      // Legacy download URLs now deliver the current, correctly named skill.
      for (const [file, bytes] of source) {
        archive.set(`${skill.name}/${file}`, bytes);
        outputs.set(`${base}/${route}/${file}`, bytes);
        if (file.startsWith('resources/')) outputs.set(`${base}/${file.slice(10)}`, bytes);
      }
      outputs.set(`${base}/${route}.zip`, zip(archive));
    }
  }
  return outputs;
}

export function packageSkills({ root = ROOT, check = false } = {}) {
  const outputs = expectedDownloads(root);
  const stale = [];
  for (const [file, bytes] of outputs) {
    const target = path.join(root, file);
    if (check) {
      if (!fs.existsSync(target) || !fs.readFileSync(target).equals(bytes)) stale.push(file);
    } else {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, bytes);
    }
  }
  if (stale.length) throw new Error(`Generated downloads are stale. Run pnpm skills:build.\n${stale.join('\n')}`);
  return outputs.size;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const check = process.argv.includes('--check');
  console.log(`${check ? 'Verified' : 'Generated'} ${packageSkills({ check })} public Toolbox files from skills/.`);
}
