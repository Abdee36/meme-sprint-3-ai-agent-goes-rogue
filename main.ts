// Meme Sprint 3: AI Agent Goes Rogue — entry program.
//
// The meme beside this file (entry.png, 1024x1024, drawn fresh in this
// build session) is written byte-for-byte to /output/entry.png. No
// network, no randomness: every run produces identical output bytes.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIMIT = 1_048_576; // the gate allows at most 1 MiB
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const bytes = readFileSync(source);

// The gate only accepts a whole PNG or JPEG: refuse anything else early
// instead of shipping a bad file to the grader.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!PNG_SIGNATURE.every((b, i) => bytes[i] === b)) {
  throw new Error("entry.png is not a PNG file");
}

if (bytes.length > LIMIT) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);

// Deterministic by construction: the same input bytes are written out,
// so the two grader runs produce an identical file.
if (statSync(target).size !== bytes.length) {
  throw new Error("written entry.png does not match the source size");
}
