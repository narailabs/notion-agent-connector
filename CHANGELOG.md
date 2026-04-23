# Changelog

## 3.0.0 — 2026-04-22

### BREAKING

- Requires `@narai/connector-toolkit@^3.0.0-rc.1`. See toolkit 3.0 changelog for `Decision`, `ExtendedEnvelope`, and `HardshipEntry` breaking changes (most do not affect this connector; documented for downstream awareness).

### Added

- `scope(ctx)` callback added (global-only pending workspace-id lookup). Hardships and patterns.yaml live in the global tier. TODO: `workspaceId` requires a `GET /v1/users/me` call at init time — once `NotionClient` stores `workspaceId`, switch to `scope: (ctx) => ctx.sdk.workspaceId`. (See toolkit design doc at `connector-toolkit/docs/plans/2026-04-22-self-improvement-loop-design.md`.)

## 2.1.0 — 2026-04-21

### Added

- `list_attachments(page_id)` — list file/image/pdf/audio/video blocks on a page.
- `get_attachment(page_id, block_id)` — re-fetches the block (to refresh the signed URL), then downloads and extracts via the toolkit's `fetchAttachment`.
- `get_comments(page_id)` — list page-level comments with plain-text body.
- Client methods: `listPageFileBlocks`, `getBlock`, `getComments`.

### Changed

- Dependency bump: `@narai/connector-toolkit` ^2.1.0-rc.2 for `fetchAttachment` / `sanitizeLabel`.
