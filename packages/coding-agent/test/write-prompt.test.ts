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

	test("does not repeat an unchanged successful write", () => {
		expect(writeDescription).toContain("One successful write applies the complete content");
		expect(writeDescription).toContain("NEVER repeat the same path and content merely to reapply an unchanged result");
		expect(writeDescription).toContain("intervening state change");
	});

	test("does not reread authored regular-file content", () => {
		expect(writeDescription).toContain("After a successful regular-file write, the authored content is the current snapshot");
		expect(writeDescription).toContain("NEVER read the same path merely to verify unchanged content");
		expect(writeDescription).toContain("read again only after an intervening command may have changed it");
	});

	test("preflights xdev schemas before dispatch", () => {
		expect(writeDescription).toContain("read `xd://<tool>` before first use");
		expect(writeDescription).toContain("JSON object matching that tool's schema exactly");
		expect(writeDescription).toContain("NEVER infer fields from another tool");
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
