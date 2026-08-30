import { NextRequest, NextResponse } from "next/server";
import { listCustomCategories, addCustomCategory } from "@/lib/repo";
import { requireMember, jsonError } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  return NextResponse.json({ categories: await listCustomCategories(householdId) });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const body = await req.json().catch(() => null);
  const label = typeof body?.label === "string" ? body.label.trim() : "";
  if (!label) return jsonError(400, "label is required");
  const category = await addCustomCategory(householdId, { label, icon: body?.icon ?? null });
  return NextResponse.json({ category });
}
