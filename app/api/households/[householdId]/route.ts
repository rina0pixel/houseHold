import { NextResponse } from "next/server";
import { getHousehold, listMembers } from "@/lib/repo";
import { jsonError } from "@/lib/api-helpers";

// GET /api/households/:id — public: returns household name + the member
// picker list (no PINs). Needed to render the login screen for anyone who
// opens the invite link, before they're authenticated.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const household = await getHousehold(householdId);
  if (!household) return jsonError(404, "household not found");
  const members = await listMembers(householdId);
  return NextResponse.json({ household, members });
}
