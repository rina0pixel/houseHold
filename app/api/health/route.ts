import { NextResponse } from "next/server";
import { getAdapter } from "@/lib/db";

/** GET /api/health — verify DB connectivity and schema migration. */
export async function GET() {
  try {
    await getAdapter().query("SELECT 1 AS ok");
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[health] database check failed:", err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
