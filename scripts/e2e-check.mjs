// End-to-end check against a running dev server (localhost:3411 — start one
// with `npm run dev -- -p 3411` first, then `npm run test:e2e`). Drives the
// real ported UI (not just the API) through: create household -> add
// expense -> see it on Home -> log out -> log back in with PIN -> confirm
// the expense persisted through a real database round trip, not just
// in-memory state.
import { chromium } from "playwright";
import fs from "node:fs";
import assert from "node:assert/strict";

const BASE = process.env.E2E_BASE_URL || "http://localhost:3411";
// This sandbox ships a pre-fetched Chromium at a fixed path (see the
// repo's own dev environment notes); everywhere else, `npx playwright
// install chromium` puts one wherever Playwright's launcher already knows
// to look, so just omit executablePath there.
const sandboxChromium = "/opt/pw-browsers/chromium";
const launchOpts = fs.existsSync(sandboxChromium) ? { executablePath: sandboxChromium } : {};
const browser = await chromium.launch(launchOpts);
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const log = (...a) => console.log("[e2e]", ...a);

try {
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForSelector("#setup-form", { timeout: 10000 });
  log("setup screen rendered");

  await page.fill("#hh-name", "Playwright Family");
  await page.fill("#owner-name", "Thida");
  await page.fill("#owner-pin", "2468");
  await page.click("#setup-form button[type=submit]");

  await page.waitForURL(/\/h\//, { timeout: 10000 });
  const householdUrl = page.url();
  log("redirected to household URL:", householdUrl);

  await page.waitForSelector("text=Set a monthly spending target", { timeout: 10000 }).catch(() => {});
  await page.waitForLoadState("networkidle");

  // Add an expense (use the bottom-nav button specifically — the sidenav's
  // equivalent button shares the same data-nav but is desktop-only/hidden
  // at this mobile viewport).
  const addBtn = page.locator('.bottom-nav [data-nav="add-expense"]');
  await addBtn.click({ timeout: 10000 });
  await page.waitForSelector("#amount-input", { timeout: 10000 });

  // pick first category choice
  await page.locator('[data-category]').first().click();
  await page.fill("#amount-input", "12000");
  await page.locator('[data-payment]').first().click();
  const today = new Date().toISOString().slice(0, 10);
  await page.fill("#date-input", today);
  await page.fill("#detail-input", "Playwright test expense");
  await page.click("#save-expense-btn");

  await page.waitForSelector("text=/Expense added|Changes saved/", { timeout: 10000 });
  log("expense saved, success screen shown");

  await page.click('[data-action="back-home"]');
  await page.waitForLoadState("networkidle");

  // Log out via drawer (mobile hamburger menu — .sidenav-link is the
  // desktop-only equivalent, present in the DOM but hidden at this
  // viewport, so scope to the drawer specifically).
  await page.click('[data-action="open-drawer"]');
  await page.waitForSelector('.drawer-link[data-action="logout"]', { timeout: 5000 });
  await page.click('.drawer-link[data-action="logout"]');
  await page.waitForSelector("#member-list", { timeout: 10000 });
  log("logged out, member picker shown");

  // Log back in with PIN.
  await page.click('[data-member]');
  await page.waitForSelector("#pin-input", { timeout: 5000 });
  await page.fill("#pin-input", "2468");
  await page.click("#pin-form button[type=submit]");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(500);

  // Confirm the expense persisted through the real DB round trip: go to
  // All Expenses and look for our detail text.
  await page.click('.bottom-nav [data-nav="all-expenses"]');
  await page.waitForLoadState("networkidle");
  const bodyText = await page.textContent("body");
  assert.ok(bodyText.includes("Playwright test expense"), "expense should still be listed after logout/login");
  log("PASS: expense persisted across logout/login through the real database");

  console.log("ALL E2E CHECKS PASSED");
} catch (err) {
  console.error("E2E CHECK FAILED:", err);
  await page.screenshot({ path: "/tmp/e2e-failure.png", fullPage: true }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser.close();
}
