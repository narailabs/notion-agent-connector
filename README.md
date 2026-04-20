# @narai/notion-agent-connector

Read-only Notion connector. Supports search, page retrieval, database schema, and database queries. Ships a JSON-envelope CLI and a library API. No doc-wiki coupling.

## Install

```bash
npm install @narai/notion-agent-connector
export NOTION_TOKEN="secret_…"
```

Node 20+. The `NOTION_TOKEN` must belong to a Notion internal integration that has been invited to the pages/databases you want to read.

## CLI

```bash
npx notion-agent-connector --action <name> --params '<json>'
```

### Supported actions

| Action | Required params |
|---|---|
| `search` | `query`, optional `filter_type` (`page`/`database`), optional `max_results` (default 25, max 100) |
| `get_page` | `page_id` (UUID) |
| `get_database` | `database_id` (UUID) |
| `query_database` | `database_id`, optional `filter` object, optional `max_results` |

Example:

```bash
notion-agent-connector --action search --params '{"query":"architecture","filter_type":"page"}'
```

Output is a JSON envelope on stdout.

## Library

```ts
import { fetch, VALID_ACTIONS } from "@narai/notion-agent-connector";
const result = await fetch("search", { query: "architecture" });
```

## What's not here

- No write operations.
- No wiki, documentation, or diagramming — output is a pure JSON envelope.
- Credentials: use [`@narai/credential-providers`](https://www.npmjs.com/package/@narai/credential-providers) directly for backends other than `NOTION_TOKEN`.

## Claude Code plugin

A ready-to-install Claude Code plugin lives at [`plugin/`](./plugin). It adds a `notion-agent` skill and a `/notion-agent <action> <params-json>` slash command, wrapping this connector. The plugin is excluded from the npm tarball via `.npmignore`; Claude Code marketplaces point directly at the `plugin/` subdirectory of this repo.

## License

MIT
