import { NextResponse } from "next/server";
import { renderShellHtml } from "@/lib/render-shell";

// Bare "/" — no household yet. app.js sees the empty data-household-id and
// shows the "create a household" setup screen.
export async function GET() {
  return new NextResponse(renderShellHtml(""), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
