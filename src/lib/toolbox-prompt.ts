/** Build clipboard text only. Context never enters a URL, request or browser storage. */
export function assemblePrompt(instructions: string, marker: string, fields: ReadonlyArray<{key: string; value: string}>): string {
  const context = fields.map(({key, value}) => key ? `- ${key}: ${value.trim()}`.trimEnd() : value.trim()).join('\n');
  return `${instructions.trim()}\n\n${marker}\n${context}`.trimEnd();
}
