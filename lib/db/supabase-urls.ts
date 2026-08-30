/** Runtime URL — transaction pooler (6543) is fine for API queries on Vercel. */
export function getRuntimeDatabaseUrl(): string {
  const url =
    process.env.DATABASE_URL ||
    process.env.SUPABASE_DB_URL ||
    process.env.POSTGRES_URL ||
    "";
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set (also accepts SUPABASE_DB_URL or POSTGRES_URL)"
    );
  }
  return url;
}

/**
 * Schema DDL (CREATE TABLE) must not run through Supabase's transaction
 * pooler (port 6543). Prefer a direct URL; otherwise fall back to session
 * pooler (same host, port 5432).
 */
export function getMigrationDatabaseUrl(): string {
  const direct =
    process.env.DATABASE_DIRECT_URL ||
    process.env.DIRECT_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.SUPABASE_DB_DIRECT_URL;
  if (direct) return direct;

  const runtime = getRuntimeDatabaseUrl();
  if (runtime.includes(":6543")) {
    return runtime.replace(":6543", ":5432");
  }
  return runtime;
}

export function usesTransactionPooler(url: string): boolean {
  return url.includes(":6543/") || url.includes("pgbouncer=true");
}
