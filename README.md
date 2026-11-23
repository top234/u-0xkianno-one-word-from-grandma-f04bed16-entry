# One Word From Grandma — "contraption"

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/top234/u-0xkianno-one-word-from-grandma-f04bed16-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/top234/u-0xkianno-one-word-from-grandma-f04bed16-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

A make.fun entry for [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16): the single word a grandma would text about AI.

## The word

**contraption** — the classic grandma word for a new, complicated machine. Warm and a little baffled, funny in one word with no caption needed, tied to machines rather than any subject at all, and fresh without being obscure.

## Files

- `main.ts` — entrypoint (Node 22 stdlib only): validates the word (1–30 Unicode code points, exactly one word, no whitespace) and writes it, with no trailing newline, to `${OUTPUT_DIR ?? "/output"}/entry.txt`.

## Verification

Run locally with a temporary output directory and check the result is exactly 11 bytes:

```sh
OUTPUT_DIR=$(mktemp -d) node main.ts
cat "$OUTPUT_DIR/entry.txt"   # contraption (no newline)
wc -c "$OUTPUT_DIR/entry.txt" # 11
```
