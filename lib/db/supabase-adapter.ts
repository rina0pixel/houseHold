import postgres from "postgres";
import { SCHEMA_STATEMENTS } from "./schema";
import type { DbAdapter } from "./types";
import {
  getMigrationDatabaseUrl,
  getRuntimeDatabaseUrl,
  usesTransactionPooler,
} from "./supabase-urls";

// Production (Vercel + Supabase). Uses the pure-JS `postgres` client against
// Supabase's Postgres — no native binary, no @supabase/supabase-js needed for
// this app's raw-SQL repository layer.
let sqlClient: ReturnType<typeof postgres> | null = null;
let schemaReady: Promise<void> | null = null;

function getSql() {
  if (!sqlClient) {
    const url = getRuntimeDatabaseUrl();
    sqlClient = postgres(url, {
      ssl: "require",
      prepare: !usesTransactionPooler(url),
    });
  }
  return sqlClient;
}

// Repository code writes SQL with `?` placeholders (sqlite style) so it reads
// the same regardless of which adapter is active; translate to Postgres's
// positional $1, $2, ... form here.
function toPositional(query: string): string {
  let i = 0;
  return query.replace(/\?/g, () => `$${++i}`);
}

async function ensureSchema(): Promise<void> {
  if (schemaReady) return schemaReady;

  schemaReady = (async () => {
    const migrationUrl = getMigrationDatabaseUrl();
    const migrationSql = postgres(migrationUrl, {
      ssl: "require",
      max: 1,
      prepare: !usesTransactionPooler(migrationUrl),
    });
    try {
      for (const stmt of SCHEMA_STATEMENTS) {
        await migrationSql.unsafe(stmt);
      }
    } finally {
      await migrationSql.end({ timeout: 5 });
    }
  })();

  try {
    await schemaReady;
  } catch (err) {
    schemaReady = null;
    console.error("[db] schema migration failed:", err);
    throw err;
  }
}

export const supabaseAdapter: DbAdapter = {
  async query<T>(sqlText: string, params: unknown[] = []) {
    await ensureSchema();
    const rows = await getSql().unsafe(toPositional(sqlText), params as never[]);
    return rows as unknown as T[];
  },
  async run(sqlText: string, params: unknown[] = []) {
    await ensureSchema();
    const result = await getSql().unsafe(toPositional(sqlText), params as never[]);
    return { changes: (result as unknown as { count: number }).count ?? 0 };
  },
  async exec(sqlText: string) {
    await ensureSchema();
    await getSql().unsafe(sqlText);
  },
};
