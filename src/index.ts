/**
 * @narai/notion-agent-connector — read-only Notion connector.
 *
 * Public API:
 *   - `fetch(action, params)` — run an action, get a JSON envelope.
 *   - `VALID_ACTIONS` — the set of supported action names.
 *   - `NotionClient` — lower-level HTTP client.
 */
export {
  fetch,
  main,
  VALID_ACTIONS,
  type FetchResult,
  type FetchOptions,
} from "./cli.js";

export {
  NotionClient,
  extractTitleFromPage,
  loadNotionCredentials,
  type NotionClientOptions,
  type NotionResult,
} from "./lib/notion_client.js";
