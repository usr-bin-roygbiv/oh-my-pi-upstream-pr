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
});
