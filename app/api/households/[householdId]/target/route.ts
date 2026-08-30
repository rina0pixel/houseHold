import { NextRequest, NextResponse } from "next/server";
import { getTarget, setTarget } from "@/lib/repo";
import { requireMember, jsonError } from "@/lib/api-helpers";

function currentMonthKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const month = req.nextUrl.searchParams.get("month") || currentMonthKey();
  const target = await getTarget(householdId, month);
  return NextResponse.json({ target });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");

  const body = await req.json().catch(() => null);
  const amount = Number(body?.amount);
  const month = typeof body?.month === "string" ? body.month : currentMonthKey();
  if (!Number.isFinite(amount) || amount <= 0) return jsonError(400, "amount must be a positive number");

  const target = await setTarget(householdId, month, amount);
  return NextResponse.json({ target });
}
