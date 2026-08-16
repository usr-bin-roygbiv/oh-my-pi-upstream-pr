Searches files/internal URLs: Rust regex, PCRE2 fallback.

<instruction>
- `path`: known files, directories, globs, internal URLs; roots `;`-separated.
- NEVER guess a search root. Use `glob` to locate it or search a known parent.
- MUST batch independent searches and reads in one assistant turn when all patterns, paths, and read selectors are already known. Sequence only when an earlier result determines a later input.
- One successful search returns the current matches. NEVER repeat the same grep merely to re-read unchanged output; repeat only when searched files may have changed.
- Broad searches may time out → narrow scope or use `glob` first.
- For broad independent roots, use separate `grep` calls in one assistant turn instead of one semicolon-combined search. Keep semicolon paths for small bounded root sets.
- One-file line selector: `src/foo.ts:50-100`; never selects search root.
- Literal `\n` or `\\n` enables cross-line patterns.
</instruction>

<critical>
- MUST use instead of shell `grep`/`rg`.
- Open-ended multi-round search MUST use {{#if scoutAvailable}}Task + scout,{{else}}Task,{{/if}} not chained calls.
</critical>
