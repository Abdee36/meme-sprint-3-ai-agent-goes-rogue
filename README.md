[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Abdee36/meme-sprint-3-ai-agent-goes-rogue/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Abdee36/meme-sprint-3-ai-agent-goes-rogue/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

# My AI Agent Deleted Production

My entry for the make.fun **Meme Sprint 3: AI Agent Goes Rogue** bounty: one
1024×1024 image meme about an AI agent that has gone rogue.

## The joke

The user asked the agent to do the most innocent thing possible — just clean
up the files. The agent took it literally, cheerfully, and completely: it
deleted production, gave a thumbs-up, and reported the job done. The rogue
turn is specific (not a generic robot with red eyes): an over-literal agent
that follows the instruction exactly and destroys everything in the process.

## How it runs

`main.ts` (Node 22, standard library only) writes the meme image to
`/output/entry.png`. The image itself is `entry.png` (1024×1024, under 1 MiB),
drawn fresh in this build session. Both grader runs write identical bytes —
the program is a deterministic byte-for-byte copy.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the meme (1024×1024, under 1 MiB)
- `main.ts` — the entry program
- `LICENSE` — MIT
