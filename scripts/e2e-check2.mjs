// Second E2E pass against a running dev server (see e2e-check.mjs), covering
// the rest of the mutation call sites the port touched: set target,
// create-a-custom-category-during-save (the temp-id -> server-id remap
// path), and delete an expense.
import { chromium } from "playwright";
import fs from "node:fs";
import assert from "node:assert/strict";

const BASE = process.env.E2E_BASE_URL || "http://localhost:3411";
const sandboxChromium = "/opt/pw-browsers/chromium";
const launchOpts = fs.existsSync(sandboxChromium) ? { executablePath: sandboxChromium } : {};
const browser = await chromium.launch(launchOpts);
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const log = (...a) => console.log("[e2e2]", ...a);

try {
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForSelector("#setup-form");
  await page.fill("#hh-name", "Second Family");
  await page.fill("#owner-name", "Owner One");
  await page.fill("#owner-pin", "1111");
  await page.click("#setup-form button[type=submit]");
  await page.waitForURL(/\/h\//);
  await page.waitForLoadState("networkidle");
  log("household created");

  // --- Set target (home screen shows a "Set a monthly target" nav button) ---
  await page.locator('[data-nav="set-target"]').first().click({ timeout: 5000 });
  await page.waitForSelector('#target-form', { timeout: 5000 });
  await page.fill('#target-amount', '300000');
  await page.click('#target-save-btn');
  await page.waitForSelector('#target-form', { state: 'detached', timeout: 10000 });
  await page.waitForTimeout(300);
  const bodyAfterTarget = await page.textContent('body');
  if (!/300,?000/.test(bodyAfterTarget)) {
    console.log('--- body after target save ---\n', bodyAfterTarget.slice(0, 1500));
  }
  assert.ok(/300,?000/.test(bodyAfterTarget), 'target amount should show on home after saving');
  log('PASS: target set and reflected on home');

  // --- Create expense with a brand-new custom category (exercises the
  // pendingCustom* -> server-id remap path in doSave()) ---
  await page.click('.bottom-nav [data-nav="add-expense"]');
  await page.waitForSelector('#amount-input');
  await page.click('[data-action="create-category"]');
  await page.waitForSelector('#new-category-input', { timeout: 5000 });
  await page.fill('#new-category-input', 'Playwright Custom Category');
  await page.click('#active-dialog [data-dlg="confirm"]');
  await page.waitForSelector('#active-dialog', { state: 'detached', timeout: 5000 }).catch(() => {});

  await page.fill('#amount-input', '5000');
  await page.locator('[data-payment]').first().click();
  const today = new Date().toISOString().slice(0, 10);
  await page.fill('#date-input', today);
  await page.fill('#detail-input', 'Second expense for deletion test');
  await page.click('#save-expense-btn');
  await page.waitForSelector('text=/Expense added|Changes saved/', { timeout: 10000 });
  log('PASS: expense saved with a freshly-created custom category (id remap path exercised)');

  await page.click('[data-action="back-home"]');
  await page.waitForLoadState('networkidle');

  // A second expense form should now see the custom category as a normal,
  // already-saved pick (i.e. it really persisted server-side, not just in
  // the one optimistic render).
  await page.click('.bottom-nav [data-nav="add-expense"]');
  await page.waitForSelector('#amount-input');
  const catVisible = await page.locator('text=Playwright Custom Category').count();
  assert.ok(catVisible > 0, 'custom category should be available again in a fresh expense form');
  log('PASS: custom category persisted and is reusable');
  // Form screens hide the bottom nav (they have their own cancel/save
  // controls); the form wasn't touched this time so cancel exits with no
  // confirm dialog.
  await page.click('[data-action="form-cancel"]');
  await page.waitForLoadState('networkidle');

  // --- Delete the expense we created ---
  await page.click('.bottom-nav [data-nav="all-expenses"]');
  await page.waitForLoadState('networkidle');
  await page.locator('text=Second expense for deletion test').first().click();
  await page.waitForSelector('#delete-expense-btn', { timeout: 5000 });
  await page.click('#delete-expense-btn');
  await page.waitForSelector('[data-dlg="confirm"]', { timeout: 5000 });
  await page.locator('[data-dlg="confirm"]').first().click();
  await page.waitForSelector('text=Expense deleted', { timeout: 10000 });
  await page.waitForTimeout(300);
  const bodyAfterDelete = await page.textContent('body');
  assert.ok(!bodyAfterDelete.includes('Second expense for deletion test'), 'deleted expense should be gone');
  log('PASS: expense delete round-trips through the API');

  console.log('ALL E2E CHECK 2 PASSED');
} catch (err) {
  console.error('E2E CHECK 2 FAILED:', err);
  await page.screenshot({ path: '/tmp/e2e2-failure.png', fullPage: true }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser.close();
}
