import { NextRequest, NextResponse } from "next/server";
import { createHousehold } from "@/lib/repo";
import { initialsOf } from "@/lib/text-utils";
import { startSession } from "@/lib/session";
import { jsonError } from "@/lib/api-helpers";

// POST /api/households — create a new household + its owner member, log the
// owner in immediately. This is the web equivalent of the old artifact's
// setup screen; the resulting householdId becomes this household's URL
// (/h/[householdId]) — the same "share this link/QR" invite model the old
// single-tenant artifact used, just now with a real per-household path.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const hhName = typeof body?.householdName === "string" ? body.householdName.trim() : "";
  const ownerName = typeof body?.ownerName === "string" ? body.ownerName.trim() : "";
  const pin = typeof body?.pin === "string" ? body.pin.trim() : "";

  if (!hhName) return jsonError(400, "householdName is required");
  if (!ownerName) return jsonError(400, "ownerName is required");
  if (!/^\d{4,6}$/.test(pin)) return jsonError(400, "pin must be 4-6 digits");

  const { household, owner } = await createHousehold({
    name: hhName,
    ownerName,
    pin,
    initials: initialsOf(ownerName),
  });
  await startSession(household.id, owner.id);

  return NextResponse.json({
    household,
    member: { id: owner.id, name: owner.name, initials: owner.initials, role: owner.role },
  });
}
