// Minimal adapter interface both the SQLite (dev) and Postgres (prod)
// implementations satisfy. Repository code (lib/repo.ts) is written once
// against this interface and never imports either engine directly.

export interface DbAdapter {
  /** Run a SELECT. `sql` uses `?` placeholders regardless of engine. */
  query<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<T[]>;
  /** Run an INSERT/UPDATE/DELETE. Returns rows affected. */
  run(sql: string, params?: unknown[]): Promise<{ changes: number }>;
  /** Run raw DDL/setup SQL (no placeholders). */
  exec(sql: string): Promise<void>;
}
