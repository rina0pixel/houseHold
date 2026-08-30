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

/** Free-plan direct hosts (`db.<ref>.supabase.co`) are IPv6-only — Vercel cannot resolve them. */
function isIpv6OnlySupabaseHost(url: string): boolean {
  return /@db\.[a-z0-9]+\.supabase\.co(?::|\/)/i.test(url);
}

function toSessionPoolerUrl(url: string): string {
  return url.includes(":6543") ? url.replace(":6543", ":5432") : url;
}

/**
 * Schema DDL (CREATE TABLE) must not run through Supabase's transaction
 * pooler (port 6543). Use the session pooler (same host, port 5432).
 *
 * Do not use `db.<ref>.supabase.co` from Vercel — that host is IPv6-only
 * on the free plan and fails with ENOTFOUND.
 */
export function getMigrationDatabaseUrl(): string {
  const explicit =
    process.env.DATABASE_DIRECT_URL ||
    process.env.DIRECT_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.SUPABASE_DB_DIRECT_URL;

  if (explicit && !isIpv6OnlySupabaseHost(explicit)) {
    return explicit;
  }

  return toSessionPoolerUrl(getRuntimeDatabaseUrl());
}

export function usesTransactionPooler(url: string): boolean {
  return url.includes(":6543/") || url.includes("pgbouncer=true");
}
