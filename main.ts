import * as fs from "node:fs";

// One dad joke for make.fun "Dad Joke Showdown": a father would tell it
// at the table, the pun lands on the first read, and the punchline arrives
// at the end. The clock on the fridge sets up "quality thyme" (quality
// time), and the callback "Give it thyme" doubles the groan — the dad
// refuses to admit it is a pun while making a second one.
const text =
  "My dad stuck a clock on the fridge and called it quality thyme. I said that's not even a pun. He said, 'Give it thyme.'";

// Gate (mirrors the sealed scorer): 1-200 UTF-8 characters, not only
// whitespace, single line.
const chars = [...text].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!text.trim()) throw new Error("entry must not be only whitespace");
if (text.includes("\n")) throw new Error("entry must be a single line");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
console.log("hand-in: one dad joke, 119 characters, pun lands at the end");
