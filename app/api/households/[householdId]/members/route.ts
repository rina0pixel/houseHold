import { NextRequest, NextResponse } from "next/server";
import { listMembers, addMember } from "@/lib/repo";
import { initialsOf } from "@/lib/text-utils";
import { requireMember, jsonError } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  return NextResponse.json({ members: await listMembers(householdId) });
}

// Only the owner can add members (matches the old app's invite screen,
// which only showed the "add member" form to currentMemberIsOwner()).
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const requester = await requireMember(householdId);
  if (!requester) return jsonError(401, "not logged in");
  if (requester.role !== "owner") return jsonError(403, "only the owner can add members");

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const pin = typeof body?.pin === "string" ? body.pin.trim() : "";
  if (!name) return jsonError(400, "name is required");
  if (!/^\d{4,6}$/.test(pin)) return jsonError(400, "pin must be 4-6 digits");

  const newMember = await addMember(householdId, { name, pin, initials: initialsOf(name) });
  return NextResponse.json({ member: newMember });
}
