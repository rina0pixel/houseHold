import { NextRequest, NextResponse } from "next/server";
import { listCustomBanks, addCustomBank } from "@/lib/repo";
import { colorForName, initialsOf } from "@/lib/text-utils";
import { requireMember, jsonError } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  return NextResponse.json({ banks: await listCustomBanks(householdId) });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  if (!name) return jsonError(400, "name is required");
  const bank = await addCustomBank(householdId, { name, initials: initialsOf(name), color: colorForName(name) });
  return NextResponse.json({ bank });
}
