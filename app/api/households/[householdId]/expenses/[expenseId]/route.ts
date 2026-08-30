import { NextRequest, NextResponse } from "next/server";
import { getExpense, updateExpense, deleteExpense } from "@/lib/repo";
import { requireMember, jsonError } from "@/lib/api-helpers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ householdId: string; expenseId: string }> }
) {
  const { householdId, expenseId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const expense = await getExpense(householdId, expenseId);
  if (!expense) return jsonError(404, "expense not found");
  return NextResponse.json({ expense });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ householdId: string; expenseId: string }> }
) {
  const { householdId, expenseId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");

  const body = await req.json().catch(() => null);
  const patch: Record<string, unknown> = {};
  if (body?.categoryId !== undefined) patch.categoryId = body.categoryId;
  if (body?.detail !== undefined) patch.detail = body.detail;
  if (body?.amount !== undefined) {
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount <= 0) return jsonError(400, "amount must be a positive number");
    patch.amount = amount;
  }
  if (body?.paymentMethod !== undefined) patch.paymentMethod = body.paymentMethod;
  if (body?.bankId !== undefined) patch.bankId = body.bankId;
  if (body?.walletId !== undefined) patch.walletId = body.walletId;
  if (body?.date !== undefined) patch.date = body.date;
  if (body?.receiptDataUrls !== undefined) patch.receiptDataUrls = body.receiptDataUrls;

  const updated = await updateExpense(householdId, expenseId, patch, member.id);
  if (!updated) return jsonError(404, "expense not found");
  return NextResponse.json({ expense: updated });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ householdId: string; expenseId: string }> }
) {
  const { householdId, expenseId } = await params;
  const member = await requireMember(householdId);
  if (!member) return jsonError(401, "not logged in");
  const ok = await deleteExpense(householdId, expenseId);
  if (!ok) return jsonError(404, "expense not found");
  return NextResponse.json({ ok: true });
}
