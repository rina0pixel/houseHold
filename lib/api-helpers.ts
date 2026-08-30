import { NextResponse } from "next/server";
import { currentMemberId } from "./session";
import { getMemberById } from "./repo";
import type { Member } from "./domain-types";

export function jsonError(status: number, message: string) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * Resolves the logged-in member for a household from the session cookie.
 * Returns null (never throws) so route handlers can respond with a clean
 * 401 instead of a 500 when no one is logged in.
 */
export async function requireMember(householdId: string): Promise<Member | null> {
  const memberId = await currentMemberId(householdId);
  if (!memberId) return null;
  return getMemberById(householdId, memberId);
}
