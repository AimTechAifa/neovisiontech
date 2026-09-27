import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (entry === "node_modules" || entry === ".next" || entry === ".git") return [];
    const stat = statSync(full);
    if (stat.isDirectory()) return walk(full);
    return [full];
  });
}

describe("secrets", () => {
  it("does not commit a Groq key or the previous EmailJS public key", () => {
    const files = walk(process.cwd()).filter((file) =>
      /\.(ts|tsx|js|jsx|mjs|json|md|env|example|txt)$/.test(file) &&
      !file.includes(`${path.sep}node_modules${path.sep}`) &&
      !file.endsWith("secrets.test.ts"),
    );
    const banned = [
      "gsk_",
      "service_oleawv6",
      "template_geiyxdp",
      "uWBmiP3N7yVSPkTRu",
    ];
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      for (const token of banned) {
        expect(text, file).not.toContain(token);
      }
    }
  });
});
