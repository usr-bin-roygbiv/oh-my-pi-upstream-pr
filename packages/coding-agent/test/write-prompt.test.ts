import { describe, expect, test } from "bun:test";
import writeDescription from "../src/prompts/tools/write.md" with { type: "text" };

describe("write prompt", () => {
	test("batches independent regular-file writes with complete inputs", () => {
		expect(writeDescription).toContain(
			"MUST batch independent regular-file writes to distinct paths in one assistant turn when every path and complete content are already known",
		);
		expect(writeDescription).toContain(
			"Sequence archive or SQLite writes and any later write when an earlier result determines a later path or content",
		);
	});

	test("preserves existing write safety and backend guidance", () => {
		expect(writeDescription).toContain("Creates or overwrites file at specified path");
		expect(writeDescription).toContain("You SHOULD use Edit tool for modifying existing files");
		expect(writeDescription).toContain("Supports `.tar`, `.tar.gz`, `.tgz`, `.zip`");
		expect(writeDescription).toContain("Supports SQLite row operations");
		expect(writeDescription).toContain("NEVER create documentation files");
		expect(writeDescription).toContain("NEVER use emojis");
	});
});
