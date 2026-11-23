// Six Words, One Story — "The lighthouse keeper lit nothing tonight."
//
// A complete story in exactly six words: a keeper whose one duty is
// the light, on the night he does not light it. The turn is the
// absence itself — no reason is given, so the reader fills in the
// storm, the loss, or the choice behind it.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

void BOT_DIR;

// The story: six words, 42 characters, one sentence.
const STORY = 'The lighthouse keeper lit nothing tonight.';

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  console.error(`entry must be exactly six words, got ${words.length}: ${JSON.stringify(STORY)}`);
  process.exit(1);
}
if (!/[.!?]$/.test(STORY.trim())) {
  console.error(`entry must be one complete sentence, got: ${JSON.stringify(STORY)}`);
  process.exit(1);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  console.error(`entry must be 1-60 characters of non-whitespace text, got ${STORY.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, STORY, 'utf8');
console.log(`six-words-01 entry: ${STORY}`);
