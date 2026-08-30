import { NextRequest, NextResponse } from "next/server";
import { listExpenses, createExpense } from "@/lib/repo";
import { requireMember, jsonError } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  return NextResponse.json({ expenses: await listExpenses(householdId) });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string }> }
) {
  const { householdId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");

  const body = await req.json().catch(() => null);
  const amount = Number(body?.amount);
  const date = typeof body?.date === "string" ? body.date : "";
  if (!Number.isFinite(amount) || amount <= 0) return jsonError(400, "amount must be a positive number");
  if (!date) return jsonError(400, "date is required");

  const expense = await createExpense(householdId, {
    categoryId: body?.categoryId ?? null,
    detail: body?.detail ?? null,
    amount,
    paymentMethod: body?.paymentMethod ?? null,
    bankId: body?.bankId ?? null,
    walletId: body?.walletId ?? null,
    memberId: member.id,
    date,
    receiptDataUrls: Array.isArray(body?.receiptDataUrls) ? body.receiptDataUrls : [],
  });
  return NextResponse.json({ expense });
}
