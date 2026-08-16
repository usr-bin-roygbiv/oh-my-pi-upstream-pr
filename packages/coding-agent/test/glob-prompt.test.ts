import { describe, expect, test } from "bun:test";
import globDescription from "../src/prompts/tools/glob.md" with { type: "text" };

describe("glob prompt", () => {
	test("avoids timeout-prone ignored-tree scans without hiding ignored paths", () => {
		expect(globDescription).toContain(
			"Keep `gitignore: true` for broad or multi-target scans; use `false` only for a specific ignored path or tightly scoped ignored subtree",
		);
		expect(globDescription).toContain(
			"Scope recursive patterns to the deepest directory already known before widening",
		);
		expect(globDescription).toContain("Set `false` for ignored files such as `.env*`, logs, or build output");
	});
	test("anchors uncertain search roots at known existing parents", () => {
		expect(globDescription).toContain("NEVER name an unverified deeper search root");
		expect(globDescription).toContain("start from the deepest parent directory already known to exist");
		expect(globDescription).toContain("let the pattern discover the unknown suffix");
	});
	test("does not repeat unchanged successful globs", () => {
		expect(globDescription).toContain("One successful glob returns the current matches");
		expect(globDescription).toContain("NEVER repeat the same glob merely to re-read unchanged results");
		expect(globDescription).toContain("repeat only when the matched tree may have changed");
	});
});
