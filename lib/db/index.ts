import type { DbAdapter } from "./types";

let adapter: DbAdapter | null = null;

// Picks the engine from DATABASE_URL / SUPABASE_DB_URL: a postgres:// or
// postgresql:// URL uses the Supabase adapter (pure-JS postgres client);
// anything else (unset) falls back to node:sqlite for local dev/testing.
// Lazy `require` keeps each engine's module out of the other's bundle.
export function getAdapter(): DbAdapter {
  if (adapter) return adapter;
  const url = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || "";
  if (url.startsWith("postgres://") || url.startsWith("postgresql://")) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    adapter = (require("./supabase-adapter") as typeof import("./supabase-adapter")).supabaseAdapter;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    adapter = (require("./sqlite-adapter") as typeof import("./sqlite-adapter")).sqliteAdapter;
  }
  return adapter;
}
