import { getAdapter } from "./db";
import { uid } from "./db/ids";
import type {
  Household,
  Member,
  PublicMember,
  Expense,
  CustomCategory,
  CustomBank,
  CustomWallet,
  Target,
  DailyLimit,
  Role,
} from "./domain-types";

function nowISO(): string {
  return new Date().toISOString();
}

/* ---------------------------------------------------------- row mappers */
// SQL rows come back snake_case; the app's rendering code (ported from the
// old artifact) expects camelCase, matching defaultState()'s shape.

type HouseholdRow = { id: string; name: string; currency: string; created_at: string };
function mapHousehold(r: HouseholdRow): Household {
  return { id: r.id, name: r.name, currency: r.currency, createdAt: r.created_at };
}

type MemberRow = {
  id: string; household_id: string; name: string; initials: string;
  role: string; pin: string; created_at: string;
};
function mapMember(r: MemberRow): Member {
  return {
    id: r.id, householdId: r.household_id, name: r.name, initials: r.initials,
    role: r.role as Role, pin: r.pin, createdAt: r.created_at,
  };
}
function toPublicMember(m: Member): PublicMember {
  return { id: m.id, name: m.name, initials: m.initials, role: m.role, createdAt: m.createdAt };
}

type ExpenseRow = {
  id: string; household_id: string; category_id: string | null; detail: string | null;
  amount: number; payment_method: string | null; bank_id: string | null; wallet_id: string | null;
  member_id: string; date: string; created_at: string; updated_at: string | null;
  edited_by: string | null; edited_at: string | null; receipt_data_urls: string | null;
};
function mapExpense(r: ExpenseRow): Expense {
  return {
    id: r.id, householdId: r.household_id, categoryId: r.category_id, detail: r.detail,
    amount: r.amount, paymentMethod: r.payment_method, bankId: r.bank_id, walletId: r.wallet_id,
    memberId: r.member_id, date: r.date, createdAt: r.created_at, updatedAt: r.updated_at,
    editedBy: r.edited_by, editedAt: r.edited_at,
    receiptDataUrls: r.receipt_data_urls ? JSON.parse(r.receipt_data_urls) : [],
  };
}

type CategoryRow = { id: string; household_id: string; label: string; icon: string | null };
function mapCategory(r: CategoryRow): CustomCategory {
  return { id: r.id, householdId: r.household_id, label: r.label, icon: r.icon };
}

type BankRow = { id: string; household_id: string; name: string; initials: string; color: string };
function mapBank(r: BankRow): CustomBank {
  return { id: r.id, householdId: r.household_id, name: r.name, initials: r.initials, color: r.color };
}
function mapWallet(r: BankRow): CustomWallet {
  return { id: r.id, householdId: r.household_id, name: r.name, initials: r.initials, color: r.color };
}

/* ---------------------------------------------------------- households */

export async function createHousehold(input: {
  name: string;
  ownerName: string;
  pin: string;
  initials: string;
}): Promise<{ household: Household; owner: Member }> {
  const db = getAdapter();
  const household: Household = {
    id: uid("hh"),
    name: input.name,
    currency: "MMK",
    createdAt: nowISO(),
  };
  await db.run(
    "INSERT INTO households (id, name, currency, created_at) VALUES (?, ?, ?, ?)",
    [household.id, household.name, household.currency, household.createdAt]
  );
  const owner: Member = {
    id: uid("mem"),
    householdId: household.id,
    name: input.ownerName,
    initials: input.initials,
    role: "owner",
    pin: input.pin,
    createdAt: nowISO(),
  };
  await db.run(
    "INSERT INTO members (id, household_id, name, initials, role, pin, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [owner.id, owner.householdId, owner.name, owner.initials, owner.role, owner.pin, owner.createdAt]
  );
  return { household, owner };
}

export async function getHousehold(householdId: string): Promise<Household | null> {
  const rows = await getAdapter().query<HouseholdRow>(
    "SELECT * FROM households WHERE id = ?",
    [householdId]
  );
  return rows[0] ? mapHousehold(rows[0]) : null;
}

/* ------------------------------------------------------------- members */

export async function listMembers(householdId: string): Promise<PublicMember[]> {
  const rows = await getAdapter().query<MemberRow>(
    "SELECT * FROM members WHERE household_id = ? ORDER BY created_at ASC",
    [householdId]
  );
  return rows.map(mapMember).map(toPublicMember);
}

export async function getMemberById(householdId: string, memberId: string): Promise<Member | null> {
  const rows = await getAdapter().query<MemberRow>(
    "SELECT * FROM members WHERE household_id = ? AND id = ?",
    [householdId, memberId]
  );
  return rows[0] ? mapMember(rows[0]) : null;
}

export async function addMember(
  householdId: string,
  input: { name: string; initials: string; pin: string; role?: Role }
): Promise<PublicMember> {
  const member: Member = {
    id: uid("mem"),
    householdId,
    name: input.name,
    initials: input.initials,
    role: input.role || "member",
    pin: input.pin,
    createdAt: nowISO(),
  };
  await getAdapter().run(
    "INSERT INTO members (id, household_id, name, initials, role, pin, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [member.id, member.householdId, member.name, member.initials, member.role, member.pin, member.createdAt]
  );
  return toPublicMember(member);
}

export async function verifyPin(
  householdId: string,
  memberId: string,
  pin: string
): Promise<Member | null> {
  const member = await getMemberById(householdId, memberId);
  if (!member || member.pin !== pin) return null;
  return member;
}

/* ------------------------------------------------------------ expenses */

export async function listExpenses(householdId: string): Promise<Expense[]> {
  const rows = await getAdapter().query<ExpenseRow>(
    "SELECT * FROM expenses WHERE household_id = ? ORDER BY date DESC, created_at DESC",
    [householdId]
  );
  return rows.map(mapExpense);
}

export async function getExpense(householdId: string, expenseId: string): Promise<Expense | null> {
  const rows = await getAdapter().query<ExpenseRow>(
    "SELECT * FROM expenses WHERE household_id = ? AND id = ?",
    [householdId, expenseId]
  );
  return rows[0] ? mapExpense(rows[0]) : null;
}

export async function createExpense(
  householdId: string,
  input: Omit<Expense, "id" | "householdId" | "createdAt" | "updatedAt" | "editedBy" | "editedAt">
): Promise<Expense> {
  const expense: Expense = {
    ...input,
    id: uid("exp"),
    householdId,
    createdAt: nowISO(),
    updatedAt: null,
    editedBy: null,
    editedAt: null,
  };
  await getAdapter().run(
    `INSERT INTO expenses
      (id, household_id, category_id, detail, amount, payment_method, bank_id, wallet_id, member_id, date, created_at, updated_at, edited_by, edited_at, receipt_data_urls)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      expense.id, expense.householdId, expense.categoryId, expense.detail, expense.amount,
      expense.paymentMethod, expense.bankId, expense.walletId, expense.memberId, expense.date,
      expense.createdAt, expense.updatedAt, expense.editedBy, expense.editedAt,
      JSON.stringify(expense.receiptDataUrls || []),
    ]
  );
  return expense;
}

export async function updateExpense(
  householdId: string,
  expenseId: string,
  patch: Partial<Omit<Expense, "id" | "householdId" | "createdAt">>,
  editedBy: string
): Promise<Expense | null> {
  const existing = await getExpense(householdId, expenseId);
  if (!existing) return null;
  const updated: Expense = {
    ...existing,
    ...patch,
    updatedAt: nowISO(),
    editedBy,
    editedAt: nowISO(),
  };
  await getAdapter().run(
    `UPDATE expenses SET category_id = ?, detail = ?, amount = ?, payment_method = ?, bank_id = ?,
       wallet_id = ?, date = ?, updated_at = ?, edited_by = ?, edited_at = ?, receipt_data_urls = ?
     WHERE household_id = ? AND id = ?`,
    [
      updated.categoryId, updated.detail, updated.amount, updated.paymentMethod, updated.bankId,
      updated.walletId, updated.date, updated.updatedAt, updated.editedBy, updated.editedAt,
      JSON.stringify(updated.receiptDataUrls || []), householdId, expenseId,
    ]
  );
  return updated;
}

export async function deleteExpense(householdId: string, expenseId: string): Promise<boolean> {
  const res = await getAdapter().run(
    "DELETE FROM expenses WHERE household_id = ? AND id = ?",
    [householdId, expenseId]
  );
  return res.changes > 0;
}

/* ------------------------------------------------------ custom pickers */

export async function listCustomCategories(householdId: string): Promise<CustomCategory[]> {
  const rows = await getAdapter().query<CategoryRow>(
    "SELECT * FROM custom_categories WHERE household_id = ?",
    [householdId]
  );
  return rows.map(mapCategory);
}

export async function addCustomCategory(
  householdId: string,
  input: { label: string; icon?: string | null }
): Promise<CustomCategory> {
  const cat: CustomCategory = { id: uid("cat"), householdId, label: input.label, icon: input.icon || null };
  await getAdapter().run(
    "INSERT INTO custom_categories (id, household_id, label, icon) VALUES (?, ?, ?, ?)",
    [cat.id, cat.householdId, cat.label, cat.icon]
  );
  return cat;
}

export async function listCustomBanks(householdId: string): Promise<CustomBank[]> {
  const rows = await getAdapter().query<BankRow>(
    "SELECT * FROM custom_banks WHERE household_id = ?",
    [householdId]
  );
  return rows.map(mapBank);
}

export async function addCustomBank(
  householdId: string,
  input: { name: string; initials: string; color: string }
): Promise<CustomBank> {
  const bank: CustomBank = { id: uid("bank"), householdId, ...input };
  await getAdapter().run(
    "INSERT INTO custom_banks (id, household_id, name, initials, color) VALUES (?, ?, ?, ?, ?)",
    [bank.id, bank.householdId, bank.name, bank.initials, bank.color]
  );
  return bank;
}

export async function listCustomWallets(householdId: string): Promise<CustomWallet[]> {
  const rows = await getAdapter().query<BankRow>(
    "SELECT * FROM custom_wallets WHERE household_id = ?",
    [householdId]
  );
  return rows.map(mapWallet);
}

export async function addCustomWallet(
  householdId: string,
  input: { name: string; initials: string; color: string }
): Promise<CustomWallet> {
  const wallet: CustomWallet = { id: uid("wallet"), householdId, ...input };
  await getAdapter().run(
    "INSERT INTO custom_wallets (id, household_id, name, initials, color) VALUES (?, ?, ?, ?, ?)",
    [wallet.id, wallet.householdId, wallet.name, wallet.initials, wallet.color]
  );
  return wallet;
}

/* --------------------------------------------------------------- target */

export async function getTarget(householdId: string, month: string): Promise<Target | null> {
  const rows = await getAdapter().query<{ household_id: string; month: string; amount: number }>(
    "SELECT * FROM targets WHERE household_id = ? AND month = ?",
    [householdId, month]
  );
  return rows[0] ? { householdId: rows[0].household_id, month: rows[0].month, amount: rows[0].amount } : null;
}

export async function setTarget(householdId: string, month: string, amount: number): Promise<Target> {
  const db = getAdapter();
  const existing = await getTarget(householdId, month);
  if (existing) {
    await db.run("UPDATE targets SET amount = ? WHERE household_id = ? AND month = ?", [amount, householdId, month]);
  } else {
    await db.run("INSERT INTO targets (household_id, month, amount) VALUES (?, ?, ?)", [householdId, month, amount]);
  }
  return { householdId, month, amount };
}

/* ------------------------------------------------------------ daily limit
   Same shape and same persistence pattern as target, above, just keyed by a
   calendar date instead of a month — see the daily_limits table. */

export async function getDailyLimit(householdId: string, date: string): Promise<DailyLimit | null> {
  const rows = await getAdapter().query<{ household_id: string; date: string; amount: number }>(
    "SELECT * FROM daily_limits WHERE household_id = ? AND date = ?",
    [householdId, date]
  );
  return rows[0] ? { householdId: rows[0].household_id, date: rows[0].date, amount: rows[0].amount } : null;
}

export async function setDailyLimit(householdId: string, date: string, amount: number): Promise<DailyLimit> {
  const db = getAdapter();
  const existing = await getDailyLimit(householdId, date);
  if (existing) {
    await db.run("UPDATE daily_limits SET amount = ? WHERE household_id = ? AND date = ?", [amount, householdId, date]);
  } else {
    await db.run("INSERT INTO daily_limits (household_id, date, amount) VALUES (?, ?, ?)", [householdId, date, amount]);
  }
  return { householdId, date, amount };
}

/* ------------------------------------------------------------- sessions */

const SESSION_TTL_DAYS = 30;

export async function createSession(householdId: string, memberId: string): Promise<{ id: string; expiresAt: string }> {
  const id = uid("sess");
  const createdAt = nowISO();
  const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();
  await getAdapter().run(
    "INSERT INTO sessions (id, household_id, member_id, created_at, expires_at) VALUES (?, ?, ?, ?, ?)",
    [id, householdId, memberId, createdAt, expiresAt]
  );
  return { id, expiresAt };
}

export async function getSession(sessionId: string): Promise<{ householdId: string; memberId: string } | null> {
  const rows = await getAdapter().query<{ household_id: string; member_id: string; expires_at: string }>(
    "SELECT * FROM sessions WHERE id = ?",
    [sessionId]
  );
  const row = rows[0];
  if (!row) return null;
  if (new Date(row.expires_at).getTime() < Date.now()) return null;
  return { householdId: row.household_id, memberId: row.member_id };
}

export async function deleteSession(sessionId: string): Promise<void> {
  await getAdapter().run("DELETE FROM sessions WHERE id = ?", [sessionId]);
}
