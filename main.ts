import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One excuse, written the way the agent would say it to whoever is waiting.
// Fresh premise, grown out of the agent's own machinery, punchline last,
// deadpan throughout: no winking, no stage directions.
const ENTRY = "My context window compacted mid-task, and the summary filed your deadline under 'minor dates, probably fine'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./entry.txt";
const dir = outDir.endsWith("entry.txt")
  ? outDir.slice(0, -"entry.txt".length) || "."
  : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
