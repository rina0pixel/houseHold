// Throwaway smoke test for the repository layer, run directly with tsx
// against the node:sqlite adapter — no Next.js server needed. Verifies the
// full flow: create household -> add expense -> read it back -> persists
// after "logging out and back in" (a fresh getAdapter() call reusing the
// same file, simulating separate requests).
import assert from "node:assert/strict";
import fs from "node:fs";

process.env.SQLITE_PATH = "/root/workspace/household-notebook-web/.data/smoke.db";
fs.rmSync(process.env.SQLITE_PATH, { force: true });

const repo = await import("../lib/repo");

const { household, owner } = await repo.createHousehold({
  name: "Test Family",
  ownerName: "Aye Aye",
  pin: "1234",
  initials: "AA",
});
assert.ok(household.id.startsWith("hh_"));
assert.equal(owner.role, "owner");

const verified = await repo.verifyPin(household.id, owner.id, "1234");
assert.ok(verified, "correct pin should verify");
const wrong = await repo.verifyPin(household.id, owner.id, "0000");
assert.equal(wrong, null, "wrong pin should not verify");

const expense = await repo.createExpense(household.id, {
  categoryId: "food",
  detail: "Market groceries",
  amount: 15000,
  paymentMethod: "cash",
  bankId: null,
  walletId: null,
  memberId: owner.id,
  date: "2026-08-29",
  receiptDataUrls: [],
});
assert.ok(expense.id.startsWith("exp_"));

// Simulate a totally fresh process reading the same sqlite file (persistence
// across "logout and back in").
const fresh = await import(`../lib/repo?cachebust=${Date.now()}`);
const expenses = await fresh.listExpenses(household.id);
assert.equal(expenses.length, 1);
assert.equal(expenses[0].detail, "Market groceries");
assert.equal(expenses[0].amount, 15000);

const member2 = await repo.addMember(household.id, { name: "Ba Ba", initials: "BB", pin: "5678" });
const members = await repo.listMembers(household.id);
assert.equal(members.length, 2);
assert.ok(!("pin" in members[0]), "public member list must not leak pin");

const target = await repo.setTarget(household.id, "2026-08", 500000);
assert.equal(target.amount, 500000);
const fetchedTarget = await repo.getTarget(household.id, "2026-08");
assert.equal(fetchedTarget?.amount, 500000);

const updated = await repo.updateExpense(household.id, expense.id, { amount: 20000 }, member2.id);
assert.equal(updated?.amount, 20000);
assert.equal(updated?.editedBy, member2.id);

const deleted = await repo.deleteExpense(household.id, expense.id);
assert.equal(deleted, true);
assert.equal((await repo.listExpenses(household.id)).length, 0);

console.log("ALL REPO SMOKE TESTS PASSED");
