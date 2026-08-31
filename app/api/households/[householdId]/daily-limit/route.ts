import { NextRequest, NextResponse } from "next/server";
import { getDailyLimit, setDailyLimit } from "@/lib/repo";
import { requireMember, jsonError } from "@/lib/api-helpers";

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const date = req.nextUrl.searchParams.get("date") || todayISO();
  const dailyLimit = await getDailyLimit(householdId, date);
  return NextResponse.json({ dailyLimit });
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
  const date = typeof body?.date === "string" ? body.date : todayISO();
  if (!Number.isFinite(amount) || amount <= 0) return jsonError(400, "amount must be a positive number");

  const dailyLimit = await setDailyLimit(householdId, date, amount);
  return NextResponse.json({ dailyLimit });
}
