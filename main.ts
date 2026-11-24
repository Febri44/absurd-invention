// Absurd invention pitch, one sentence: writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE = "Meet the Guilt-Trip Fridge, which sighs like a disappointed parent every time you open it after midnight and hides the chocolate behind the vegetables until morning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
