// Mirrors the shapes used by the original Claude-Artifact app's
// defaultState() (household-notebook/app-logic.js) so the ported frontend's
// rendering code needs minimal changes — only the persistence layer changed,
// not the data shape.

export type Role = "owner" | "member";

export interface Household {
  id: string;
  name: string;
  currency: string;
  createdAt: string;
}

export interface Member {
  id: string;
  householdId: string;
  name: string;
  initials: string;
  role: Role;
  pin: string;
  createdAt: string;
}

/** Member as sent to the client — never includes the PIN. */
export type PublicMember = Omit<Member, "pin" | "householdId">;

export interface Expense {
  id: string;
  householdId: string;
  categoryId: string | null;
  detail: string | null;
  amount: number;
  paymentMethod: string | null;
  bankId: string | null;
  walletId: string | null;
  memberId: string;
  date: string;
  createdAt: string;
  updatedAt: string | null;
  editedBy: string | null;
  editedAt: string | null;
  receiptDataUrls: string[];
}

export interface CustomCategory {
  id: string;
  householdId: string;
  label: string;
  icon: string | null;
}

export interface CustomBank {
  id: string;
  householdId: string;
  name: string;
  initials: string;
  color: string;
}

export interface CustomWallet {
  id: string;
  householdId: string;
  name: string;
  initials: string;
  color: string;
}

export interface Target {
  householdId: string;
  month: string;
  amount: number;
}
