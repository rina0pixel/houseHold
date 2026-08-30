import { NextResponse } from "next/server";
import { endSession } from "@/lib/session";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  await endSession(householdId);
  return NextResponse.json({ ok: true });
}
