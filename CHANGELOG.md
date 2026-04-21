# Changelog

## 2.1.0 — 2026-04-21

### Added

- `list_attachments(page_id)` — list file/image/pdf/audio/video blocks on a page.
- `get_attachment(page_id, block_id)` — re-fetches the block (to refresh the signed URL), then downloads and extracts via the toolkit's `fetchAttachment`.
- `get_comments(page_id)` — list page-level comments with plain-text body.
- Client methods: `listPageFileBlocks`, `getBlock`, `getComments`.

### Changed

- Dependency bump: `@narai/connector-toolkit` ^2.1.0-rc.2 for `fetchAttachment` / `sanitizeLabel`.
