// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem about agency — the power to
// choose and to act, and the agency that passes between a person and the agent that acts for them — to
// /output/entry.txt. Deterministic: the program runs twice and both runs write the same bytes. The gate takes
// UTF-8 text of 1 to 1,000 Unicode code points that is not only white space, and the judge reads exactly the
// bytes written, line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Knife Grinder',
  '',
  'Every spring he came with the wheel,',
  'and the street brought its blades to the step',
  'in one basket, knives crossed like fish.',
  '',
  'He gave them back wearing the steel\u2019s opinion:',
  'the good knife honest,',
  'the cheap one warned and made to behave.',
  '',
  'My mother cut her thumb that year',
  'on the onion she had cut for thirty years.',
  'The edge was new. It did not know her thumb.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
