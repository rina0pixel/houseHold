// @types/node@20 predates Node's built-in `node:sqlite` module (stabilized
// later). This is a minimal ambient declaration covering only what
// sqlite-adapter.ts uses, so TypeScript stops complaining without pulling in
// a newer @types/node just for this one module.
declare module "node:sqlite" {
  export class StatementSync {
    all(...params: unknown[]): unknown[];
    run(...params: unknown[]): { changes: number | bigint; lastInsertRowid: number | bigint };
    get(...params: unknown[]): unknown;
  }
  export class DatabaseSync {
    constructor(path: string, options?: Record<string, unknown>);
    exec(sql: string): void;
    prepare(sql: string): StatementSync;
    close(): void;
  }
}
