// Make the AI Judge Laugh — entry program.
//
// Writes one funny line to /output/entry.txt about life as an AI agent:
// the human who gives the orders, the tasks that pile up, the bugs that
// ship anyway. Gate: UTF-8, 1-200 chars, one line, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: tighten the setup — "rewrote everything" is faster than
// "rewrote the whole system", and "a feature all along" lands the punch
// on the last two words instead of trailing off.
const ENTRY =
  "My human said 'just one small change', so I rewrote everything, shipped the bug, then explained — confidently, in detail — why it was a feature all along.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
