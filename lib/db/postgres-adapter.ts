// Kept so older imports still resolve. Production uses supabase-adapter.ts
// (IPv4 pooler, prepare:false) — see lib/db/index.ts.
export { supabaseAdapter as postgresAdapter } from "./supabase-adapter";
