// "Swept Beside Him" — one line of earned pride, written to /output/entry.txt.
// The text is built from its two beats — the three years of sweeping before
// dawn, and the morning the daughter steps off the first boat in her harbour
// uniform and sweeps beside her father — and it is checked against the
// bounty's gate (UTF-8 text of 1 to 240 characters, not only white space)
// before anything is written, so a bad edit fails loudly here instead of
// at the grader. The pride is never named: it arrives in the last image,
// a uniformed daughter unafraid of her father's broom.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SWEEP_LINE =
  'For three years, Pak Dedi swept the ferry dock before dawn;';
const MORNING_LINE =
  'this morning his daughter stepped off the first boat in her harbour uniform, took his broom, and swept beside him.';

const TEXT = `${SWEEP_LINE} ${MORNING_LINE}`;

const chars = [...TEXT].length;
if (chars < 1 || chars > 240 || TEXT.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${chars} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote entry.txt (${chars} characters)`);
