import { NextRequest, NextResponse } from "next/server";
import { verifyPin } from "@/lib/repo";
import { startSession } from "@/lib/session";
import { jsonError } from "@/lib/api-helpers";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const body = await req.json().catch(() => null);
  const memberId = typeof body?.memberId === "string" ? body.memberId : "";
  const pin = typeof body?.pin === "string" ? body.pin.trim() : "";
  if (!memberId || !pin) return jsonError(400, "memberId and pin are required");

  const member = await verifyPin(householdId, memberId, pin);
  if (!member) return jsonError(401, "wrong passcode");

  await startSession(householdId, member.id);
  return NextResponse.json({
    member: { id: member.id, name: member.name, initials: member.initials, role: member.role },
  });
}
