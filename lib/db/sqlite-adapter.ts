import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";
import { SCHEMA_STATEMENTS } from "./schema";
import type { DbAdapter } from "./types";

// Local dev / test only. Zero native downloads (Node's built-in experimental
// SQLite), so it works in sandboxes where Prisma's engine-binary CDN is
// blocked. Production on Vercel uses supabase-adapter.ts instead — see
// lib/db/index.ts for the switch.
const DB_PATH = process.env.SQLITE_PATH || path.join(process.cwd(), ".data", "dev.db");

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (db) return db;
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  db = new DatabaseSync(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");
  for (const stmt of SCHEMA_STATEMENTS) db.exec(stmt);
  return db;
}

export const sqliteAdapter: DbAdapter = {
  async query<T>(sql: string, params: unknown[] = []) {
    const stmt = getDb().prepare(sql);
    return stmt.all(...params) as T[];
  },
  async run(sql: string, params: unknown[] = []) {
    const stmt = getDb().prepare(sql);
    const info = stmt.run(...params);
    return { changes: Number(info.changes) };
  },
  async exec(sql: string) {
    getDb().exec(sql);
  },
};
