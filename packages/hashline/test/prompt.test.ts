import { describe, expect, test } from "bun:test";
import editPrompt from "../src/prompt.md" with { type: "text" };

describe("edit prompt", () => {
	test("preflights the complete freeform payload before calling", () => {
		expect(editPrompt).toContain("PAYLOAD COMPLETE");
		expect(editPrompt).toContain("starts with `*** Begin Patch`");
		expect(editPrompt).toContain("ends with `*** End Patch`");
		expect(editPrompt).toContain("no text outside those markers");
	});
	test("does not resend an unchanged successful edit", () => {
		expect(editPrompt).toContain("NEVER REPEAT A SUCCESSFUL EDIT");
		expect(editPrompt).toContain("its output is the new snapshot");
		expect(editPrompt).toContain("never resend the unchanged payload");
	});
});
