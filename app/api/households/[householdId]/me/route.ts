import { NextResponse } from "next/server";
import { requireMember } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return NextResponse.json({ member: null });
  return NextResponse.json({
    member: { id: member.id, name: member.name, initials: member.initials, role: member.role },
  });
}
