# agency-poem-01

An entry for make.fun's "Write the best poem about agency": `main.ts` writes one deterministic
poem, *Night Work*, to `entry.txt`. The poem is about the agency that passes between a person and
the agent that acts for them — sent out at ten with a name and one word, it chooses in the dark,
and in the morning the log is full of the person who never wrote it, while the answering stays
behind. The poem is kept as readable source in `poem.txt`; the program writes the same bytes on
every run.

## Run it

```
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`; in the grader the same code writes `/output/entry.txt`.
