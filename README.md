# Household Notebook (web)

A shared expense notebook for the whole family — multiple households, each
at its own URL, backed by a real database. This is a full rewrite of the
original Household Notebook Claude Artifact as a standalone Next.js app
meant to be deployed on Vercel, so expenses survive logging out, closing the
tab, or switching devices — something the artifact version (whose state
lived only in an in-browser document) couldn't do.

## What's here

- **Next.js 16 (App Router)**, TypeScript.
- **A real database** behind a small hand-rolled repository layer
  (`lib/repo.ts`) instead of an ORM — see "Why no Prisma?" below.
  - **Local dev**: Node's built-in `node:sqlite` (zero native downloads,
    zero setup — just `npm run dev`).
  - **Production**: [Supabase](https://supabase.com) Postgres, via the pure-JS
    [`postgres`](https://github.com/porsager/postgres) client. Set `DATABASE_URL`
    to your Supabase connection string and the app switches automatically
    (see `lib/db/index.ts`).
- **Multi-tenant**: one deployment serves every household. Each household
  gets its own URL (`/h/<householdId>`) — that URL is the household's
  permanent address and its invite link, the same way the old single-artifact
  app's one URL *was* the household, just now there can be many.
- **The ported UI** (`public/app.js`, `public/styles.css`) is the original
  app's vanilla-JS/CSS almost unchanged — same paper-notebook theme, same
  bilingual English/Burmese support, same screens. Only the data layer
  changed: instead of publishing a whole new document to a Claude Artifact
  on every change, it now calls the API routes under `app/api/`.
- Session auth is a PIN-protected member picker per household, backed by an
  httpOnly session cookie (one cookie per household, so a single browser can
  be logged into more than one household's link at once without either
  seeing the other's data — see `lib/session.ts`).

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — no environment variables or database setup
needed for local dev; a SQLite file is created automatically under
`.data/dev.db` (gitignored) the first time you run it.

## Running the tests

```bash
npm run test:repo   # repository layer against node:sqlite (fast, no browser)
npm run dev -- -p 3411   # in one terminal
npm run test:e2e         # in another — drives the real UI in headless Chromium
```

`test:e2e` needs a Chromium build; if you don't already have one, run
`npx playwright install chromium` first.

## Deploying to Vercel

1. **Push this project to a Git repo** (GitHub/GitLab/Bitbucket), then
   [import it into Vercel](https://vercel.com/new) — Vercel auto-detects
   Next.js, no build configuration needed.

2. **Create a Supabase project** at [supabase.com](https://supabase.com). From
   **Project Settings → Database**, copy the **Transaction pooler** connection
   string (port `6543`, recommended for Vercel/serverless). Use the URI format
   that starts with `postgresql://`.

3. **Set the `DATABASE_URL` environment variable** on the Vercel project
   (Project Settings → Environment Variables) to that Supabase connection string.
   It must start with `postgres://` or `postgresql://` — that's what
   `lib/db/index.ts` checks to use the Supabase adapter instead of local SQLite.
   (`SUPABASE_DB_URL` is also accepted as an alias.)

4. **Deploy.** The database schema is created automatically on first use
   (see `lib/db/schema.ts` — plain `CREATE TABLE IF NOT EXISTS` statements,
   no migration tool required). No separate migration step needed for this
   schema's current shape.

5. Once deployed, visiting the site's root URL shows the "create a
   household" screen. After creating one, share that household's `/h/...`
   URL (there's a copy-link/QR button in the app's Invite screen) with the
   rest of the family — that link is this household's permanent home.

### Environment variables

| Variable          | Required in production | Notes                                                                 |
|-------------------|:----------------------:|-----------------------------------------------------------------------|
| `DATABASE_URL`    | Yes                    | Supabase Postgres connection string (Transaction pooler recommended). |
| `SUPABASE_DB_URL` | No                     | Alias for `DATABASE_URL` if you prefer a Supabase-specific name.      |
| `SQLITE_PATH`     | No                     | Overrides the local SQLite file path (default `.data/dev.db`).          |

## Why no Prisma?

The original build of this project tried Prisma first, since it's the
default choice for a Next.js + Postgres app. It doesn't work in every
sandboxed/offline environment: `prisma generate` needs to download native
query-engine binaries from `binaries.prisma.sh`, and any environment that
blocks that specific host (as this project's development sandbox did) can't
generate a Prisma client at all — no workaround, since even the documented
`PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING` escape hatch only skips checksum
verification, not the binary download itself.

Since the schema here is small (eight tables, no complex relations), the fix
was to drop the ORM rather than fight the sandbox: `lib/repo.ts` is a plain
TypeScript module talking to either `node:sqlite` (built into Node, no
download) or Supabase Postgres via the `postgres` npm package (pure JavaScript,
no native binary) through a tiny shared adapter interface (`lib/db/types.ts`).

## Project structure

```
app/
  route.ts                        "/" — create-household screen
  h/[householdId]/route.ts        "/h/:id" — a household's app shell
  api/households/                 all REST endpoints, scoped by household id
lib/
  db/                              schema.ts, sqlite-adapter.ts, supabase-adapter.ts, index.ts
  repo.ts                          repository functions used by the API routes
  session.ts                       per-household httpOnly cookie sessions
  domain-types.ts, text-utils.ts   shared types + helpers ported from the original app
public/
  app.js                           the ported frontend (vanilla JS)
  styles.css                       the paper-notebook theme (unchanged from the artifact)
scripts/
  smoke-repo.mts, e2e-check*.mjs   the test suite described above
```

## Known limitations / things a future pass should address

- Receipt photos (`receiptDataUrls`) are stored as base64 data URLs directly
  in the `expenses` table. That's simplest and matches the original app,
  but isn't a great fit for large images at scale — swapping in real file
  storage (Vercel Blob, S3, etc.) is a reasonable next step if photo
  attachments see heavy use.
- There's no rate limiting on the PIN login endpoint. For a family app this
  is a low-severity gap, but worth knowing about before opening it up more
  broadly.
- No automated migration tool — schema changes need a manual `ALTER TABLE`
  (or a migration tool of your choice) rather than an auto-generated one.
