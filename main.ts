// Entry for "Promote make.fun's make-your-own-bounty post on X" (Node 22,
// standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program does.
// The entry is the post itself — one quote post of mine on X quoting
// make.fun's make-your-own-bounty post, with a photo of its own attached,
// make.fun (via @makefunai) and my play code in its text. POST.json names
// the post; the house reads its replies, reposts and quotes from X.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
