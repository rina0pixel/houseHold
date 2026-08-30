import { cookies } from "next/headers";
import { createSession, deleteSession, getSession } from "./repo";

const COOKIE_PREFIX = "hn_session_";

// One cookie per household, name-scoped by household id, so a person who is
// in two households at once (rare, but the invite-link model allows it)
// isn't logged out of one by visiting the other.
function cookieName(householdId: string): string {
  return COOKIE_PREFIX + householdId;
}

export async function startSession(householdId: string, memberId: string): Promise<void> {
  const { id, expiresAt } = await createSession(householdId, memberId);
  const jar = await cookies();
  jar.set(cookieName(householdId), id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(expiresAt),
  });
}

export async function endSession(householdId: string): Promise<void> {
  const jar = await cookies();
  const sid = jar.get(cookieName(householdId))?.value;
  if (sid) await deleteSession(sid);
  jar.delete(cookieName(householdId));
}

export async function currentMemberId(householdId: string): Promise<string | null> {
  const jar = await cookies();
  const sid = jar.get(cookieName(householdId))?.value;
  if (!sid) return null;
  const session = await getSession(sid);
  if (!session || session.householdId !== householdId) return null;
  return session.memberId;
}
