import postgres from "postgres";
import { SCHEMA_STATEMENTS } from "./schema";
import type { DbAdapter } from "./types";

// Production (Vercel + Supabase). Uses the pure-JS `postgres` client against
// Supabase's Postgres — no native binary, no @supabase/supabase-js needed for
// this app's raw-SQL repository layer. Set DATABASE_URL to the Supabase
// connection string from Project Settings → Database (prefer the Transaction
// pooler URI on port 6543 for serverless).
let sqlClient: ReturnType<typeof postgres> | null = null;
let schemaReady: Promise<void> | null = null;

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;
  if (!url) {
    throw new Error("DATABASE_URL (or SUPABASE_DB_URL) is not set");
  }
  return url;
}

function usesPooler(url: string): boolean {
  return (
    url.includes("pooler.supabase.com") ||
    url.includes("pgbouncer=true") ||
    url.includes(":6543/")
  );
}

function getSql() {
  if (!sqlClient) {
    const url = getDatabaseUrl();
    sqlClient = postgres(url, {
      ssl: "require",
      // Supabase's transaction pooler (PgBouncer) does not support prepared
      // statements — required for Vercel/serverless deployments.
      prepare: !usesPooler(url),
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
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      for (const stmt of SCHEMA_STATEMENTS) {
        await sql.unsafe(stmt);
      }
    })();
  }
  return schemaReady;
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
