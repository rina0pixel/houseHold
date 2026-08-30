import { NextResponse } from "next/server";
import { getMemberById } from "@/lib/repo";
import { getAdapter } from "@/lib/db";
import { requireMember, jsonError } from "@/lib/api-helpers";

// Only the owner can remove a member, and never themselves — the old app's
// UI already enforced the "not yourself" rule by only rendering the remove
// button for other members; enforce both server-side too since the API is
// now reachable independently of that UI.
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ householdId: string; memberId: string }> }
) {
  const { householdId, memberId } = await params;
  const requester = await requireMember(householdId);
  if (!requester) return jsonError(401, "not logged in");
  if (requester.role !== "owner") return jsonError(403, "only the owner can remove members");
  if (requester.id === memberId) return jsonError(400, "cannot remove yourself");

  const target = await getMemberById(householdId, memberId);
  if (!target) return jsonError(404, "member not found");

  await getAdapter().run("DELETE FROM members WHERE household_id = ? AND id = ?", [householdId, memberId]);
  return NextResponse.json({ ok: true });
}
