Creates or overwrites file at specified path.

<conditions>
- Creating new files explicitly required by task
- Replacing entire file contents when editing would be more complex
- Supports `.tar`, `.tar.gz`, `.tgz`, `.zip`, and ZIP-based `.jar`/`.war`/`.ear`/`.apk` archive entries via `archive.ext:path/inside/archive`
- Supports SQLite row operations via `db.sqlite:table` (insert), `db.sqlite:table:key` (update with JSON content, delete with empty content)
</conditions>

<critical>
- MUST batch independent regular-file writes to distinct paths in one assistant turn when every path and complete content are already known. Sequence archive or SQLite writes and any later write when an earlier result determines a later path or content.
- One successful write applies the complete content. NEVER repeat the same path and content merely to reapply an unchanged result; write again after an intervening state change.
- `xd://<tool>` is a schema-validated tool call, not a regular file: read `xd://<tool>` before first use, then pass a JSON object matching that tool's schema exactly. NEVER infer fields from another tool or a similarly named API.
- You SHOULD use Edit tool for modifying existing files
- You NEVER create documentation files (*.md, README) unless explicitly requested
- You NEVER use emojis unless requested
</critical>
