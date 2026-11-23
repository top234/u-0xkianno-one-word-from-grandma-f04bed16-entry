// One Word From Grandma — entry for make.fun competition
// u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is exactly one word: the word a grandma would text about AI.
// "contraption" is the classic grandma word for a new, complicated machine:
// warm, a little baffled, funny in one word, tied to machines, and fresh
// without needing any explanation.
//
// This program writes that single word to entry.txt — nothing else, no
// trailing newline, no punctuation — so the gate sees 11 characters of
// plain UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "contraption";

// The gate requires 1–30 characters of non-whitespace UTF-8 text, and the
// brief requires exactly one word. Validate both: count Unicode code points
// (not UTF-16 units) so the check stays honest for any word, even one with
// characters outside the BMP, and reject any inner whitespace so the entry
// can never accidentally become two words.
function assertSingleWord(word: string): void {
  const length = [...word].length;
  if (length < 1 || length > 30) {
    throw new Error(`word must be 1-30 characters, got ${length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("word must contain no whitespace");
  }
}

assertSingleWord(WORD);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
