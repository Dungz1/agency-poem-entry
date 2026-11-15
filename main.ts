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
  'Signing',
  '',
  'The bank sets one pen between us.',
  'My father\u2019s name has come loose from his hand;',
  'I sign it for him \u2014 slow,',
  'the way he taught me in the margins',
  'of the grocery list, his fist over mine.',
  '',
  'The stamp is small and red.',
  'Outside he counts the change himself,',
  'coin by coin, and gets it right.',
  '',
  'At dinner he signs the credit slip',
  'before I can offer help.',
  'I watch the letters lean and fall.',
  'I write him better than he does.',
  '',
  'The straight name is the bank\u2019s.',
  'The crooked one is his.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
