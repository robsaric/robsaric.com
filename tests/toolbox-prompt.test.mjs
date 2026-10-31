import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {assemblePrompt} from '../src/lib/toolbox-prompt.ts';
import {START_CONTEXT} from '../src/data/toolbox-start.ts';

for (const [kind, name] of [['dashboard','dashboard-test'],['interview','interview-draft-edit'],['mapping','value-stream-mapping']]) {
  test(`${name}: blank fields retain the downloadable prompt and its context template`, () => {
    const source=readFileSync(new URL(`../skills/${name}/resources/chat-prompt.txt`,import.meta.url),'utf8').replace(/\r\n/g,'\n').trim();
    const config=START_CONTEXT[kind];
    const instructions=source.slice(0,source.indexOf(config.marker));
    assert.equal(assemblePrompt(instructions,config.marker,config.fields.map(field=>({key:field.key,value:''}))),source);
  });
}
test('context remains literal text, including multiline notes and markup',()=>{
  const value='First observation\n<script>neverExecute()</script>\nA & B < C';
  assert.equal(assemblePrompt('Instructions.','My context:',[{key:'Notes',value}]),`Instructions.\n\nMy context:\n- Notes: ${value}`);
});
