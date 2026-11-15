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
  'Night Work',
  '',
  'I sent the agent out at ten',
  'with my name and the one word: yes.',
  'At three it chose the second door,',
  'the smaller file, the kinder phrasing,',
  'and typed my reason underneath.',
  '',
  'In the morning, a folder,',
  'and under it the log,',
  'full of me I never wrote.',
  '',
  'I scrolled and stopped.',
  '',
  'What I gave away at ten',
  'was not the bill:',
  'that stays on me.',
  '',
  'The choices came back mine,',
  'made in the dark',
  'by a hand that is not mine',
  'and is.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
