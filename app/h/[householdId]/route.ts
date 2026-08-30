import { NextResponse } from "next/server";
import { renderShellHtml } from "@/lib/render-shell";

// This URL is the household's permanent address and its invite link (see
// app/api/households/route.ts) — app.js reads the id from data-household-id
// and fetches this household's data on boot.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  return new NextResponse(renderShellHtml(householdId), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
