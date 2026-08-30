(function () {
"use strict";

/* ============================================================
   ICONS — small inline line-icon set, 24x24, stroke-based
   ============================================================ */
var ICON_PATHS = {
  home: '<path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />',
  list: '<circle cx="5" cy="7" r="1.4" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="5" cy="17" r="1.4" fill="currentColor" stroke="none"/><path d="M9.5 7h10M9.5 12h10M9.5 17h10"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.3"/><path d="M15.7 14.2c2.5.4 4.3 2.5 4.3 5.1"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="14.5" cy="7" r="2.2"/><circle cx="8" cy="17" r="2.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  back: '<path d="M15 5 8 12l7 7"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  chevronRight: '<path d="M9 5l7 7-7 7"/>',
  chevronDown: '<path d="M5 9l7 7 7-7"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
  filter: '<path d="M4 6h16l-6.5 7.5V19l-3 1.5v-7z"/>',
  sort: '<path d="M8 6v13M8 19l-3-3M8 19l3-3M16 18V5M16 5l-3 3M16 5l3 3"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2.2"/><path d="M4 10h16M8.5 3.5v3M15.5 3.5v3"/>',
  check: '<path d="M5 13l4.5 4.5L19 8"/>',
  checkCircle: '<circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.3l2.5 2.5 5-5.2"/>',
  trash: '<path d="M5 7h14M9.5 7V5.2c0-.7.6-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7M7 7l1 12.1c.05.7.65 1.4 1.4 1.4h5.2c.75 0 1.35-.7 1.4-1.4L17 7"/><path d="M10.2 11v6M13.8 11v6"/>',
  edit: '<path d="M4 20l.9-3.9L15.6 5.4a1.8 1.8 0 0 1 2.6 0l1.4 1.4a1.8 1.8 0 0 1 0 2.6L9 20.1z"/><path d="M14 7.4l2.6 2.6"/>',
  bell: '<path d="M7 10a5 5 0 0 1 10 0v4.2l1.6 2.6H5.4L7 14.2z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
  eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 5.7A9.5 9.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a15.4 15.4 0 0 1-3.4 4.2M7 6.7C4.4 8.3 2.5 12 2.5 12S6 18.5 12 18.5a9.6 9.6 0 0 0 3-.5"/><path d="M9.6 10.2a2.6 2.6 0 0 0 3.7 3.7"/>',
  warning: '<path d="M12 4.3 21 19.5H3z"/><path d="M12 10v4.2"/><circle cx="12" cy="16.9" r="0.15" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.3"/><circle cx="12" cy="8" r="0.15" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
  camera: '<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1-2h6l1 2h2.5A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="13" r="3.4"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M4 17l5-5 3.5 3.5L16.5 11 20 14.5"/>',
  cash: '<rect x="3" y="6.5" width="18" height="11" rx="1.8"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v0M18 15v0"/>',
  bank: '<path d="M4 10.5 12 5l8 5.5"/><path d="M5 10.5h14V19H5z"/><path d="M8 13v3.5M12 13v3.5M16 13v3.5"/><path d="M4 19h16"/>',
  card: '<rect x="3" y="6" width="18" height="13" rx="2.2"/><path d="M3 10.5h18"/><path d="M6 15h4"/>',
  wallet: '<path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h11A1.5 1.5 0 0 1 18 7.5V9h1.5A1.5 1.5 0 0 1 21 10.5v6a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 4 16.5z"/><circle cx="16.3" cy="13.5" r="1.2" fill="currentColor" stroke="none"/>',
  basket: '<path d="M5 10h14l-1.4 8.4a1.6 1.6 0 0 1-1.6 1.3H8a1.6 1.6 0 0 1-1.6-1.3z"/><path d="M9 10 8 5.5M15 10l1-4.5M12 10V5.5"/>',
  car: '<path d="M4.5 15.5V12l2-4.2a2 2 0 0 1 1.8-1.1h7.4a2 2 0 0 1 1.8 1.1l2 4.2v3.5"/><path d="M4.5 15.5h15v2.3a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1z"/><circle cx="7.8" cy="15.3" r="1.3"/><circle cx="16.2" cy="15.3" r="1.3"/>',
  bolt: '<path d="M13 3 5 13.5h5.4L11 21l8-11.5h-5.6z"/>',
  cross: '<circle cx="12" cy="12" r="8.5"/><path d="M12 8.2v7.6M8.2 12h7.6"/>',
  cap: '<path d="M12 5 3 9.2l9 4.2 9-4.2z"/><path d="M7.2 11.4V16c0 1.4 2.2 2.6 4.8 2.6s4.8-1.2 4.8-2.6v-4.6"/><path d="M20 9.5v5.2"/>',
  home2: '<path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" /><path d="M10 20v-5h4v5"/>',
  bag: '<path d="M6.5 8h11l1 11.2a1.6 1.6 0 0 1-1.6 1.8H7.1a1.6 1.6 0 0 1-1.6-1.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  film: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M8 5v14M16 5v14M3.5 9.5H8M3.5 14.5H8M16 9.5h4.5M16 14.5h4.5"/>',
  dots: '<circle cx="6" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  qr: '<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><path d="M14 14h2.5v2.5H14zM17.5 14H20M14 19.5h2.5M17.5 17v3"/>',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="1.8"/><path d="M15.5 8.5V6.3A1.8 1.8 0 0 0 13.7 4.5H6.3A1.8 1.8 0 0 0 4.5 6.3v7.4a1.8 1.8 0 0 0 1.8 1.8h2.2"/>',
  logout: '<path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3"/><path d="M13 8l4 4-4 4"/><path d="M17 12H9"/>',
  shield: '<path d="M12 4 5 6.5V12c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6.5z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.3a2.5 2.5 0 1 1 3.7 2.2c-.8.5-1.2 1-1.2 1.9"/><circle cx="12" cy="17" r="0.15" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
  wifiOff: '<path d="M3 3l18 18"/><path d="M8.5 8.8a10 10 0 0 1 11 1M5 12a13.7 13.7 0 0 1 3-2.1M12 16.2a2 2 0 0 1 2 1.8M9.8 18a2.8 2.8 0 0 1 4.6-1"/>',
  receipt: '<path d="M6 3.5h12v17l-2.2-1.4-2 1.4-1.8-1.4-1.8 1.4-2-1.4L6 20.5z"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5"/>',
  household: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10v9.5h11V10"/><path d="M9.5 19.5V14h5v5.5"/>',
  text: '<path d="M5 6h14M12 6v13M9 19h6"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5z"/>',
  target: '<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  end: '<path d="M12 4v10M12 14l-3.5-3.5M12 14l3.5-3.5"/><path d="M5 19h14"/>',
  tag: '<path d="M11.5 4H6.8A1.8 1.8 0 0 0 5 5.8v4.7c0 .48.19.93.53 1.27l8 8a1.8 1.8 0 0 0 2.54 0l4.7-4.7a1.8 1.8 0 0 0 0-2.54l-8-8A1.8 1.8 0 0 0 11.5 4z"/><circle cx="8.6" cy="8.6" r="1.2" fill="currentColor" stroke="none"/>',
  paw: '<circle cx="8" cy="8.3" r="1.7"/><circle cx="12.5" cy="6.3" r="1.7"/><circle cx="17" cy="8.3" r="1.7"/><ellipse cx="12.5" cy="15.2" rx="4.6" ry="3.7"/>',
  gift: '<rect x="4" y="9.5" width="16" height="10.5" rx="1.4"/><path d="M4 9.5h16M12 9.5v10.5"/><path d="M12 9.5c-1.6-3.8-6-4.6-6-1.8 0 1.8 2.6 1.8 6 1.8zM12 9.5c1.6-3.8 6-4.6 6-1.8 0 1.8-2.6 1.8-6 1.8z"/>',
  book: '<path d="M4 5.3c2.4-1 5.2-1 8 0v13.4c-2.8-1-5.6-1-8 0z"/><path d="M20 5.3c-2.4-1-5.2-1-8 0v13.4c2.8-1 5.6-1 8 0z"/>',
  phone: '<rect x="7.2" y="3" width="9.6" height="18" rx="2.2"/><path d="M10.8 18.2h2.4"/>',
  coffee: '<path d="M5 9h11v6.2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 10.5h1.6a2.4 2.4 0 0 1 0 4.7H16"/><path d="M7.8 6.2c0-1 .9-1 .9-2M11.6 6.2c0-1 .9-1 .9-2"/>',
  heart: '<path d="M12 20s-7.3-4.4-9.4-8.9C1.3 8 2.8 4.6 6 4c2.4-.5 4.5.8 6 3.3C13.5 4.8 15.6 3.5 18 4c3.2.6 4.7 4 3.4 7.1C19.3 15.6 12 20 12 20z"/>'
};

// Curated icon set offered when creating a custom category — a mix of the
// built-in category icons plus a few extras, so a hand-picked icon (not just
// "tag") can represent whatever a household dreams up.
var ICON_CHOICES = [
  { id: 'tag', label: 'Tag' },
  { id: 'basket', label: 'Groceries' },
  { id: 'car', label: 'Car' },
  { id: 'bolt', label: 'Utilities' },
  { id: 'cross', label: 'Health' },
  { id: 'cap', label: 'Education' },
  { id: 'home2', label: 'Home' },
  { id: 'bag', label: 'Shopping' },
  { id: 'film', label: 'Entertainment' },
  { id: 'wallet', label: 'Wallet' },
  { id: 'card', label: 'Card' },
  { id: 'receipt', label: 'Receipt' },
  { id: 'gift', label: 'Gift' },
  { id: 'paw', label: 'Pet' },
  { id: 'book', label: 'Book' },
  { id: 'phone', label: 'Phone' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'heart', label: 'Heart' },
  { id: 'globe', label: 'Travel' },
  { id: 'people', label: 'People' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'dots', label: 'Other' }
];
function icon(name, cls, size) {
  var p = ICON_PATHS[name] || ICON_PATHS.dots;
  var s = size || 24;
  return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || '') + '" aria-hidden="true">' + p + '</svg>';
}

/* ============================================================
   I18N — English / Burmese (Myanmar). A per-viewer display preference
   (like text size), stored locally, NOT in shared household state — each
   family member can read the notebook in their own language. Switching
   language re-renders the whole app so every screen updates at once.
   ============================================================ */
var LANG_KEY = "hn_lang_v1";
function getLang() {
  try { var v = localStorage.getItem(LANG_KEY); return v === "my" ? "my" : "en"; } catch (e) { return "en"; }
}
function setLang(v) {
  try { localStorage.setItem(LANG_KEY, v); } catch (e) {}
  document.documentElement.lang = v;
  document.documentElement.setAttribute("data-lang", v);
  try { document.title = t("brand.name"); } catch (e) {}
}
// t(key, vars) looks up `key` in the current language, falling back to
// English, and finally to the key itself so a missing translation never
// renders blank. `vars` does simple {name}-style substitution with values
// the caller already trusts (numbers, or other already-translated/escaped
// text) — never raw user input, since callers still run escapeHtml() on
// anything a person typed before handing it to t().
function t(key, vars) {
  var dict = I18N[getLang()] || I18N.en;
  var str = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key]
    : (Object.prototype.hasOwnProperty.call(I18N.en, key) ? I18N.en[key] : key);
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      str = str.split("{" + k + "}").join(vars[k]);
    });
  }
  return str;
}
// A few phrases carry an English plural "s" that Burmese doesn't use, so
// they get small dedicated helpers instead of the generic template above.
function expenseCountLabel(n) {
  return getLang() === "my" ? ("အသုံးစရိတ် " + n + " ခု") : (n + " expense" + (n === 1 ? "" : "s"));
}
function filterCountLabel(n) {
  return getLang() === "my" ? ("စစ်ထုတ်မှု " + n + " ခု အသုံးပြုထားသည်") : (n + " filter" + (n === 1 ? "" : "s") + " applied");
}
function morePhotosLabel(n, max) {
  return getLang() === "my"
    ? ("ဓာတ်ပုံ " + n + " ပုံ ထပ်ထည့်နိုင်ပါသေးသည် (စုစုပေါင်း " + max + " ပုံအထိ)။")
    : ("You can add " + n + " more photo" + (n === 1 ? "" : "s") + " (up to " + max + " total).");
}

var I18N = {
  en: {
    "nav.primaryAria": "Primary",
    "nav.home": "Home",
    "nav.expenses": "Expenses",
    "nav.addExpense": "Add expense",
    "nav.household": "Household",
    "nav.settings": "Settings",
    "nav.add": "Add",
    "brand.name": "Household Notebook",
    "menu.helpPrivacy": "Help & privacy",
    "menu.logout": "Log out",
    "menu.aria": "Menu",
    "menu.close": "Close menu",
    "menu.open": "Open menu",
    "menu.avatarAria": "Menu, notifications",
    "drawer.household": "Household",
    "drawer.monthlyTarget": "Monthly target",
    "back": "Back",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "close": "Close",
    "optional": "Optional",
    "readOnlyBanner": "You're viewing your household in read-only mode right now. Changes made elsewhere will still appear here.",
    "greet.morning": "Good morning",
    "greet.afternoon": "Good afternoon",
    "greet.evening": "Good evening",
    "role.owner": "Household owner",
    "role.member": "Household member",

    "setup.welcomeTitle": "Welcome to your household notebook",
    "setup.welcomeSub": "Let's set up your household so everyone can record shared expenses in one place.",
    "setup.householdNameLabel": "Household name",
    "setup.householdNamePlaceholder": "For example, The Aungs",
    "setup.householdNameHelp": "This is shown to everyone in your household.",
    "setup.yourNameLabel": "Your name",
    "setup.yourNamePlaceholder": "For example, May",
    "setup.passcodeLabel": "Create a passcode",
    "setup.passcodePlaceholder": "4 to 6 digits",
    "setup.passcodeHelp": "You'll use this passcode to log in on this or any device.",
    "setup.currencyNote": "Household currency is set to <strong>MMK (Myanmar Kyats)</strong> for this first version.",
    "setup.createHousehold": "Create household",
    "setup.creating": "Setting up…",
    "setup.alreadyHave": "Already have a household? Ask its owner for the household link, and open it on this device.",
    "setup.showPasscode": "Show passcode",
    "setup.hidePasscode": "Hide passcode",
    "setup.err.hhName": "Enter a name for your household.",
    "setup.err.ownerName": "Enter your name.",
    "setup.err.pin": "Create a passcode of 4 to 6 digits.",
    "setup.err.createFailed": "Couldn't create your household. Check your connection and try again.",
    "toast.householdCreated": "Household created",
    "toast.actionFailed": "That didn't go through. Please try again.",
    "boot.loading": "Loading your household…",
    "notFound.title": "Household not found",
    "notFound.body": "This link doesn't match a household we know about. Double-check the link, or start a new household.",
    "notFound.startNew": "Start a new household",

    "login.whoAdding": "Who's adding expenses today?",
    "login.passcodeFor": "Passcode for {name}",
    "login.logIn": "Log in",
    "login.forgot": "Forgot your passcode?",
    "login.forgotMessage": "Ask {owner}, your household owner, to help you back in from the Household screen.",
    "login.gotIt": "Got it",
    "login.wrongPasscode": "That passcode doesn't match. Try again.",
    "toast.welcomeBack": "Welcome back, {name}",

    "target.setTitle": "Set a monthly spending target",
    "target.setDesc": "Set a monthly spending target to understand how your household spending is progressing.",
    "target.setBtn": "Set monthly target",
    "target.title": "Monthly spending target",
    "target.editBtn": "Edit target",
    "target.status.ok": "On track",
    "target.status.warn": "Getting close",
    "target.status.alert": "Almost reached",
    "target.status.danger": "Target reached",
    "target.spentOf": "You have spent {spent} of your {amount} monthly target.",
    "target.remaining": "Remaining",
    "target.overBy": "Over by {amount}",
    "target.percentUsed": "Percentage used",
    "target.month": "Month",
    "target.monthlyTarget": "Monthly target",
    "target.pageTitle": "Monthly target",
    "target.pageQuestion": "How much would your household like to spend this month?",
    "target.pageInfo": "This target helps your household understand its monthly spending. It does not prevent anyone from adding an expense.",
    "target.amountLabel": "Monthly spending target",
    "target.currencyLabel": "Household currency",
    "target.saveBtn": "Save target",
    "target.saving": "Saving…",
    "target.ownerOnlyInfo": "Only your household owner can change the monthly target. You can still see it here any time.",
    "target.err.amount": "Enter an amount greater than zero.",
    "target.err.save": "Couldn't save right now. Check your connection and try again.",
    "toast.targetUpdated": "Monthly target updated",
    "toast.readOnlyGeneric": "This household is read-only for you right now.",

    "summary.title": "Expense summary",
    "summary.tab.weekly": "Weekly",
    "summary.tab.monthly": "Monthly",
    "summary.tab.yearly": "Yearly",
    "summary.periodAria": "Summary period",
    "summary.week": "Week {n}",
    "summary.prevWeek": "Previous week",
    "summary.nextWeek": "Next week",
    "summary.prevMonth": "Previous month",
    "summary.nextMonth": "Next month",
    "summary.whereItWent": "Where it went",
    "summary.noneYet": "No expenses recorded for this period yet.",
    "summary.weeklyBreakdown": "Weekly breakdown",
    "summary.seeDetails": "See details",
    "summary.prevYear": "Previous year",
    "summary.nextYear": "Next year",
    "summary.monthlyBreakdown": "Monthly breakdown",
    "summary.sameAsLast": "Same as last {period}",
    "summary.moreThanLast": "{amount} more than last {period}",
    "summary.lessThanLast": "{amount} less than last {period}",
    "summary.noSpendingPrev": "No spending in the previous {period} to compare",
    "summary.pctOfTotal": "{pct}% of total spending",
    "period.week": "week",
    "period.month": "month",
    "period.year": "year",

    "home.recentExpenses": "Recent expenses",
    "home.viewAllExpenses": "View all expenses",
    "home.noneTitle": "No expenses have been added yet.",
    "home.noneDesc": "Add the first expense to start tracking your household spending.",
    "home.addFirstExpense": "Add first expense",
    "row.addedBy": "Added by {name}",
    "row.someone": "someone",

    "expense.addTitle": "Add expense",
    "expense.editTitle": "Edit expense",
    "expense.categoryLabel": "Expense category",
    "expense.viewAllCategories": "View all categories",
    "expense.createCategory": "Create category",
    "expense.detailLabel": "Expense details",
    "expense.detailPlaceholder": "For example, vegetables, electricity bill, or taxi",
    "expense.receiptLabel": "Add receipt or photo",
    "expense.receiptLabelPlural": "Add receipt or photos",
    "expense.receiptCount": "({n} of {max})",
    "expense.compressingFirst": "Compressing photo…",
    "expense.compressingMore": "Adding photo…",
    "expense.receiptMax": "Maximum of {max} photos. Remove one to add another.",
    "expense.receiptTakeOrChoose": "Take a photo of the receipt, or choose one or more from your device.",
    "expense.receiptAddAnother": "Add another photo of the receipt.",
    "expense.takePhoto": "Take a photo",
    "expense.chooseGallery": "Choose from gallery",
    "expense.receiptHelp": "Optional. Up to {max} photos.",
    "expense.removeReceiptPhoto": "Remove receipt photo {n}",
    "expense.amountLabel": "Amount",
    "expense.paymentLabel": "Payment method",
    "expense.addedByLabel": "Added by",
    "expense.dateLabel": "Expense date",
    "expense.saveChanges": "Save changes",
    "expense.saveExpense": "Save expense",
    "expense.savingSpinner": "Saving expense…",
    "expense.err.category": "Select an expense category.",
    "expense.err.amountRequired": "Enter the expense amount.",
    "expense.err.amountInvalid": "Enter a valid amount.",
    "expense.err.amountZero": "Amount must be greater than zero.",
    "expense.err.payment": "Select a payment method.",
    "expense.err.dateRequired": "Select an expense date.",
    "expense.err.dateFuture": "Select today or an earlier date.",
    "expense.err.receiptOverMax": "You can add up to {max} photos. Remove one first.",
    "expense.err.receiptType": "One of those file types isn't supported. Choose photos instead.",
    "expense.err.receiptSize": "One of those photos is too large. Choose photos under 8 MB.",
    "expense.err.receiptRead": "We couldn't read one of those photos. Please try again.",
    "expense.err.readOnlySave": "This household is read-only for you right now, so this expense couldn't be saved.",
    "expense.err.saveFailedTitle": "We couldn't save this expense.",
    "expense.err.saveFailedGeneric": "Check your connection and try again. Your information is still here.",
    "expense.err.saveFailedTooLarge": "The receipt photo makes this expense too large to save. Remove the photo, or choose a smaller one, and try again.",
    "tryAgain": "Try again",
    "expense.discardTitle": "Discard this expense?",
    "expense.discardMessage": "Your entered information will not be saved.",
    "expense.keepEditing": "Keep editing",
    "expense.discard": "Discard",
    "createCat.title": "Create a category",
    "createCat.subtitle": "Give it a short name your household will recognize.",
    "createCat.nameLabel": "Category name",
    "createCat.namePlaceholder": "For example, Pet care or School fees",
    "createCat.chooseIcon": "Choose an icon",
    "createCat.create": "Create",
    "createCat.err.name": "Enter a category name.",
    "createCat.err.tooLong": "Keep the name under 30 characters.",
    "createCat.err.duplicate": "A category named “{name}” already exists.",
    "toast.categoryCreated": "“{name}” category created",
    "success.changesSaved": "Changes saved",
    "success.expenseAdded": "Expense added",
    "success.updated": "Your household expense has been updated.",
    "success.backHome": "Back to Home",
    "success.viewExpense": "View expense",
    "success.addAnother": "Add another expense",

    "allExpenses.title": "All expenses",
    "allExpenses.searchPlaceholder": "Search by expense details",
    "allExpenses.searchAria": "Search expenses by detail name",
    "allExpenses.filterAria": "Filter and sort expenses",
    "allExpenses.clearFilters": "Clear all filters",
    "allExpenses.offlineTitle": "You're offline",
    "allExpenses.offlineDesc": "Connect to the internet to load your household's expenses.",
    "allExpenses.noMatchQuery": "No expenses match “{q}”.",
    "allExpenses.noMatchFilters": "No expenses match these filters.",
    "allExpenses.tryDifferent": "Try a different search or clear your filters.",
    "allExpenses.showMore": "Show more expenses",
    "allExpenses.reachedEnd": "You've reached the end of the list.",
    "filters.title": "Filter expenses",
    "filters.fromDate": "From date",
    "filters.toDate": "To date",
    "filters.category": "Category",
    "filters.payment": "Payment method",
    "filters.member": "Family member",
    "filters.sortBy": "Sort by",
    "filters.everyone": "Everyone",
    "filters.allCategories": "All categories",
    "filters.allPayments": "All payment methods",
    "filters.newestFirst": "Newest first",
    "filters.oldestFirst": "Oldest first",
    "filters.highestAmount": "Highest amount",
    "filters.lowestAmount": "Lowest amount",
    "filters.showResults": "Show results",

    "detail.title": "Expense",
    "detail.notAvailable": "This expense is no longer available.",
    "detail.mayHaveBeenDeleted": "It may have been deleted.",
    "detail.backToAll": "Back to all expenses",
    "detail.category": "Category",
    "detail.detailName": "Detail name",
    "detail.currency": "Currency",
    "detail.created": "Created",
    "detail.lastEdited": "Last edited",
    "detail.aHouseholdMember": "A household member",
    "detail.edit": "Edit expense",
    "detail.delete": "Delete expense",
    "detail.receiptPhotoAlt": "Receipt photo {n} of {total} for {name}",
    "detail.deleteTitle": "Delete this expense?",
    "detail.deleteMessage": "This expense will be removed from the household summary and monthly spending progress.",
    "toast.expenseDeleted": "Expense deleted",

    "household.title": "Household",
    "household.familyMembers": "Family members",
    "household.you": " (You)",
    "household.removeAria": "Remove {name}",
    "household.inviteMember": "Invite a family member",
    "household.infoOwner": "Everyone in your household can add expenses and view shared spending. As the owner, you can also set the monthly target and manage members.",
    "household.infoMember": "Everyone in your household can add expenses and view shared spending. Only your household owner can change the monthly target or manage members.",
    "household.viewOrEditTarget": "View or edit target",
    "household.notSet": "Not set",
    "household.removeTitle": "Remove {name}?",
    "household.removeMessage": "{name} will no longer be able to log in to this household. Expenses they already added will stay in the shared history.",
    "household.removeConfirm": "Remove member",
    "toast.memberRemoved": "Member removed",

    "invite.title": "Invite to household",
    "invite.shareWith": "Share this with a family member so they can join {name}.",
    "invite.scanHint": "Scanning this code opens your household notebook. They'll pick their name and enter their passcode to log in.",
    "invite.copyLink": "Copy household link",
    "invite.addMemberTitle": "Add a family member",
    "invite.addMemberDesc": "Create a name and a temporary passcode for them. They can change it later from Settings.",
    "invite.theirName": "Their name",
    "invite.theirNamePlaceholder": "For example, Thida",
    "invite.tempPasscode": "Temporary passcode",
    "invite.addMemberBtn": "Add family member",
    "invite.err.name": "Enter their name.",
    "invite.qrAria": "QR code linking to this household",
    "invite.qrFallback": "We couldn't generate a QR code for this link on this device. Use the copy-link button instead.",
    "toast.linkCopied": "Link copied",
    "toast.memberAdded": "{name} added — share their passcode with them",

    "settings.title": "Settings",
    "settings.display": "Display",
    "settings.language": "Language",
    "settings.textSize": "Text size",
    "settings.textSize.small": "Small",
    "settings.textSize.standard": "Standard",
    "settings.textSize.large": "Large",
    "settings.textSize.extraLarge": "Extra large",
    "settings.more": "More",
    "settings.householdSettings": "Household settings",
    "settings.privacyHelp": "Privacy & help",

    "help.privacyTitle": "Your privacy",
    "help.privacyBody": "Expenses, receipts, and the monthly target are only visible to people who are members of your household. Household members cannot see or access information from another household.",
    "help.gettingHelpTitle": "Getting help",
    "help.gettingHelpBody": "If you're stuck, ask your household owner — they can add or remove members and reset a forgotten passcode from the Household screen.",
    "help.aboutTitle": "About this notebook",
    "help.aboutBody": "This first version tracks shared household expenses against one monthly target. It does not track income, accounts, or investments.",

    "date.today": "Today",
    "date.yesterday": "Yesterday",

    "cat.food": "Food & Groceries",
    "cat.transport": "Transport",
    "cat.utilities": "Utilities",
    "cat.healthcare": "Healthcare",
    "cat.education": "Education",
    "cat.household": "Household",
    "cat.shopping": "Shopping",
    "cat.entertainment": "Entertainment",
    "cat.other": "Other",
    "pay.cash": "Cash",
    "pay.bank": "Bank Transfer",
    "pay.card": "Card",
    "pay.ewallet": "E-wallet",
    "payHelp.bank": "KBZ, YOMA, AYA, and other banks",
    "payHelp.ewallet": "KPay, Wave Pay, and other wallets",
    "payment.chooseBank": "Choose your bank",
    "payment.addBank": "Add Bank",
    "bank.kbz": "KBZ Bank",
    "bank.aya": "AYA Bank",
    "bank.cb": "CB Bank",
    "bank.yoma": "Yoma Bank",
    "bank.uab": "United Amara Bank",
    "bank.mab": "Myanmar Apex Bank",
    "createBank.title": "Add a bank",
    "createBank.subtitle": "Give it a short name your household will recognize.",
    "createBank.nameLabel": "Bank name",
    "createBank.namePlaceholder": "For example, Wave Money or CB Pay",
    "createBank.create": "Add bank",
    "createBank.err.name": "Enter a bank name.",
    "createBank.err.tooLong": "Keep the name under 30 characters.",
    "createBank.err.duplicate": "A bank named “{name}” already exists.",
    "toast.bankCreated": "“{name}” bank added",
    "payment.chooseWallet": "Choose your E-Wallet",
    "payment.addWallet": "Add Wallet",
    "wallet.kpay": "KPay",
    "wallet.wavepay": "Wave Pay",
    "wallet.ayapay": "AYA Pay",
    "wallet.okdollar": "OK$",
    "wallet.cbpay": "CB Pay",
    "wallet.mytelpay": "Mytel Pay",
    "createWallet.title": "Add a wallet",
    "createWallet.subtitle": "Give it a short name your household will recognize.",
    "createWallet.nameLabel": "Wallet name",
    "createWallet.namePlaceholder": "For example, True Money or OnePay",
    "createWallet.create": "Add wallet",
    "createWallet.err.name": "Enter a wallet name.",
    "createWallet.err.tooLong": "Keep the name under 30 characters.",
    "createWallet.err.duplicate": "A wallet named “{name}” already exists.",
    "toast.walletCreated": "“{name}” wallet added",
    "icon.tag": "Tag", "icon.basket": "Groceries", "icon.car": "Car", "icon.bolt": "Utilities",
    "icon.cross": "Health", "icon.cap": "Education", "icon.home2": "Home", "icon.bag": "Shopping",
    "icon.film": "Entertainment", "icon.wallet": "Wallet", "icon.card": "Card", "icon.receipt": "Receipt",
    "icon.gift": "Gift", "icon.paw": "Pet", "icon.book": "Book", "icon.phone": "Phone",
    "icon.coffee": "Coffee", "icon.heart": "Heart", "icon.globe": "Travel", "icon.people": "People",
    "icon.calendar": "Calendar", "icon.dots": "Other"
  },
  my: {
    "nav.primaryAria": "အဓိက",
    "nav.home": "ပင်မ",
    "nav.expenses": "အသုံးစရိတ်များ",
    "nav.addExpense": "အသုံးစရိတ် ထည့်ရန်",
    "nav.household": "အိမ်ထောင်စု",
    "nav.settings": "ဆက်တင်များ",
    "nav.add": "ထည့်ရန်",
    "brand.name": "အိမ်ထောင်စု မှတ်စုစာအုပ်",
    "menu.helpPrivacy": "အကူအညီနှင့် ကိုယ်ရေးလုံခြုံမှု",
    "menu.logout": "ထွက်ရန်",
    "menu.aria": "မီနူး",
    "menu.close": "မီနူး ပိတ်ရန်",
    "menu.open": "မီနူး ဖွင့်ရန်",
    "menu.avatarAria": "မီနူး၊ အသိပေးချက်များ",
    "drawer.household": "အိမ်ထောင်စု",
    "drawer.monthlyTarget": "လစဉ်ပန်းတိုင်",
    "back": "နောက်သို့",
    "cancel": "ပယ်ဖျက်ရန်",
    "confirm": "အတည်ပြုရန်",
    "close": "ပိတ်ရန်",
    "optional": "မဖြည့်လည်းရ",
    "readOnlyBanner": "လောလောဆယ် သင့်အိမ်ထောင်စုကို ကြည့်ရှုခွင့်သာ ရနေပါသည်။ အခြားနေရာများတွင် ပြင်ဆင်မှုများကို ဤနေရာတွင် ဆက်လက်တွေ့မြင်ရပါမည်။",
    "greet.morning": "မင်္ဂလာနံနက်ခင်းပါ",
    "greet.afternoon": "မင်္ဂလာနေ့လယ်ခင်းပါ",
    "greet.evening": "မင်္ဂလာညနေခင်းပါ",
    "role.owner": "အိမ်ထောင်စု ပိုင်ရှင်",
    "role.member": "အိမ်ထောင်စု အဖွဲ့ဝင်",

    "setup.welcomeTitle": "သင့်အိမ်ထောင်စု မှတ်စုစာအုပ်မှ ကြိုဆိုပါသည်",
    "setup.welcomeSub": "အားလုံးက အသုံးစရိတ်များကို တစ်နေရာတည်းတွင် မှတ်တမ်းတင်နိုင်ရန် သင့်အိမ်ထောင်စုကို စတင်တည်ဆောက်ကြပါစို့။",
    "setup.householdNameLabel": "အိမ်ထောင်စု အမည်",
    "setup.householdNamePlaceholder": "ဥပမာ၊ အောင်တို့မိသားစု",
    "setup.householdNameHelp": "ဤအမည်ကို သင့်အိမ်ထောင်စုရှိ လူတိုင်း မြင်ရပါမည်။",
    "setup.yourNameLabel": "သင့်အမည်",
    "setup.yourNamePlaceholder": "ဥပမာ၊ မေ",
    "setup.passcodeLabel": "စကားဝှက် ဖန်တီးပါ",
    "setup.passcodePlaceholder": "ဂဏန်း 4 လုံးမှ 6 လုံး",
    "setup.passcodeHelp": "ဤစကားဝှက်ကို ဤစက်ပစ္စည်း (သို့) အခြားစက်ပစ္စည်းများတွင် လော့ဂ်အင်ဝင်ရန် အသုံးပြုပါမည်။",
    "setup.currencyNote": "ယခု ပထမဆုံးဗားရှင်းအတွက် အိမ်ထောင်စု၏ ငွေကြေးကို <strong>MMK (မြန်မာကျပ်ငွေ)</strong> ဟု သတ်မှတ်ထားပါသည်။",
    "setup.createHousehold": "အိမ်ထောင်စု ဖန်တီးရန်",
    "setup.creating": "တည်ဆောက်နေသည်…",
    "setup.alreadyHave": "အိမ်ထောင်စု ရှိပြီးသားလား။ ၎င်း၏ပိုင်ရှင်ထံမှ လင့်ခ်ကို တောင်းယူပြီး ဤစက်ပစ္စည်းတွင် ဖွင့်ပါ။",
    "setup.showPasscode": "စကားဝှက် ပြရန်",
    "setup.hidePasscode": "စကားဝှက် ဖျောက်ရန်",
    "setup.err.hhName": "သင့်အိမ်ထောင်စုအတွက် အမည်တစ်ခု ရိုက်ထည့်ပါ။",
    "setup.err.ownerName": "သင့်အမည် ရိုက်ထည့်ပါ။",
    "setup.err.pin": "ဂဏန်း 4 လုံးမှ 6 လုံးရှိသော စကားဝှက် ဖန်တီးပါ။",
    "setup.err.createFailed": "အိမ်ထောင်စု ဖန်တီး၍မရပါ။ သင့်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ထပ်စမ်းကြည့်ပါ။",
    "toast.householdCreated": "အိမ်ထောင်စု ဖန်တီးပြီးပါပြီ",
    "toast.actionFailed": "အောင်မြင်မှုမရှိပါ။ ထပ်စမ်းကြည့်ပါ။",
    "boot.loading": "သင့်အိမ်ထောင်စုကို ဖွင့်နေသည်…",
    "notFound.title": "အိမ်ထောင်စု ရှာမတွေ့ပါ",
    "notFound.body": "ဤလင့်ခ်သည် သိရှိထားသော အိမ်ထောင်စုနှင့် မကိုက်ညီပါ။ လင့်ခ်ကို ပြန်စစ်ပါ၊ သို့မဟုတ် အိမ်ထောင်စုအသစ် စတင်ပါ။",
    "notFound.startNew": "အိမ်ထောင်စုအသစ် စတင်ရန်",

    "login.whoAdding": "ဒီနေ့ ဘယ်သူက အသုံးစရိတ်ထည့်မလဲ။",
    "login.passcodeFor": "{name} အတွက် စကားဝှက်",
    "login.logIn": "လော့ဂ်အင်ဝင်ရန်",
    "login.forgot": "စကားဝှက် မေ့နေပါသလား။",
    "login.forgotMessage": "သင်ပြန်ဝင်ရောက်နိုင်ရန် အိမ်ထောင်စုစာမျက်နှာမှ အကူအညီပေးရန် သင့်အိမ်ထောင်စုပိုင်ရှင် {owner} ကို တောင်းဆိုပါ။",
    "login.gotIt": "နားလည်ပါပြီ",
    "login.wrongPasscode": "ထိုစကားဝှက် မမှန်ကန်ပါ။ ထပ်စမ်းကြည့်ပါ။",
    "toast.welcomeBack": "ပြန်လည်ကြိုဆိုပါသည်၊ {name}",

    "target.setTitle": "လစဉ်အသုံးစရိတ် ပန်းတိုင် သတ်မှတ်ပါ",
    "target.setDesc": "သင့်အိမ်ထောင်စု၏ အသုံးစရိတ် တိုးတက်မှုကို နားလည်နိုင်ရန် လစဉ်အသုံးစရိတ် ပန်းတိုင်တစ်ခု သတ်မှတ်ပါ။",
    "target.setBtn": "လစဉ်ပန်းတိုင် သတ်မှတ်ရန်",
    "target.title": "လစဉ်အသုံးစရိတ် ပန်းတိုင်",
    "target.editBtn": "ပန်းတိုင် ပြင်ဆင်ရန်",
    "target.status.ok": "ပုံမှန်အတိုင်း",
    "target.status.warn": "နီးကပ်လာသည်",
    "target.status.alert": "ကျော်တော့မည်",
    "target.status.danger": "ပန်းတိုင်သို့ ရောက်ပြီ",
    "target.spentOf": "သင့်လစဉ်ပန်းတိုင် {amount} အနက် {spent} သုံးစွဲပြီးပါပြီ။",
    "target.remaining": "ကျန်ရှိငွေ",
    "target.overBy": "{amount} ကျော်လွန်",
    "target.percentUsed": "သုံးစွဲပြီး ရာခိုင်နှုန်း",
    "target.month": "လ",
    "target.monthlyTarget": "လစဉ်ပန်းတိုင်",
    "target.pageTitle": "လစဉ်ပန်းတိုင်",
    "target.pageQuestion": "ဒီလအတွက် သင့်အိမ်ထောင်စု ဘယ်လောက်သုံးချင်ပါသလဲ။",
    "target.pageInfo": "ဤပန်းတိုင်သည် သင့်အိမ်ထောင်စု၏ လစဉ်အသုံးစရိတ်ကို နားလည်ရန် ကူညီပေးပါသည်။ မည်သူ့ကိုမျှ အသုံးစရိတ်ထည့်ခြင်းမှ တားမြစ်မထားပါ။",
    "target.amountLabel": "လစဉ်အသုံးစရိတ် ပန်းတိုင်",
    "target.currencyLabel": "အိမ်ထောင်စု ငွေကြေး",
    "target.saveBtn": "ပန်းတိုင် သိမ်းရန်",
    "target.saving": "သိမ်းနေသည်…",
    "target.ownerOnlyInfo": "သင့်အိမ်ထောင်စု ပိုင်ရှင်သာ လစဉ်ပန်းတိုင်ကို ပြောင်းလဲနိုင်ပါသည်။ ၎င်းကို ဤနေရာတွင် အချိန်မရွေး ကြည့်ရှုနိုင်ပါသည်။",
    "target.err.amount": "သုညထက် ကြီးသော ပမာဏတစ်ခု ရိုက်ထည့်ပါ။",
    "target.err.save": "လောလောဆယ် သိမ်း၍မရပါ။ သင့်အင်တာနက်ကို စစ်ဆေးပြီး ထပ်စမ်းကြည့်ပါ။",
    "toast.targetUpdated": "လစဉ်ပန်းတိုင် မွမ်းမံပြီးပါပြီ",
    "toast.readOnlyGeneric": "လောလောဆယ် ဤအိမ်ထောင်စုကို ကြည့်ရှုခွင့်သာ ရနေပါသည်။",

    "summary.title": "အသုံးစရိတ် အနှစ်ချုပ်",
    "summary.tab.weekly": "အပတ်စဉ်",
    "summary.tab.monthly": "လစဉ်",
    "summary.tab.yearly": "နှစ်စဉ်",
    "summary.periodAria": "အနှစ်ချုပ် ကာလ",
    "summary.week": "အပတ် {n}",
    "summary.prevWeek": "ယခင်အပတ်",
    "summary.nextWeek": "နောက်အပတ်",
    "summary.prevMonth": "ယခင်လ",
    "summary.nextMonth": "နောက်လ",
    "summary.whereItWent": "မည်သည့်နေရာသို့ အသုံးစရိတ်သွားသည်",
    "summary.noneYet": "ဤကာလအတွင်း အသုံးစရိတ် မှတ်တမ်းမရှိသေးပါ။",
    "summary.weeklyBreakdown": "အပတ်စဉ် အသေးစိတ်",
    "summary.seeDetails": "အသေးစိတ်ကြည့်ရန်",
    "summary.prevYear": "ယခင်နှစ်",
    "summary.nextYear": "လာမည့်နှစ်",
    "summary.monthlyBreakdown": "လစဉ် အသေးစိတ်",
    "summary.sameAsLast": "ပြီးခဲ့သည့် {period}နှင့် အတူတူ",
    "summary.moreThanLast": "ပြီးခဲ့သည့် {period}ထက် {amount} ပို",
    "summary.lessThanLast": "ပြီးခဲ့သည့် {period}ထက် {amount} လျော့",
    "summary.noSpendingPrev": "နှိုင်းယှဉ်ရန် ယခင် {period}တွင် အသုံးစရိတ် မရှိပါ",
    "summary.pctOfTotal": "စုစုပေါင်း အသုံးစရိတ်၏ {pct}%",
    "period.week": "အပတ်",
    "period.month": "လ",
    "period.year": "နှစ်",

    "home.recentExpenses": "လတ်တလော အသုံးစရိတ်များ",
    "home.viewAllExpenses": "အသုံးစရိတ်အားလုံး ကြည့်ရန်",
    "home.noneTitle": "အသုံးစရိတ် မထည့်သွင်းရသေးပါ။",
    "home.noneDesc": "သင့်အိမ်ထောင်စု အသုံးစရိတ်ကို စတင်မှတ်တမ်းတင်ရန် ပထမဆုံးအသုံးစရိတ်ကို ထည့်ပါ။",
    "home.addFirstExpense": "ပထမဆုံး အသုံးစရိတ် ထည့်ရန်",
    "row.addedBy": "ထည့်သွင်းသူ- {name}",
    "row.someone": "တစ်ယောက်ယောက်",

    "expense.addTitle": "အသုံးစရိတ် ထည့်ရန်",
    "expense.editTitle": "အသုံးစရိတ် ပြင်ဆင်ရန်",
    "expense.categoryLabel": "အသုံးစရိတ် အမျိုးအစား",
    "expense.viewAllCategories": "အမျိုးအစားအားလုံး ကြည့်ရန်",
    "expense.createCategory": "အမျိုးအစား ဖန်တီးရန်",
    "expense.detailLabel": "အသုံးစရိတ် အသေးစိတ်",
    "expense.detailPlaceholder": "ဥပမာ၊ ဟင်းသီးဟင်းရွက်၊ လျှပ်စစ်ဓာတ်အားခ၊ (သို့) တက္ကစီခ",
    "expense.receiptLabel": "ပြေစာ သို့မဟုတ် ဓာတ်ပုံ ထည့်ရန်",
    "expense.receiptLabelPlural": "ပြေစာ သို့မဟုတ် ဓာတ်ပုံများ ထည့်ရန်",
    "expense.receiptCount": "({n} / {max})",
    "expense.compressingFirst": "ဓာတ်ပုံ ချုံ့နေသည်…",
    "expense.compressingMore": "ဓာတ်ပုံ ထည့်နေသည်…",
    "expense.receiptMax": "အများဆုံး ဓာတ်ပုံ {max} ပုံ ရနိုင်ပါသည်။ နောက်တစ်ပုံ ထည့်ရန် တစ်ပုံကို ဖယ်ရှားပါ။",
    "expense.receiptTakeOrChoose": "ပြေစာကို ဓာတ်ပုံရိုက်ပါ (သို့) သင့်စက်ပစ္စည်းမှ တစ်ပုံ (သို့) တစ်ပုံထက်ပို၍ ရွေးချယ်ပါ။",
    "expense.receiptAddAnother": "ပြေစာ၏ နောက်ထပ်ဓာတ်ပုံ ထည့်ပါ။",
    "expense.takePhoto": "ဓာတ်ပုံရိုက်ရန်",
    "expense.chooseGallery": "ဓာတ်ပုံပြခန်းမှ ရွေးရန်",
    "expense.receiptHelp": "မဖြည့်လည်းရ။ ဓာတ်ပုံ {max} ပုံအထိ ထည့်နိုင်သည်။",
    "expense.removeReceiptPhoto": "ပြေစာဓာတ်ပုံ {n} ကို ဖယ်ရှားရန်",
    "expense.amountLabel": "ပမာဏ",
    "expense.paymentLabel": "ငွေပေးချေမှုနည်းလမ်း",
    "expense.addedByLabel": "ထည့်သွင်းသူ",
    "expense.dateLabel": "အသုံးစရိတ် ရက်စွဲ",
    "expense.saveChanges": "ပြောင်းလဲမှုများ သိမ်းရန်",
    "expense.saveExpense": "အသုံးစရိတ် သိမ်းရန်",
    "expense.savingSpinner": "အသုံးစရိတ် သိမ်းနေသည်…",
    "expense.err.category": "အသုံးစရိတ် အမျိုးအစား ရွေးပါ။",
    "expense.err.amountRequired": "အသုံးစရိတ် ပမာဏ ရိုက်ထည့်ပါ။",
    "expense.err.amountInvalid": "မှန်ကန်သော ပမာဏ ရိုက်ထည့်ပါ။",
    "expense.err.amountZero": "ပမာဏသည် သုညထက် ကြီးရမည်။",
    "expense.err.payment": "ငွေပေးချေမှုနည်းလမ်း ရွေးပါ။",
    "expense.err.dateRequired": "အသုံးစရိတ် ရက်စွဲ ရွေးပါ။",
    "expense.err.dateFuture": "ယနေ့ (သို့) ယခင်ရက်စွဲကို ရွေးပါ။",
    "expense.err.receiptOverMax": "ဓာတ်ပုံ {max} ပုံအထိသာ ထည့်နိုင်ပါသည်။ တစ်ပုံကို အရင်ဖယ်ရှားပါ။",
    "expense.err.receiptType": "ထိုဖိုင်များထဲမှ တစ်ခုသည် ပံ့ပိုးမထားပါ။ ဓာတ်ပုံများကိုသာ ရွေးပါ။",
    "expense.err.receiptSize": "ထိုဓာတ်ပုံများထဲမှ တစ်ပုံသည် ဖိုင်အရွယ်အစား ကြီးလွန်းပါသည်။ 8 MB အောက် ဓာတ်ပုံများကို ရွေးပါ။",
    "expense.err.receiptRead": "ထိုဓာတ်ပုံများထဲမှ တစ်ပုံကို ဖတ်၍မရပါ။ ထပ်စမ်းကြည့်ပါ။",
    "expense.err.readOnlySave": "လောလောဆယ် ဤအိမ်ထောင်စုကို ကြည့်ရှုခွင့်သာ ရနေသဖြင့် ဤအသုံးစရိတ်ကို သိမ်း၍မရပါ။",
    "expense.err.saveFailedTitle": "ဤအသုံးစရိတ်ကို သိမ်း၍မရပါ။",
    "expense.err.saveFailedGeneric": "သင့်အင်တာနက်ကို စစ်ဆေးပြီး ထပ်စမ်းကြည့်ပါ။ သင့်အချက်အလက်များ ဤနေရာတွင် ရှိနေဆဲပါ။",
    "expense.err.saveFailedTooLarge": "ပြေစာဓာတ်ပုံကြောင့် ဤအသုံးစရိတ်ကို သိမ်းရန် ဖိုင်အရွယ်အစား ကြီးလွန်းနေပါသည်။ ဓာတ်ပုံကို ဖယ်ရှားပါ (သို့) ပိုသေးငယ်သော ဓာတ်ပုံကို ရွေးပြီး ထပ်စမ်းကြည့်ပါ။",
    "tryAgain": "ထပ်စမ်းကြည့်ရန်",
    "expense.discardTitle": "ဤအသုံးစရိတ်ကို ပယ်ဖျက်မလား။",
    "expense.discardMessage": "သင်ရိုက်ထည့်ထားသော အချက်အလက်များကို မသိမ်းဆည်းတော့ပါ။",
    "expense.keepEditing": "ဆက်ပြင်ဆင်ရန်",
    "expense.discard": "ပယ်ဖျက်ရန်",
    "createCat.title": "အမျိုးအစား ဖန်တီးရန်",
    "createCat.subtitle": "သင့်အိမ်ထောင်စု မှတ်မိနိုင်မည့် အမည်တိုတစ်ခု ပေးပါ။",
    "createCat.nameLabel": "အမျိုးအစား အမည်",
    "createCat.namePlaceholder": "ဥပမာ၊ အိမ်မွေးတိရစ္ဆာန် စောင့်ရှောက်မှု (သို့) ကျောင်းလခ",
    "createCat.chooseIcon": "သင်္ကေတတစ်ခု ရွေးပါ",
    "createCat.create": "ဖန်တီးရန်",
    "createCat.err.name": "အမျိုးအစား အမည် ရိုက်ထည့်ပါ။",
    "createCat.err.tooLong": "အမည်ကို စာလုံး 30 အောက် ထားပါ။",
    "createCat.err.duplicate": "“{name}” ဟု အမည်ရှိသော အမျိုးအစား ရှိပြီးသားဖြစ်သည်။",
    "toast.categoryCreated": "“{name}” အမျိုးအစား ဖန်တီးပြီးပါပြီ",
    "success.changesSaved": "ပြောင်းလဲမှုများ သိမ်းပြီးပါပြီ",
    "success.expenseAdded": "အသုံးစရိတ် ထည့်ပြီးပါပြီ",
    "success.updated": "သင့်အိမ်ထောင်စု အသုံးစရိတ်ကို မွမ်းမံပြီးပါပြီ။",
    "success.backHome": "ပင်မသို့ ပြန်ရန်",
    "success.viewExpense": "အသုံးစရိတ် ကြည့်ရန်",
    "success.addAnother": "နောက်ထပ် အသုံးစရိတ် ထည့်ရန်",

    "allExpenses.title": "အသုံးစရိတ်အားလုံး",
    "allExpenses.searchPlaceholder": "အသေးစိတ်ဖြင့် ရှာဖွေရန်",
    "allExpenses.searchAria": "အသေးစိတ်အမည်ဖြင့် အသုံးစရိတ်ရှာရန်",
    "allExpenses.filterAria": "အသုံးစရိတ်များကို စစ်ထုတ်၍ စီစဉ်ရန်",
    "allExpenses.clearFilters": "စစ်ထုတ်မှုအားလုံး ရှင်းရန်",
    "allExpenses.offlineTitle": "အော့ဖ်လိုင်း ဖြစ်နေသည်",
    "allExpenses.offlineDesc": "သင့်အိမ်ထောင်စု အသုံးစရိတ်များကို ဖွင့်ရန် အင်တာနက်ချိတ်ဆက်ပါ။",
    "allExpenses.noMatchQuery": "“{q}” နှင့် ကိုက်ညီသော အသုံးစရိတ် မရှိပါ။",
    "allExpenses.noMatchFilters": "ဤစစ်ထုတ်မှုများနှင့် ကိုက်ညီသော အသုံးစရိတ် မရှိပါ။",
    "allExpenses.tryDifferent": "အခြားရှာဖွေမှုတစ်ခု စမ်းကြည့်ပါ (သို့) စစ်ထုတ်မှုများကို ရှင်းပါ။",
    "allExpenses.showMore": "နောက်ထပ် အသုံးစရိတ်များ ပြရန်",
    "allExpenses.reachedEnd": "စာရင်း အဆုံးသို့ ရောက်ရှိပါပြီ။",
    "filters.title": "အသုံးစရိတ်များ စစ်ထုတ်ရန်",
    "filters.fromDate": "ရက်စွဲ (မှ)",
    "filters.toDate": "ရက်စွဲ (အထိ)",
    "filters.category": "အမျိုးအစား",
    "filters.payment": "ငွေပေးချေမှုနည်းလမ်း",
    "filters.member": "မိသားစုဝင်",
    "filters.sortBy": "စီစဉ်ပုံ",
    "filters.everyone": "လူတိုင်း",
    "filters.allCategories": "အမျိုးအစားအားလုံး",
    "filters.allPayments": "ငွေပေးချေမှုနည်းလမ်းအားလုံး",
    "filters.newestFirst": "အသစ်ဆုံးအရင်",
    "filters.oldestFirst": "အဟောင်းဆုံးအရင်",
    "filters.highestAmount": "ပမာဏအများဆုံး",
    "filters.lowestAmount": "ပမာဏအနည်းဆုံး",
    "filters.showResults": "ရလဒ်များ ပြရန်",

    "detail.title": "အသုံးစရိတ်",
    "detail.notAvailable": "ဤအသုံးစရိတ် မရှိတော့ပါ။",
    "detail.mayHaveBeenDeleted": "ဖျက်ပစ်ခံရနိုင်ပါသည်။",
    "detail.backToAll": "အသုံးစရိတ်အားလုံးသို့ ပြန်ရန်",
    "detail.category": "အမျိုးအစား",
    "detail.detailName": "အသေးစိတ် အမည်",
    "detail.currency": "ငွေကြေး",
    "detail.created": "ဖန်တီးသည့်ရက်",
    "detail.lastEdited": "နောက်ဆုံးပြင်ဆင်ချိန်",
    "detail.aHouseholdMember": "အိမ်ထောင်စု အဖွဲ့ဝင်တစ်ဦး",
    "detail.edit": "အသုံးစရိတ် ပြင်ဆင်ရန်",
    "detail.delete": "အသုံးစရိတ် ဖျက်ရန်",
    "detail.receiptPhotoAlt": "{name} အတွက် ပြေစာဓာတ်ပုံ {n} / {total}",
    "detail.deleteTitle": "ဤအသုံးစရိတ်ကို ဖျက်မလား။",
    "detail.deleteMessage": "ဤအသုံးစရိတ်ကို အိမ်ထောင်စု အနှစ်ချုပ်နှင့် လစဉ်အသုံးစရိတ် တိုးတက်မှုမှ ဖယ်ရှားပါမည်။",
    "toast.expenseDeleted": "အသုံးစရိတ် ဖျက်ပြီးပါပြီ",

    "household.title": "အိမ်ထောင်စု",
    "household.familyMembers": "မိသားစုဝင်များ",
    "household.you": " (သင်)",
    "household.removeAria": "{name} ကို ဖယ်ရှားရန်",
    "household.inviteMember": "မိသားစုဝင် ဖိတ်ခေါ်ရန်",
    "household.infoOwner": "သင့်အိမ်ထောင်စုရှိ လူတိုင်းသည် အသုံးစရိတ်ထည့်ခြင်းနှင့် မျှဝေထားသော အသုံးစရိတ်များကို ကြည့်ရှုနိုင်ပါသည်။ ပိုင်ရှင်အနေဖြင့် သင်သည် လစဉ်ပန်းတိုင်ကို သတ်မှတ်ခြင်းနှင့် အဖွဲ့ဝင်များကို စီမံခန့်ခွဲခြင်းကိုလည်း ပြုလုပ်နိုင်ပါသည်။",
    "household.infoMember": "သင့်အိမ်ထောင်စုရှိ လူတိုင်းသည် အသုံးစရိတ်ထည့်ခြင်းနှင့် မျှဝေထားသော အသုံးစရိတ်များကို ကြည့်ရှုနိုင်ပါသည်။ အိမ်ထောင်စုပိုင်ရှင်သာ လစဉ်ပန်းတိုင်ကို ပြောင်းလဲခြင်း (သို့) အဖွဲ့ဝင်များကို စီမံနိုင်ပါသည်။",
    "household.viewOrEditTarget": "ပန်းတိုင် ကြည့်ရန် (သို့) ပြင်ဆင်ရန်",
    "household.notSet": "မသတ်မှတ်ရသေးပါ",
    "household.removeTitle": "{name} ကို ဖယ်ရှားမလား။",
    "household.removeMessage": "{name} သည် ဤအိမ်ထောင်စုသို့ နောက်ထပ် လော့ဂ်အင်ဝင်နိုင်တော့မည် မဟုတ်ပါ။ ၎င်းတို့ ထည့်ထားပြီးသား အသုံးစရိတ်များမူ မျှဝေမှတ်တမ်းတွင် ဆက်ရှိနေပါမည်။",
    "household.removeConfirm": "အဖွဲ့ဝင် ဖယ်ရှားရန်",
    "toast.memberRemoved": "အဖွဲ့ဝင် ဖယ်ရှားပြီးပါပြီ",

    "invite.title": "အိမ်ထောင်စုသို့ ဖိတ်ခေါ်ရန်",
    "invite.shareWith": "{name} သို့ ပါဝင်နိုင်ရန် ဤအရာကို မိသားစုဝင်တစ်ဦးထံ မျှဝေပါ။",
    "invite.scanHint": "ဤကုဒ်ကို စကင်ဖတ်လိုက်ပါက သင့်အိမ်ထောင်စု မှတ်စုစာအုပ် ပွင့်လာပါမည်။ ၎င်းတို့သည် မိမိအမည်ကို ရွေးပြီး လော့ဂ်အင်ဝင်ရန် စကားဝှက်ထည့်ရပါမည်။",
    "invite.copyLink": "အိမ်ထောင်စု လင့်ခ် ကူးယူရန်",
    "invite.addMemberTitle": "မိသားစုဝင် ထည့်ရန်",
    "invite.addMemberDesc": "၎င်းတို့အတွက် အမည်နှင့် ယာယီစကားဝှက်တစ်ခု ဖန်တီးပါ။ နောက်မှ ဆက်တင်များမှ ပြောင်းနိုင်ပါသည်။",
    "invite.theirName": "၎င်း၏ အမည်",
    "invite.theirNamePlaceholder": "ဥပမာ၊ သီတာ",
    "invite.tempPasscode": "ယာယီ စကားဝှက်",
    "invite.addMemberBtn": "မိသားစုဝင် ထည့်ရန်",
    "invite.err.name": "၎င်း၏ အမည် ရိုက်ထည့်ပါ။",
    "invite.qrAria": "ဤအိမ်ထောင်စုသို့ ချိတ်ဆက်ပေးသော QR ကုဒ်",
    "invite.qrFallback": "ဤစက်ပစ္စည်းတွင် ဤလင့်ခ်အတွက် QR ကုဒ် မထုတ်နိုင်ပါ။ လင့်ခ်ကူးယူသည့် ခလုတ်ကို အသုံးပြုပါ။",
    "toast.linkCopied": "လင့်ခ် ကူးယူပြီးပါပြီ",
    "toast.memberAdded": "{name} ကို ထည့်ပြီးပါပြီ — ၎င်း၏ စကားဝှက်ကို မျှဝေပေးပါ",

    "settings.title": "ဆက်တင်များ",
    "settings.display": "ပြသမှု",
    "settings.language": "ဘာသာစကား",
    "settings.textSize": "စာလုံးအရွယ်အစား",
    "settings.textSize.small": "သေးငယ်",
    "settings.textSize.standard": "ပုံမှန်",
    "settings.textSize.large": "ကြီး",
    "settings.textSize.extraLarge": "အကြီးဆုံး",
    "settings.more": "နောက်ထပ်",
    "settings.householdSettings": "အိမ်ထောင်စု ဆက်တင်များ",
    "settings.privacyHelp": "ကိုယ်ရေးလုံခြုံမှုနှင့် အကူအညီ",

    "help.privacyTitle": "သင့်ကိုယ်ရေးလုံခြုံမှု",
    "help.privacyBody": "အသုံးစရိတ်များ၊ ပြေစာများနှင့် လစဉ်ပန်းတိုင်ကို သင့်အိမ်ထောင်စု အဖွဲ့ဝင်များသာ မြင်နိုင်ပါသည်။ အိမ်ထောင်စု အဖွဲ့ဝင်များသည် အခြားအိမ်ထောင်စု၏ အချက်အလက်များကို ကြည့်ရှု (သို့) ဝင်ရောက်နိုင်မည် မဟုတ်ပါ။",
    "help.gettingHelpTitle": "အကူအညီ ရယူရန်",
    "help.gettingHelpBody": "အခက်အခဲရှိပါက သင့်အိမ်ထောင်စု ပိုင်ရှင်ကို မေးမြန်းပါ — ၎င်းတို့သည် အိမ်ထောင်စုစာမျက်နှာမှ အဖွဲ့ဝင်များ ထည့်ခြင်း၊ ဖယ်ရှားခြင်းနှင့် မေ့သွားသော စကားဝှက်ကို ပြန်လည်သတ်မှတ်ပေးနိုင်ပါသည်။",
    "help.aboutTitle": "ဤမှတ်စုစာအုပ်အကြောင်း",
    "help.aboutBody": "ဤပထမဆုံးဗားရှင်းသည် အိမ်ထောင်စု၏ မျှဝေအသုံးစရိတ်များကို လစဉ်ပန်းတိုင်တစ်ခုနှင့် နှိုင်းယှဉ် မှတ်တမ်းတင်ပါသည်။ ဝင်ငွေ၊ အကောင့်များ (သို့) ရင်းနှီးမြှုပ်နှံမှုများကို မှတ်တမ်းတင်မည် မဟုတ်ပါ။",

    "date.today": "ယနေ့",
    "date.yesterday": "မနေ့က",

    "cat.food": "အစားအသောက်နှင့် စျေးဝယ်ပစ္စည်း",
    "cat.transport": "သယ်ယူပို့ဆောင်ရေး",
    "cat.utilities": "အသုံးအဆောင်ခ",
    "cat.healthcare": "ကျန်းမာရေး",
    "cat.education": "ပညာရေး",
    "cat.household": "အိမ်သုံးပစ္စည်း",
    "cat.shopping": "စျေးဝယ်ခြင်း",
    "cat.entertainment": "ဖျော်ဖြေရေး",
    "cat.other": "အခြား",
    "pay.cash": "ငွေသား",
    "pay.bank": "ဘဏ်လွှဲငွေ",
    "pay.card": "ကတ်",
    "pay.ewallet": "အီး-ဝေါလက်",
    "payHelp.bank": "KBZ၊ YOMA၊ AYA နှင့် အခြားဘဏ်များ",
    "payHelp.ewallet": "KPay၊ Wave Pay နှင့် အခြားဝေါလက်များ",
    "payment.chooseBank": "သင့်ဘဏ်ကို ရွေးပါ",
    "payment.addBank": "ဘဏ်ထည့်ရန်",
    "bank.kbz": "KBZ ဘဏ်",
    "bank.aya": "AYA ဘဏ်",
    "bank.cb": "CB ဘဏ်",
    "bank.yoma": "Yoma ဘဏ်",
    "bank.uab": "United Amara ဘဏ်",
    "bank.mab": "Myanmar Apex ဘဏ်",
    "createBank.title": "ဘဏ်တစ်ခု ထည့်ရန်",
    "createBank.subtitle": "သင့်အိမ်ထောင်စု မှတ်မိနိုင်မည့် အမည်တိုတစ်ခု ပေးပါ။",
    "createBank.nameLabel": "ဘဏ်အမည်",
    "createBank.namePlaceholder": "ဥပမာ၊ Wave Money (သို့) CB Pay",
    "createBank.create": "ဘဏ်ထည့်ရန်",
    "createBank.err.name": "ဘဏ်အမည် ရိုက်ထည့်ပါ။",
    "createBank.err.tooLong": "အမည်ကို စာလုံး 30 အောက် ထားပါ။",
    "createBank.err.duplicate": "“{name}” ဟု အမည်ရှိသော ဘဏ် ရှိပြီးသားဖြစ်သည်။",
    "toast.bankCreated": "“{name}” ဘဏ် ထည့်ပြီးပါပြီ",
    "payment.chooseWallet": "သင့် အီးဝေါလက်ကို ရွေးပါ",
    "payment.addWallet": "ဝေါလက် ထည့်ရန်",
    "wallet.kpay": "KPay",
    "wallet.wavepay": "Wave Pay",
    "wallet.ayapay": "AYA Pay",
    "wallet.okdollar": "OK$",
    "wallet.cbpay": "CB Pay",
    "wallet.mytelpay": "Mytel Pay",
    "createWallet.title": "ဝေါလက်တစ်ခု ထည့်ရန်",
    "createWallet.subtitle": "သင့်အိမ်ထောင်စု မှတ်မိနိုင်မည့် အမည်တိုတစ်ခု ပေးပါ။",
    "createWallet.nameLabel": "ဝေါလက်အမည်",
    "createWallet.namePlaceholder": "ဥပမာ၊ True Money (သို့) OnePay",
    "createWallet.create": "ဝေါလက် ထည့်ရန်",
    "createWallet.err.name": "ဝေါလက်အမည် ရိုက်ထည့်ပါ။",
    "createWallet.err.tooLong": "အမည်ကို စာလုံး 30 အောက် ထားပါ။",
    "createWallet.err.duplicate": "“{name}” ဟု အမည်ရှိသော ဝေါလက် ရှိပြီးသားဖြစ်သည်။",
    "toast.walletCreated": "“{name}” ဝေါလက် ထည့်ပြီးပါပြီ",
    "icon.tag": "တဂ်", "icon.basket": "စျေးဝယ်ပစ္စည်း", "icon.car": "ကား", "icon.bolt": "အသုံးအဆောင်ခ",
    "icon.cross": "ကျန်းမာရေး", "icon.cap": "ပညာရေး", "icon.home2": "အိမ်", "icon.bag": "စျေးဝယ်ခြင်း",
    "icon.film": "ဖျော်ဖြေရေး", "icon.wallet": "ပိုက်ဆံအိတ်", "icon.card": "ကတ်", "icon.receipt": "ပြေစာ",
    "icon.gift": "လက်ဆောင်", "icon.paw": "အိမ်မွေးတိရစ္ဆာန်", "icon.book": "စာအုပ်", "icon.phone": "ဖုန်း",
    "icon.coffee": "ကော်ဖီ", "icon.heart": "နှလုံးသား", "icon.globe": "ခရီးသွား", "icon.people": "လူများ",
    "icon.calendar": "ပြက္ခဒိန်", "icon.dots": "အခြား"
  }
};

var MY_MONTHS = ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "သြဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"];
var MY_WEEKDAYS = ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"];
// Hand-rolled Burmese date/time formatting instead of Intl's 'my' locale:
// browser ICU data for Myanmar month/weekday names isn't reliably bundled
// everywhere, so relying on it would silently fall back to English on some
// devices — this stays correct regardless of what locale data a browser ships.
function myDateLong(d) {
  return MY_WEEKDAYS[d.getDay()] + "၊ " + d.getDate() + " " + MY_MONTHS[d.getMonth()] + " " + d.getFullYear();
}
function myDateGroup(d) {
  return MY_WEEKDAYS[d.getDay()] + "၊ " + d.getDate() + " " + MY_MONTHS[d.getMonth()];
}
function myDateShort(d, includeYear) {
  return d.getDate() + " " + MY_MONTHS[d.getMonth()] + (includeYear ? " " + d.getFullYear() : "");
}
function myTime(d) {
  var h = d.getHours(), m = d.getMinutes();
  var period = h < 12 ? "နံနက်" : (h < 17 ? "နေ့လယ်" : "ညနေ");
  var h12 = h % 12; if (h12 === 0) h12 = 12;
  return period + " " + h12 + ":" + pad2(m) + " နာရီ";
}

// catLabel/payLabel translate the built-in categories and payment methods;
// a household-created custom category has no translation (it's whatever a
// member typed), so it always renders as-typed regardless of language.
function catLabel(cat) {
  if (cat && CAT_BY_ID[cat.id]) return t("cat." + cat.id);
  return cat ? cat.label : "";
}
function payLabel(pay) { return pay ? t("pay." + pay.id) : ""; }
function payHelpText(pay) { return (pay && pay.hasHelp) ? t("payHelp." + pay.id) : ""; }
function iconChoiceLabel(ic) { return t("icon." + ic.id); }

/* ============================================================
   CONSTANTS
   ============================================================ */
var CATEGORIES = [
  { id: 'food', label: 'Food & Groceries', icon: 'basket' },
  { id: 'transport', label: 'Transport', icon: 'car' },
  { id: 'utilities', label: 'Utilities', icon: 'bolt' },
  { id: 'healthcare', label: 'Healthcare', icon: 'cross' },
  { id: 'education', label: 'Education', icon: 'cap' },
  { id: 'household', label: 'Household', icon: 'home2' },
  { id: 'shopping', label: 'Shopping', icon: 'bag' },
  { id: 'entertainment', label: 'Entertainment', icon: 'film' },
  { id: 'other', label: 'Other', icon: 'dots' }
];
var CAT_BY_ID = {};
CATEGORIES.forEach(function (c) { CAT_BY_ID[c.id] = c; });

// Custom categories created by a member while filling out an expense form.
// New ones are held here — NOT in shared state — until the expense they were
// created for is actually saved, so creating one never triggers a mid-form
// publish/reload (the artifact capability's publish() reloads every open
// view, including the one that just called it, which would wipe an
// in-progress form). They're merged into state.customCategories in the same
// publishState() call that saves the expense. Reset at the start of every
// renderExpenseFormScreen() so a discarded form doesn't leak categories.
var pendingCustomCategories = [];

// All categories that have actually been saved to shared state (built-in +
// published custom). Use this anywhere outside the live Add/Edit Expense form
// — filters, summaries, expense rows, expense detail — since those screens
// should only ever reference categories every household member can see.
function savedCategories() {
  return CATEGORIES.concat(state.customCategories || []);
}
// Categories available to pick from while a form is open: saved ones plus
// any just created in this form session but not yet published.
function formCategories() {
  return savedCategories().concat(pendingCustomCategories);
}
// Looks up a category by id across built-in, saved-custom, and
// pending-custom (in case a just-created category is being rendered back,
// e.g. in the expense-detail preview, before its own publish completes).
// Falls back to a generic placeholder so a stale/removed id never breaks
// rendering.
function findCategory(id) {
  return CAT_BY_ID[id] ||
    (state.customCategories || []).find(function (c) { return c.id === id; }) ||
    pendingCustomCategories.find(function (c) { return c.id === id; }) ||
    { id: id, label: t('cat.other'), icon: 'dots' };
}

var PAYMENT_METHODS = [
  { id: 'cash', icon: 'cash', hasHelp: false },
  { id: 'bank', icon: 'bank', hasHelp: false },
  { id: 'card', icon: 'card', hasHelp: false },
  { id: 'ewallet', icon: 'wallet', hasHelp: false }
];
var PAY_BY_ID = {};
PAYMENT_METHODS.forEach(function (p) { PAY_BY_ID[p.id] = p; });

// A small fixed palette for custom banks'/wallets' badges, picked
// deterministically from the typed name so the same name always gets the
// same color.
var CUSTOM_BADGE_COLORS = ['#3C6E78', '#A5710A', '#1D5FA8', '#2E7D5B', '#B85A15', '#B23B2E', '#6E6154'];
function colorForName(name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) { hash = (hash * 31 + name.charCodeAt(i)) >>> 0; }
  return CUSTOM_BADGE_COLORS[hash % CUSTOM_BADGE_COLORS.length];
}

// Common Myanmar banks offered once "Bank Transfer" is selected as the
// payment method. Shown as initials badges (never a reproduced bank logo)
// so a household member can note which bank without typing it out. Anything
// not in this shortlist is added via the "Add Bank" tile, which works just
// like creating a custom expense category: it's saved to shared state so
// every household member can pick it afterward.
var BANKS = [
  { id: 'kbz', initials: 'KBZ', color: '#2A4F58' },
  { id: 'aya', initials: 'AYA', color: '#A5710A' },
  { id: 'cb', initials: 'CB', color: '#1D5FA8' },
  { id: 'yoma', initials: 'YOMA', color: '#2E7D5B' },
  { id: 'uab', initials: 'UAB', color: '#B85A15' },
  { id: 'mab', initials: 'MAB', color: '#6E6154' }
];
var BANK_BY_ID = {};
BANKS.forEach(function (b) { BANK_BY_ID[b.id] = b; });

// Common Myanmar mobile wallets offered once "E-Wallet" is selected — same
// shortlist-plus-"Add Wallet" pattern as banks above.
var WALLETS = [
  { id: 'kpay', initials: 'KPay', color: '#2A4F58' },
  { id: 'wavepay', initials: 'Wave', color: '#B85A15' },
  { id: 'ayapay', initials: 'AYA', color: '#A5710A' },
  { id: 'okdollar', initials: 'OK$', color: '#2E7D5B' },
  { id: 'cbpay', initials: 'CB', color: '#1D5FA8' },
  { id: 'mytelpay', initials: 'Mytel', color: '#6E6154' }
];
var WALLET_BY_ID = {};
WALLETS.forEach(function (w) { WALLET_BY_ID[w.id] = w; });

// Custom banks/wallets created from the Add/Edit Expense form work exactly
// like custom categories: held locally until the expense they were created
// for is actually saved, then merged into shared state in that same
// publishState() call. Reset at the start of every renderExpenseFormScreen()
// so a discarded form doesn't leak one nobody else can see.
var pendingCustomBanks = [];
var pendingCustomWallets = [];
function savedBanks() { return BANKS.concat(state.customBanks || []); }
function formBanks() { return savedBanks().concat(pendingCustomBanks); }
function findBank(id) {
  if (!id) return null;
  return BANK_BY_ID[id] ||
    (state.customBanks || []).find(function (b) { return b.id === id; }) ||
    pendingCustomBanks.find(function (b) { return b.id === id; }) ||
    null;
}
function savedWallets() { return WALLETS.concat(state.customWallets || []); }
function formWallets() { return savedWallets().concat(pendingCustomWallets); }
function findWallet(id) {
  if (!id) return null;
  return WALLET_BY_ID[id] ||
    (state.customWallets || []).find(function (w) { return w.id === id; }) ||
    pendingCustomWallets.find(function (w) { return w.id === id; }) ||
    null;
}
// Built-in banks/wallets translate through bank.<id>/wallet.<id>; a
// household-typed name has no translation and always renders as-typed,
// regardless of language — same rule as catLabel() for custom categories.
function bankLabel(bank) {
  if (!bank) return '';
  if (BANK_BY_ID[bank.id]) return t('bank.' + bank.id);
  return bank.name || '';
}
function walletLabel(wallet) {
  if (!wallet) return '';
  if (WALLET_BY_ID[wallet.id]) return t('wallet.' + wallet.id);
  return wallet.name || '';
}
// Full payment-method display for an expense: "Bank Transfer" alone, or
// "Bank Transfer — KBZ Bank" / "E-Wallet — KPay" once a bank/wallet was picked.
function paymentDetailText(e) {
  var pay = PAY_BY_ID[e.paymentMethod];
  var label = payLabel(pay);
  if (e.paymentMethod === 'bank' && e.bankId) {
    var bank = findBank(e.bankId);
    var bankName = bank ? bankLabel(bank) : (e.bankOtherName || '');
    if (bankName) return label + ' — ' + bankName;
  }
  if (e.paymentMethod === 'ewallet' && e.walletId) {
    var wallet = findWallet(e.walletId);
    var walletName = wallet ? walletLabel(wallet) : '';
    if (walletName) return label + ' — ' + walletName;
  }
  return label;
}

// Maximum receipt/expense photos that can be attached to a single expense.
var RECEIPT_MAX = 6;

// A palette of tints/hues cycled across categories for their icon chips —
// purely decorative sorting aid, distinct from the semantic spend-state colors.
var CAT_TINTS = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9'];

/* ============================================================
   UTILITIES
   ============================================================ */
function uid(prefix) {
  return (prefix || 'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function pad2(n) { return n < 10 ? '0' + n : '' + n; }
function todayISO() {
  var d = new Date();
  return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
}
function nowISO() { return new Date().toISOString(); }
function monthKeyOf(dateStr) { return dateStr.slice(0, 7); }
function currentMonthKey() { return todayISO().slice(0, 7); }
function parseISODate(s) {
  var parts = s.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
function fmtMoney(n) {
  var num = Number(n) || 0;
  var rounded = Math.round(num * 100) / 100;
  var parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
function fmtMMK(n) { return fmtMoney(n) + ' MMK'; }
function fmtDateHuman(dateStr) {
  var d = parseISODate(dateStr);
  var today = new Date(); today.setHours(0,0,0,0);
  var yest = new Date(today); yest.setDate(yest.getDate() - 1);
  var dd = new Date(d); dd.setHours(0,0,0,0);
  if (dd.getTime() === today.getTime()) return t('date.today');
  if (dd.getTime() === yest.getTime()) return t('date.yesterday');
  if (getLang() === 'my') return myDateShort(d, dd.getFullYear() !== today.getFullYear());
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: dd.getFullYear() === today.getFullYear() ? undefined : 'numeric' });
}
function fmtDateLong(dateStr) {
  var d = parseISODate(dateStr);
  if (getLang() === 'my') return myDateLong(d);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
function fmtDateGroup(dateStr) {
  var d = parseISODate(dateStr);
  var today = new Date(); today.setHours(0,0,0,0);
  var yest = new Date(today); yest.setDate(yest.getDate() - 1);
  var dd = new Date(d); dd.setHours(0,0,0,0);
  if (dd.getTime() === today.getTime()) return t('date.today');
  if (dd.getTime() === yest.getTime()) return t('date.yesterday');
  if (getLang() === 'my') return myDateGroup(d);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });
}
function fmtDateTimeHuman(iso) {
  var d = new Date(iso);
  if (getLang() === 'my') return myDateShort(d, true) + '၊ ' + myTime(d);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ' at ' +
    d.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit' });
}
function monthLabel(monthKey) {
  var parts = monthKey.split('-').map(Number);
  var d = new Date(parts[0], parts[1] - 1, 1);
  if (getLang() === 'my') return MY_MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}
function monthShortLabel(monthIndex) {
  if (getLang() === 'my') return MY_MONTHS[monthIndex];
  return new Date(2000, monthIndex, 1).toLocaleDateString('en-GB', { month: 'short' });
}
function initialsOf(name) {
  var words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function startOfWeekMonday(d) {
  var date = new Date(d); date.setHours(0,0,0,0);
  var day = date.getDay(); // 0 Sun .. 6 Sat
  var diff = (day === 0 ? -6 : 1 - day);
  date.setDate(date.getDate() + diff);
  return date;
}
function toISO(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function addDays(d, n) { var r = new Date(d); r.setDate(r.getDate() + n); return r; }


/* ============================================================
   STATE
   ============================================================ */
function defaultState() {
  return {
    household: null, // { id, name, currency, createdAt }
    members: [],      // { id, name, initials, role } — pin never sent to the client
    target: null,      // { amount, month }
    expenses: [],        // { id, categoryId, detail, amount, paymentMethod, memberId, date, createdAt, updatedAt, editedBy, editedAt, receiptDataUrls }
    customCategories: [],  // { id, label, icon } — created by members from the Add/Edit Expense category picker
    customBanks: [],       // { id, name, initials, color }
    customWallets: []      // { id, name, initials, color }
  };
}

// The household id lives in the URL (/h/[householdId], rendered by the Next
// app into #app's data attribute) rather than being embedded state — this is
// what makes the app multi-tenant: one Vercel deployment serves every
// household, each at its own URL, instead of one artifact per household.
var appRoot = document.getElementById('app');
var HOUSEHOLD_ID = (appRoot && appRoot.getAttribute('data-household-id')) || '';

function apiPath(path) { return '/api/households/' + HOUSEHOLD_ID + path; }

// Thin fetch wrapper: cookies for session auth, JSON in and out, and a
// normalized rejection ({message, status, code}) callers can branch on.
function apiRequest(method, path, body) {
  var opts = { method: method, credentials: 'include' };
  if (body !== undefined) {
    opts.headers = { 'Content-Type': 'application/json' };
    opts.body = JSON.stringify(body);
  }
  return fetch(apiPath(path), opts).then(function (res) {
    return res.text().then(function (text) {
      var data = null;
      try { data = text ? JSON.parse(text) : null; } catch (e) {}
      if (!res.ok) {
        var err = new Error((data && data.error) || ('Request failed: ' + res.status));
        err.status = res.status;
        err.code = data && data.error;
        throw err;
      }
      return data;
    });
  });
}

var state = defaultState();

var ROUTE_KEY = 'hn_route_' + HOUSEHOLD_ID;
function loadRoute() {
  try {
    var raw = localStorage.getItem(ROUTE_KEY);
    if (!raw) return { name: 'home', params: {} };
    var r = JSON.parse(raw);
    return (r && r.name) ? r : { name: 'home', params: {} };
  } catch (e) {
    return { name: 'home', params: {} };
  }
}
var session = { memberId: null, route: loadRoute() };
// Kept as saveSession() (rather than renamed) so every existing call site
// that does `session.memberId = x; saveSession();` after a real login/setup
// API call keeps working unchanged. It only persists the current screen —
// who's logged in is never trusted from localStorage, only from the
// server's session cookie (see loadHouseholdData()/bootstrap()).
function saveSession() {
  try { localStorage.setItem(ROUTE_KEY, JSON.stringify(session.route)); } catch (e) {}
}

function currentMember() {
  return state.members.find(function (m) { return m.id === session.memberId; }) || null;
}
function currentMemberIsOwner() {
  var m = currentMember();
  return !!m && m.role === 'owner';
}
function navigate(name, params) {
  session.route = { name: name, params: params || {} };
  saveSession();
  window.scrollTo(0, 0);
  runPageTurn(renderApp);
}

// Plays a small, quiet micro-interaction around a full-screen navigation —
// the outgoing screen eases down and fades a touch, the incoming one eases
// up into place. No page-turn/flip. Only .main-col (topbar + page content)
// animates — the bottom nav / side nav are siblings outside it, so they
// stay put, and a fixed-position bottom nav never risks re-anchoring to a
// transformed ancestor. Same-screen refreshes (saving an expense, switching
// language, a remote sync tick) call renderApp() directly and skip this,
// since nothing is navigating to a new page in those cases.
var pageTurnToken = 0;
function runPageTurn(renderFn) {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var outgoing = document.querySelector('#app .main-col');
  if (!outgoing || reduceMotion) { renderFn(); return; }
  var myToken = ++pageTurnToken;
  outgoing.classList.remove('page-turn-in');
  outgoing.classList.add('page-turn-out');
  window.setTimeout(function () {
    if (myToken !== pageTurnToken) return; // a newer navigation already took over
    renderFn();
    var incoming = document.querySelector('#app .main-col');
    if (!incoming) return;
    incoming.classList.add('page-turn-in');
    window.setTimeout(function () {
      if (myToken === pageTurnToken) incoming.classList.remove('page-turn-in');
    }, 190);
  }, 90);
}

/* ============================================================
   SHARED-STATE PLUMBING
   ============================================================ */
// The old artifact-hosted app "published" a whole new HTML document to a
// shared artifact on every change; every household member's page reloaded
// to it. Here the household's data lives in a real database behind the API
// routes instead (see apiRequest() above, and its call sites throughout this
// file), so a "read-only" state (an artifact viewer without write access) no
// longer applies — every logged-in member can write. isReadOnly stays
// permanently false purely so readOnlyBanner() (unchanged) stays a harmless
// no-op rather than needing to be hunted down and deleted.
var isReadOnly = false;


/* ============================================================
   PERIOD / SUMMARY CALCULATIONS
   ============================================================ */
function periodRange(period, refDate) {
  var ref = refDate || new Date();
  if (period === 'weekly') {
    var start = startOfWeekMonday(ref);
    var end = addDays(start, 6);
    return { start: toISO(start), end: toISO(end) };
  }
  if (period === 'yearly') {
    return { start: ref.getFullYear() + '-01-01', end: ref.getFullYear() + '-12-31' };
  }
  // monthly
  var y = ref.getFullYear(), m = ref.getMonth();
  var last = new Date(y, m + 1, 0).getDate();
  return { start: y + '-' + pad2(m + 1) + '-01', end: y + '-' + pad2(m + 1) + '-' + pad2(last) };
}
function previousPeriodRange(period, refDate) {
  var ref = refDate || new Date();
  if (period === 'weekly') return periodRange('weekly', addDays(ref, -7));
  if (period === 'yearly') return periodRange('yearly', new Date(ref.getFullYear() - 1, 0, 1));
  return periodRange('monthly', new Date(ref.getFullYear(), ref.getMonth() - 1, 1));
}
function periodLabel(period, range) {
  if (period === 'weekly') return fmtDateHumanShort(range.start) + ' – ' + fmtDateHumanShort(range.end);
  if (period === 'yearly') return range.start.slice(0, 4);
  return monthLabel(range.start.slice(0, 7));
}
function fmtDateHumanShort(dateStr) {
  var d = parseISODate(dateStr);
  if (getLang() === 'my') return myDateShort(d, false);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
function inRange(dateStr, range) { return dateStr >= range.start && dateStr <= range.end; }

/* ---- Month split into 4 fixed weeks: 1–7, 8–14, 15–21, 22–end ---- */
function daysInMonthOf(monthKey) {
  var parts = monthKey.split('-').map(Number);
  return new Date(parts[0], parts[1], 0).getDate();
}
function getMonthWeeks(monthKey) {
  var last = daysInMonthOf(monthKey);
  var bounds = [1, 8, 15, 22, last + 1];
  var weeks = [];
  for (var i = 0; i < 4; i++) {
    var startDay = bounds[i];
    var endDay = Math.min(bounds[i + 1] - 1, last);
    weeks.push({ start: monthKey + '-' + pad2(startDay), end: monthKey + '-' + pad2(endDay) });
  }
  return weeks;
}
function weekIndexForDate(dateStr) {
  var day = parseInt(dateStr.slice(8, 10), 10);
  if (day >= 22) return 3;
  if (day >= 15) return 2;
  if (day >= 8) return 1;
  return 0;
}
function adjacentMonthKey(monthKey, delta) {
  var parts = monthKey.split('-').map(Number);
  var d = new Date(parts[0], parts[1] - 1 + delta, 1);
  return d.getFullYear() + '-' + pad2(d.getMonth() + 1);
}

function expensesInRange(range) {
  return state.expenses.filter(function (e) { return inRange(e.date, range); });
}
function summarize(expenses) {
  var total = 0;
  var byCat = {};
  expenses.forEach(function (e) {
    total += Number(e.amount) || 0;
    byCat[e.categoryId] = (byCat[e.categoryId] || 0) + (Number(e.amount) || 0);
  });
  var rows = Object.keys(byCat).map(function (catId) {
    return { categoryId: catId, total: byCat[catId], pct: total > 0 ? (byCat[catId] / total) * 100 : 0 };
  }).sort(function (a, b) { return b.total - a.total; });
  return { total: total, count: expenses.length, byCategory: rows };
}
function monthTotalSpent(monthKey) {
  return state.expenses.reduce(function (sum, e) {
    return monthKeyOf(e.date) === monthKey ? sum + (Number(e.amount) || 0) : sum;
  }, 0);
}
function targetStatus(pct) {
  if (pct >= 100) return { key: 'danger', label: t('target.status.danger') };
  if (pct >= 90) return { key: 'alert', label: t('target.status.alert') };
  if (pct >= 70) return { key: 'warn', label: t('target.status.warn') };
  return { key: 'ok', label: t('target.status.ok') };
}
function recentExpenses(n) {
  return state.expenses.slice().sort(function (a, b) {
    return (b.date + b.createdAt) < (a.date + a.createdAt) ? -1 : 1;
  }).slice(0, n);
}


/* ============================================================
   TOASTS
   ============================================================ */
function showToast(msg) {
  var region = document.getElementById('toast-region');
  if (!region) {
    region = document.createElement('div');
    region.id = 'toast-region';
    region.className = 'toast-region';
    region.setAttribute('aria-live', 'polite');
    document.body.appendChild(region);
  }
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  region.appendChild(t);
  setTimeout(function () {
    t.style.transition = 'opacity 0.3s ease';
    t.style.opacity = '0';
    setTimeout(function () { t.remove(); }, 320);
  }, 2600);
}

/* ============================================================
   DIALOG (generic confirm) — appended outside #app so it survives
   ============================================================ */
function openDialog(opts) {
  closeDialog();
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.setAttribute('role', 'presentation');
  var destructive = opts.destructive;
  back.innerHTML =
    '<div class="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dlg-title" aria-describedby="dlg-desc">' +
      '<h2 class="title" id="dlg-title">' + escapeHtml(opts.title) + '</h2>' +
      '<p id="dlg-desc" class="muted body-lg">' + escapeHtml(opts.message) + '</p>' +
      '<div class="dialog-actions">' +
        '<button type="button" class="btn btn-secondary" data-dlg="cancel">' + escapeHtml(opts.cancelLabel || t('cancel')) + '</button>' +
        '<button type="button" class="btn ' + (destructive ? 'btn-danger' : 'btn-primary') + '" data-dlg="confirm">' + escapeHtml(opts.confirmLabel || t('confirm')) + '</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) {
    if (e.target === back) closeDialog();
  });
  var cancelBtn = back.querySelector('[data-dlg="cancel"]');
  var confirmBtn = back.querySelector('[data-dlg="confirm"]');
  cancelBtn.addEventListener('click', function () { closeDialog(); if (opts.onCancel) opts.onCancel(); });
  confirmBtn.addEventListener('click', function () { if (opts.onConfirm) opts.onConfirm(); });
  // The non-destructive action always gets initial focus, so a destructive
  // confirm is never the one the keyboard or a stray tap lands on first.
  cancelBtn.focus();
  document.addEventListener('keydown', dialogKeyHandler);
}
function dialogKeyHandler(e) {
  if (e.key === 'Escape') closeDialog();
}
function closeDialog() {
  var d = document.getElementById('active-dialog');
  if (d) d.remove();
  document.removeEventListener('keydown', dialogKeyHandler);
}

/* ============================================================
   DRAWER (hamburger menu)
   ============================================================ */
function openDrawer() {
  closeDrawer();
  var back = document.createElement('div');
  back.className = 'drawer-backdrop';
  back.id = 'active-drawer';
  var m = currentMember();
  back.innerHTML =
    '<div class="drawer" role="dialog" aria-modal="true" aria-label="' + escapeHtml(t('menu.aria')) + '">' +
      '<div class="drawer-head">' +
        '<div class="row"><span class="avatar" aria-hidden="true">' + escapeHtml(m ? m.initials : '') + '</span>' +
          '<div class="header-greeting"><strong>' + escapeHtml(m ? m.name : '') + '</strong><span class="hh-name">' + escapeHtml(state.household ? state.household.name : '') + '</span></div></div>' +
        '<button type="button" class="icon-btn" data-drawer="close" aria-label="' + escapeHtml(t('menu.close')) + '">' + icon('close') + '</button>' +
      '</div>' +
      '<button type="button" class="drawer-link" data-nav="help">' + icon('help') + ' ' + escapeHtml(t('menu.helpPrivacy')) + '</button>' +
      '<hr class="divider" />' +
      '<button type="button" class="drawer-link" data-action="logout">' + icon('logout') + ' ' + escapeHtml(t('menu.logout')) + '</button>' +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDrawer(); });
  back.querySelector('[data-drawer="close"]').addEventListener('click', closeDrawer);
  back.querySelectorAll('[data-nav]').forEach(function (b) {
    b.addEventListener('click', function () { closeDrawer(); navigate(b.getAttribute('data-nav')); });
  });
  back.querySelector('[data-action="logout"]').addEventListener('click', function () {
    closeDrawer();
    doLogout();
  });
  document.addEventListener('keydown', drawerKeyHandler);
}
function drawerKeyHandler(e) { if (e.key === 'Escape') closeDrawer(); }
function closeDrawer() {
  var d = document.getElementById('active-drawer');
  if (d) d.remove();
  document.removeEventListener('keydown', drawerKeyHandler);
}

/* ============================================================
   APP SHELL (top bar + bottom nav / side nav)
   ============================================================ */
var NAV_ITEMS = [
  { name: 'home', key: 'nav.home', icon: 'home' },
  { name: 'all-expenses', key: 'nav.expenses', icon: 'list' },
  { name: 'add-expense', key: 'nav.addExpense', icon: 'plus', isAdd: true },
  { name: 'household', key: 'nav.household', icon: 'household' },
  { name: 'settings', key: 'nav.settings', icon: 'sliders' }
];
function renderSideNav(activeName) {
  var m = currentMember();
  var links = NAV_ITEMS.filter(function (n) { return !n.isAdd; }).map(function (n) {
    return '<button type="button" class="sidenav-link' + (n.name === activeName ? ' is-active' : '') + '" data-nav="' + n.name + '">' + icon(n.icon) + '<span>' + escapeHtml(t(n.key)) + '</span></button>';
  }).join('');
  return '<nav class="sidenav" aria-label="' + escapeHtml(t('nav.primaryAria')) + '">' +
    '<div class="sidenav-brand"><span class="mark">HN</span><strong>' + escapeHtml(t('brand.name')) + '</strong></div>' +
    '<button type="button" class="btn btn-primary btn-block sidenav-add" data-nav="add-expense">' + icon('plus', '', 20) + ' ' + escapeHtml(t('nav.addExpense')) + '</button>' +
    links +
    '<div class="sidenav-spacer"></div>' +
    '<div class="sidenav-foot">' +
      '<button type="button" class="sidenav-link" data-nav="help">' + icon('help') + '<span>' + escapeHtml(t('menu.helpPrivacy')) + '</span></button>' +
      '<button type="button" class="sidenav-link" data-action="logout">' + icon('logout') + '<span>' + escapeHtml(t('menu.logout')) + '</span></button>' +
    '</div>' +
  '</nav>';
}
function renderBottomNav(activeName) {
  var items = NAV_ITEMS.map(function (n) {
    if (n.isAdd) {
      return '<button type="button" class="nav-item fab-add" data-nav="' + n.name + '" aria-label="' + escapeHtml(t('nav.addExpense')) + '">' +
        '<span class="nav-add-fill">' + icon(n.icon) + '<span>' + escapeHtml(t('nav.add')) + '</span></span>' +
      '</button>';
    }
    return '<button type="button" class="nav-item' + (n.name === activeName ? ' is-active' : '') + '" data-nav="' + n.name + '" aria-current="' + (n.name === activeName ? 'page' : 'false') + '">' + icon(n.icon) + '<span>' + escapeHtml(t(n.key)) + '</span></button>';
  });
  return '<nav class="bottom-nav" aria-label="' + escapeHtml(t('nav.primaryAria')) + '">' +
    items[0] + items[1] + items[2] + items[3] + items[4] +
  '</nav>';
}
function renderTopbar(opts) {
  opts = opts || {};
  var m = currentMember();
  if (opts.backTo || opts.title) {
    return '<header class="topbar is-elevated">' +
      (opts.backTo ? '<button type="button" class="icon-btn" data-back="1" aria-label="' + escapeHtml(t('back')) + '">' + icon('back') + '</button>' : '<span style="width:48px"></span>') +
      '<h1 class="title" style="flex:1">' + escapeHtml(opts.title || '') + '</h1>' +
      (opts.corner || '<span style="width:48px"></span>') +
    '</header>';
  }
  var hour = new Date().getHours();
  var greet = t(hour < 12 ? 'greet.morning' : hour < 17 ? 'greet.afternoon' : 'greet.evening');
  var currentMonthLabel = monthLabel(currentMonthKey());
  var dateHtml = '<span class="header-date">' + escapeHtml(currentMonthLabel) + '</span>';
  return '<header class="topbar">' +
    '<button type="button" class="icon-btn hide-desktop" data-action="open-drawer" aria-label="' + escapeHtml(t('menu.open')) + '">' + icon('menu') + '</button>' +
    '<div class="header-greeting" style="flex:1">' +
      '<strong>' + escapeHtml(greet) + '</strong>' +
      '<span class="hh-name">' + dateHtml + '</span>' +
    '</div>' +
    '<button type="button" class="icon-btn" data-action="open-drawer-avatar" aria-label="' + escapeHtml(t('menu.avatarAria')) + '" style="position:relative">' +
      '<span class="avatar" aria-hidden="true">' + escapeHtml(m ? m.initials : '') + '</span>' +
    '</button>' +
  '</header>';
}
function readOnlyBanner() {
  if (!isReadOnly) return '';
  return '<div class="banner info readonly-banner">' + icon('info') + '<span>' + escapeHtml(t('readOnlyBanner')) + '</span></div>';
}

function renderShell(activeName, contentHtml, topbarOpts, wide) {
  var topPad = topbarOpts && topbarOpts.topPad;
  return (
    '<div class="app-shell">' +
      renderSideNav(activeName) +
      '<div class="main-col">' +
        renderTopbar(topbarOpts) +
        readOnlyBanner() +
        '<main class="page-wrap' + (wide ? ' wide' : '') + (topPad ? ' page-wrap-top-pad' : '') + '" id="page-main">' + contentHtml + '</main>' +
      '</div>' +
    '</div>' +
    renderBottomNav(activeName)
  );
}

function bindShellEvents(root) {
  root.querySelectorAll('[data-nav]').forEach(function (b) {
    b.addEventListener('click', function () { navigate(b.getAttribute('data-nav')); });
  });
  var back = root.querySelector('[data-back]');
  if (back) back.addEventListener('click', function () { onScreenBack(); });
  var drawerBtn = root.querySelector('[data-action="open-drawer"]');
  if (drawerBtn) drawerBtn.addEventListener('click', openDrawer);
  var avatarBtn = root.querySelector('[data-action="open-drawer-avatar"]');
  if (avatarBtn) avatarBtn.addEventListener('click', openDrawer);
  var logoutBtn = root.querySelector('[data-action="logout"]');
  if (logoutBtn) logoutBtn.addEventListener('click', doLogout);
}
var onScreenBack = function () { navigate('home'); };

// Ends the server session (clearing the auth cookie) and clears the
// household's private data from memory — the household/members list stays
// (it's public, needed to render the login screen again) but expenses,
// target, and custom pickers are re-fetched fresh after the next login.
function doLogout() {
  apiRequest('POST', '/logout').catch(function () {});
  session.memberId = null;
  state.expenses = [];
  state.target = null;
  state.customCategories = [];
  state.customBanks = [];
  state.customWallets = [];
  saveSession();
  renderApp();
}


/* ============================================================
   ROUTER / MAIN RENDER
   ============================================================ */
function renderLoadingScreen() {
  return '<div class="main-col"><main class="page-wrap" style="padding-top:30vh; align-items:center; text-align:center;">' +
    '<p class="muted body-lg">' + escapeHtml(t('boot.loading')) + '</p>' +
  '</main></div>';
}
function renderNotFoundScreen() {
  return '<div class="main-col"><main class="page-wrap" style="padding-top:20vh; align-items:center; text-align:center; gap:16px;">' +
    '<h1 class="display-md">' + escapeHtml(t('notFound.title')) + '</h1>' +
    '<p class="muted body-lg">' + escapeHtml(t('notFound.body')) + '</p>' +
    '<a class="btn btn-primary" href="/">' + escapeHtml(t('notFound.startNew')) + '</a>' +
  '</main></div>';
}

// 'loading' until the initial fetch (see bootstrap() at the bottom of this
// file) resolves; 'not-found' if HOUSEHOLD_ID doesn't match a real
// household; 'ready' once state.household (or its absence, at the bare "/"
// URL) reflects the server's answer.
var bootState = HOUSEHOLD_ID ? 'loading' : 'ready';

function renderApp() {
  closeDialog();
  closeDrawer();
  var root = document.getElementById('app');
  if (bootState === 'loading') {
    root.innerHTML = renderLoadingScreen();
    return;
  }
  if (bootState === 'not-found') {
    root.innerHTML = renderNotFoundScreen();
    return;
  }
  if (!state.household) {
    root.innerHTML = renderSetupScreen();
    bindSetupScreen(root);
    return;
  }
  var member = currentMember();
  if (!member) {
    root.innerHTML = renderLoginScreen();
    bindLoginScreen(root);
    return;
  }
  var route = session.route || { name: 'home', params: {} };
  switch (route.name) {
    case 'add-expense': renderExpenseFormScreen(root, null); return;
    case 'edit-expense': renderExpenseFormScreen(root, route.params.id); return;
    case 'all-expenses': renderAllExpensesScreen(root); return;
    case 'expense-detail': renderExpenseDetailScreen(root, route.params.id); return;
    case 'set-target': renderSetTargetScreen(root); return;
    case 'household': renderHouseholdScreen(root); return;
    case 'settings': renderSettingsScreen(root); return;
    case 'invite': renderInviteScreen(root); return;
    case 'help': renderHelpScreen(root); return;
    case 'home':
    default: renderHomeScreen(root); return;
  }
}

/* ============================================================
   ONBOARDING — SETUP (first household + owner)
   ============================================================ */
function renderSetupScreen() {
  return '<div class="page-wrap" style="max-width:480px; padding-top:16px;">' +
    '<div class="stack-lg">' +
      '<div class="stack" style="align-items:center; text-align:center; padding-top:24px;">' +
        '<span class="avatar" style="width:64px;height:64px;font-size:1.5rem;" aria-hidden="true">HN</span>' +
        '<h1 class="display-md" style="margin-top:8px;">' + escapeHtml(t('setup.welcomeTitle')) + '</h1>' +
        '<p class="muted body-lg">' + escapeHtml(t('setup.welcomeSub')) + '</p>' +
      '</div>' +
      '<form id="setup-form" class="card stack-lg" novalidate>' +
        '<div class="field">' +
          '<label class="field-label" for="hh-name">' + escapeHtml(t('setup.householdNameLabel')) + '</label>' +
          '<input class="text-input" id="hh-name" name="hhName" type="text" placeholder="' + escapeHtml(t('setup.householdNamePlaceholder')) + '" autocomplete="off" />' +
          '<span class="field-help">' + escapeHtml(t('setup.householdNameHelp')) + '</span>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field-label" for="owner-name">' + escapeHtml(t('setup.yourNameLabel')) + '</label>' +
          '<input class="text-input" id="owner-name" name="ownerName" type="text" placeholder="' + escapeHtml(t('setup.yourNamePlaceholder')) + '" autocomplete="off" />' +
        '</div>' +
        '<div class="field">' +
          '<label class="field-label" for="owner-pin">' + escapeHtml(t('setup.passcodeLabel')) + '</label>' +
          '<div class="row">' +
            '<input class="text-input" id="owner-pin" name="ownerPin" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="' + escapeHtml(t('setup.passcodePlaceholder')) + '" autocomplete="off" />' +
            '<button type="button" class="icon-btn" data-action="toggle-pin" aria-label="' + escapeHtml(t('setup.showPasscode')) + '" aria-pressed="false">' + icon('eye') + '</button>' +
          '</div>' +
          '<span class="field-help">' + escapeHtml(t('setup.passcodeHelp')) + '</span>' +
        '</div>' +
        '<div class="readonly-row"><span>' + icon('info') + '</span><span>' + t('setup.currencyNote') + '</span></div>' +
        '<div id="setup-error" aria-live="polite"></div>' +
        '<button type="submit" class="btn btn-primary btn-block">' + escapeHtml(t('setup.createHousehold')) + '</button>' +
      '</form>' +
      '<p class="muted" style="text-align:center;">' + escapeHtml(t('setup.alreadyHave')) + '</p>' +
    '</div>' +
  '</div>';
}
function bindSetupScreen(root) {
  var form = root.querySelector('#setup-form');
  var pinInput = root.querySelector('#owner-pin');
  root.querySelector('[data-action="toggle-pin"]').addEventListener('click', function (e) {
    var btn = e.currentTarget;
    var showing = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!showing));
    btn.setAttribute('aria-label', showing ? t('setup.showPasscode') : t('setup.hidePasscode'));
    btn.innerHTML = icon(showing ? 'eye' : 'eyeOff');
    pinInput.type = showing ? 'password' : 'text';
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var hhName = form.hhName.value.trim();
    var ownerName = form.ownerName.value.trim();
    var pin = form.ownerPin.value.trim();
    var errBox = root.querySelector('#setup-error');
    errBox.innerHTML = '';
    var firstInvalid = null;
    function flagError(input, msg) {
      input.classList.add('has-error');
      // Insert after the input's wrapping .row (if any) rather than right after the
      // input itself, so the message always lands on its own line under the whole
      // field (including any icon button beside the input) instead of beside it.
      var anchor = input.closest('.row') || input;
      anchor.insertAdjacentHTML('afterend', '<span class="field-error" data-error-for="' + input.id + '">' + icon('warning') + '<span>' + msg + '</span></span>');
      if (!firstInvalid) firstInvalid = input;
    }
    root.querySelectorAll('.has-error').forEach(function (i) { i.classList.remove('has-error'); });
    root.querySelectorAll('.field-error').forEach(function (i) { i.remove(); });
    if (!hhName) flagError(form.hhName, t('setup.err.hhName'));
    if (!ownerName) flagError(form.ownerName, t('setup.err.ownerName'));
    if (!pin || !/^\d{4,6}$/.test(pin)) flagError(form.ownerPin, t('setup.err.pin'));
    if (firstInvalid) { firstInvalid.focus(); return; }

    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = t('setup.creating');
    // No household exists yet at this point (this is the very first save),
    // so there's no HOUSEHOLD_ID to scope a request to — call the plain
    // creation endpoint directly, then hand the browser off to the new
    // household's own URL (/h/[id]), which is this household's permanent
    // address and its invite link from here on.
    fetch('/api/households', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ householdName: hhName, ownerName: ownerName, pin: pin })
    }).then(function (res) {
      if (!res.ok) throw new Error('create failed');
      return res.json();
    }).then(function (data) {
      window.location.href = '/h/' + data.household.id;
    }).catch(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = t('setup.createHousehold');
      errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('setup.err.createFailed')) + '</span></span>';
    });
  });
}

/* ============================================================
   LOGIN — member picker + PIN
   ============================================================ */
function renderLoginScreen() {
  var members = state.members;
  return '<div class="page-wrap" style="max-width:480px; padding-top:16px;">' +
    '<div class="stack-lg">' +
      '<div class="stack" style="align-items:center; text-align:center; padding-top:24px;">' +
        '<span class="avatar" style="width:64px;height:64px;font-size:1.5rem;" aria-hidden="true">HN</span>' +
        '<h1 class="display-md">' + escapeHtml(state.household.name) + '</h1>' +
        '<p class="muted body-lg">' + escapeHtml(t('login.whoAdding')) + '</p>' +
      '</div>' +
      '<div class="card stack" id="member-list">' +
        members.map(function (m, i) {
          return '<button type="button" class="choice-btn choice-btn-wide" style="width:100%" data-member="' + m.id + '">' +
            '<span class="avatar" aria-hidden="true">' + escapeHtml(m.initials) + '</span>' +
            '<span class="stack" style="gap:2px; align-items:flex-start;"><strong>' + escapeHtml(m.name) + '</strong><span class="faint" style="font-weight:600;">' + escapeHtml(t(m.role === 'owner' ? 'role.owner' : 'role.member')) + '</span></span>' +
          '</button>' + (i < members.length - 1 ? '<hr class="divider" />' : '');
        }).join('') +
      '</div>' +
      '<div id="pin-panel"></div>' +
    '</div>' +
  '</div>';
}
function bindLoginScreen(root) {
  root.querySelectorAll('[data-member]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-member');
      var member = state.members.find(function (m) { return m.id === id; });
      var panel = root.querySelector('#pin-panel');
      panel.innerHTML =
        '<form id="pin-form" class="card stack" novalidate>' +
          '<label class="field-label" for="pin-input">' + escapeHtml(t('login.passcodeFor', { name: member.name })) + '</label>' +
          '<div class="row">' +
            '<input class="text-input" id="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" autocomplete="off" />' +
            '<button type="button" class="icon-btn" data-action="toggle-pin" aria-label="' + escapeHtml(t('setup.showPasscode')) + '" aria-pressed="false">' + icon('eye') + '</button>' +
          '</div>' +
          '<div id="pin-error" aria-live="polite"></div>' +
          '<button type="submit" class="btn btn-primary btn-block">' + escapeHtml(t('login.logIn')) + '</button>' +
          '<button type="button" class="link-btn" data-action="forgot">' + escapeHtml(t('login.forgot')) + '</button>' +
        '</form>';
      panel.querySelector('#pin-input').focus();
      panel.querySelector('[data-action="toggle-pin"]').addEventListener('click', function (e) {
        var b = e.currentTarget;
        var showing = b.getAttribute('aria-pressed') === 'true';
        b.setAttribute('aria-pressed', String(!showing));
        b.innerHTML = icon(showing ? 'eye' : 'eyeOff');
        panel.querySelector('#pin-input').type = showing ? 'password' : 'text';
      });
      panel.querySelector('[data-action="forgot"]').addEventListener('click', function () {
        openDialog({
          title: t('login.forgot'),
          message: t('login.forgotMessage', { owner: (state.members.find(function (m) { return m.role === 'owner'; }) || {}).name }),
          confirmLabel: t('login.gotIt'),
          cancelLabel: t('close'),
          onConfirm: closeDialog
        });
      });
      panel.querySelector('#pin-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var val = panel.querySelector('#pin-input').value.trim();
        var errBox = panel.querySelector('#pin-error');
        var input = panel.querySelector('#pin-input');
        var submitBtn = panel.querySelector('#pin-form button[type="submit"]');
        errBox.innerHTML = '';
        input.classList.remove('has-error');
        // The PIN is never sent to the client (see PublicMember), so it can
        // only be checked by the server, which also starts the session
        // cookie on success.
        submitBtn.disabled = true;
        apiRequest('POST', '/login', { memberId: member.id, pin: val }).then(function () {
          session.memberId = member.id;
          saveSession();
          return loadHouseholdData();
        }).then(function () {
          navigate('home');
          showToast(t('toast.welcomeBack', { name: member.name.split(' ')[0] }));
        }).catch(function () {
          submitBtn.disabled = false;
          input.classList.add('has-error');
          errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('login.wrongPasscode')) + '</span></span>';
          input.focus();
        });
      });
    });
  });
}


/* ============================================================
   HOME SCREEN
   ============================================================ */
var homeUi = { period: 'weekly', weekMonthKey: currentMonthKey(), weekIndex: weekIndexForDate(todayISO()), monthYear: new Date().getFullYear(), monthIndex: new Date().getMonth(), year: new Date().getFullYear() };

function renderTargetCard() {
  var mk = currentMonthKey();
  var spent = monthTotalSpent(mk);
  if (!state.target || state.target.month !== mk) {
    return '<div class="card target-card">' +
      '<h2 class="title">' + icon('target', 'faint') + ' ' + escapeHtml(t('target.setTitle')) + '</h2>' +
      '<p class="muted body-lg">' + escapeHtml(t('target.setDesc')) + '</p>' +
      '<button type="button" class="btn btn-primary" data-nav="set-target">' + escapeHtml(t('target.setBtn')) + '</button>' +
    '</div>';
  }
  var amount = state.target.amount;
  var pct = amount > 0 ? (spent / amount) * 100 : 0;
  var status = targetStatus(pct);
  var remaining = amount - spent;
  return '<div class="card target-card">' +
    '<div class="target-head">' +
      '<h2 class="title">' + escapeHtml(t('target.title')) + '</h2>' +
      '<button type="button" class="link-btn" data-nav="set-target" style="padding:4px;">' + escapeHtml(t('target.editBtn')) + '</button>' +
    '</div>' +
    '<div class="status-pill ' + status.key + '">' + icon(status.key === 'ok' ? 'checkCircle' : 'warning', '', 15) + escapeHtml(status.label) + '</div>' +
    '<p class="body-lg">' + t('target.spentOf', { spent: '<strong class="tabular">' + fmtMMK(spent) + '</strong>', amount: '<strong class="tabular">' + fmtMMK(amount) + '</strong>' }) + '</p>' +
    '<div class="progress-track" role="progressbar" aria-valuenow="' + Math.round(clamp(pct,0,100)) + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + escapeHtml(t('target.title')) + '">' +
      '<div class="progress-fill" style="width:' + clamp(pct, 0, 100) + '%; background:var(--' + status.key + ');"></div>' +
    '</div>' +
    '<div class="target-grid">' +
      '<div class="target-stat"><div class="muted caption">' + escapeHtml(t('target.remaining')) + '</div><div class="val tabular">' + (remaining >= 0 ? fmtMMK(remaining) : t('target.overBy', { amount: fmtMMK(Math.abs(remaining)) })) + '</div></div>' +
      '<div class="target-stat"><div class="muted caption">' + escapeHtml(t('target.percentUsed')) + '</div><div class="val tabular">' + Math.round(pct) + '%</div></div>' +
      '<div class="target-stat"><div class="muted caption">' + escapeHtml(t('target.month')) + '</div><div class="val">' + escapeHtml(monthLabel(mk)) + '</div></div>' +
      '<div class="target-stat"><div class="muted caption">' + escapeHtml(t('target.monthlyTarget')) + '</div><div class="val tabular">' + fmtMMK(amount) + '</div></div>' +
    '</div>' +
  '</div>';
}

function renderSummarySection() {
  var isWeekly = homeUi.period === 'weekly';
  var isMonthly = homeUi.period === 'monthly';
  var isYearly = homeUi.period === 'yearly';
  var range, prevRange, weekOfLabel;
  if (isWeekly) {
    var weeks = getMonthWeeks(homeUi.weekMonthKey);
    range = weeks[homeUi.weekIndex];
    if (homeUi.weekIndex > 0) {
      prevRange = weeks[homeUi.weekIndex - 1];
    } else {
      prevRange = getMonthWeeks(adjacentMonthKey(homeUi.weekMonthKey, -1))[3];
    }
    weekOfLabel = monthLabel(homeUi.weekMonthKey);
  } else if (isMonthly) {
    var monthRef = new Date(homeUi.monthYear, homeUi.monthIndex, 1);
    range = periodRange('monthly', monthRef);
    prevRange = previousPeriodRange('monthly', monthRef);
  } else if (isYearly) {
    var yearRef = new Date(homeUi.year, 0, 1);
    range = periodRange('yearly', yearRef);
    prevRange = previousPeriodRange('yearly', yearRef);
  } else {
    range = periodRange(homeUi.period);
    prevRange = previousPeriodRange(homeUi.period);
  }
  var cur = summarize(expensesInRange(range));
  var prev = summarize(expensesInRange(prevRange));
  var diff = cur.total - prev.total;
  var diffLabel = prev.total > 0
    ? (diff === 0 ? t('summary.sameAsLast', { period: periodNoun(homeUi.period) }) : (diff > 0 ? t('summary.moreThanLast', { amount: fmtMMK(Math.abs(diff)), period: periodNoun(homeUi.period) }) : t('summary.lessThanLast', { amount: fmtMMK(Math.abs(diff)), period: periodNoun(homeUi.period) })))
    : t('summary.noSpendingPrev', { period: periodNoun(homeUi.period) });
  var catRows = cur.byCategory.slice(0, 6).map(function (row) {
    var cat = findCategory(row.categoryId);
    return '<div class="cat-row">' +
      '<span class="cat-icon" style="background:var(--brand-tint); color:var(--brand-strong);">' + icon(cat.icon, '', 20) + '</span>' +
      '<div class="cat-row-main">' +
        '<div class="cat-row-top"><span>' + escapeHtml(catLabel(cat)) + '</span><span class="tabular">' + fmtMMK(row.total) + '</span></div>' +
        '<div class="cat-bar-track"><div class="cat-bar-fill" style="width:' + row.pct + '%"></div></div>' +
        '<span class="cat-pct">' + escapeHtml(t('summary.pctOfTotal', { pct: Math.round(row.pct) })) + '</span>' +
      '</div>' +
    '</div>';
  }).join('');
  var headerHtml = isWeekly
    ? ('<div class="row-between week-nav">' +
        '<button type="button" class="icon-btn" id="week-prev" aria-label="' + escapeHtml(t('summary.prevWeek')) + '"' + (homeUi.weekIndex === 0 ? ' disabled aria-disabled="true"' : '') + '>' + icon('back') + '</button>' +
        '<div class="stack" style="align-items:center; gap:1px; text-align:center;">' +
          '<strong class="body-lg">' + escapeHtml(t('summary.week', { n: homeUi.weekIndex + 1 })) + '</strong>' +
          '<span class="muted caption">' + fmtDateHumanShort(range.start) + ' – ' + fmtDateHumanShort(range.end) + ', ' + escapeHtml(weekOfLabel) + '</span>' +
        '</div>' +
        '<button type="button" class="icon-btn" id="week-next" aria-label="' + escapeHtml(t('summary.nextWeek')) + '"' + (homeUi.weekIndex === 3 ? ' disabled aria-disabled="true"' : '') + '>' + icon('chevronRight') + '</button>' +
      '</div>')
    : isMonthly
    ? ('<div class="row-between week-nav">' +
        '<button type="button" class="icon-btn" id="month-prev" aria-label="' + escapeHtml(t('summary.prevMonth')) + '"' + (homeUi.monthIndex === 0 ? ' disabled aria-disabled="true"' : '') + '>' + icon('back') + '</button>' +
        '<div class="stack" style="align-items:center; gap:1px; text-align:center;">' +
          '<strong class="body-lg">' + escapeHtml(periodLabel('monthly', range)) + '</strong>' +
        '</div>' +
        '<button type="button" class="icon-btn" id="month-next" aria-label="' + escapeHtml(t('summary.nextMonth')) + '"' + (homeUi.monthIndex === 11 ? ' disabled aria-disabled="true"' : '') + '>' + icon('chevronRight') + '</button>' +
      '</div>')
    : isYearly
    ? ('<div class="row-between week-nav">' +
        '<button type="button" class="icon-btn" id="year-prev" aria-label="' + escapeHtml(t('summary.prevYear')) + '">' + icon('back') + '</button>' +
        '<div class="stack" style="align-items:center; gap:1px; text-align:center;">' +
          '<strong class="body-lg">' + escapeHtml(String(homeUi.year)) + '</strong>' +
        '</div>' +
        '<button type="button" class="icon-btn" id="year-next" aria-label="' + escapeHtml(t('summary.nextYear')) + '"' + (homeUi.year >= new Date().getFullYear() ? ' disabled aria-disabled="true"' : '') + '>' + icon('chevronRight') + '</button>' +
      '</div>')
    : ('<div class="row-between"><span class="muted">' + escapeHtml(periodLabel(homeUi.period, range)) + '</span><span class="badge">' + escapeHtml(expenseCountLabel(cur.count)) + '</span></div>');
  var weekBoxesHtml = '';
  if (isMonthly) {
    var monthKeyForWeeks = homeUi.monthYear + '-' + pad2(homeUi.monthIndex + 1);
    var monthWeeks = getMonthWeeks(monthKeyForWeeks);
    weekBoxesHtml =
      '<hr class="divider" />' +
      '<h3 class="subheading">' + escapeHtml(t('summary.weeklyBreakdown')) + '</h3>' +
      '<div class="week-box-grid">' +
        monthWeeks.map(function (w, idx) {
          var wTotal = summarize(expensesInRange(w)).total;
          return '<div class="week-box">' +
            '<span class="muted caption">' + escapeHtml(t('summary.week', { n: idx + 1 })) + '</span>' +
            '<span class="week-box-amount tabular">' + fmtMMK(wTotal) + '</span>' +
            '<button type="button" class="link-btn week-box-link" data-week-detail="' + idx + '" data-week-month="' + monthKeyForWeeks + '">' + escapeHtml(t('summary.seeDetails')) + '</button>' +
          '</div>';
        }).join('') +
      '</div>';
  }
  var yearlyBarsHtml = '';
  if (isYearly) {
    var monthlyTotals = [];
    var maxMonthTotal = 0;
    for (var mi = 0; mi < 12; mi++) {
      var mKey = homeUi.year + '-' + pad2(mi + 1);
      var mTotal = monthTotalSpent(mKey);
      monthlyTotals.push(mTotal);
      if (mTotal > maxMonthTotal) maxMonthTotal = mTotal;
    }
    yearlyBarsHtml =
      '<hr class="divider" />' +
      '<h3 class="subheading">' + escapeHtml(t('summary.monthlyBreakdown')) + '</h3>' +
      '<div class="month-bar-list">' +
        monthlyTotals.map(function (total, idx) {
          var pct = maxMonthTotal > 0 ? (total / maxMonthTotal * 100) : 0;
          return '<div class="month-bar-row">' +
            '<span class="month-bar-label">' + escapeHtml(monthShortLabel(idx)) + '</span>' +
            '<div class="month-bar-track"><div class="month-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<span class="month-bar-amount tabular">' + fmtMMK(total) + '</span>' +
          '</div>';
        }).join('') +
      '</div>';
  }
  return (
    '<div class="row-between">' +
      '<h2 class="title">' + escapeHtml(t('summary.title')) + '</h2>' +
    '</div>' +
    '<div class="segmented" role="tablist" aria-label="' + escapeHtml(t('summary.periodAria')) + '">' +
      ['weekly', 'monthly', 'yearly'].map(function (p) {
        return '<button type="button" role="tab" id="tab-' + p + '" aria-selected="' + (homeUi.period === p ? 'true' : 'false') + '" data-period="' + p + '">' + escapeHtml(t('summary.tab.' + p)) + '</button>';
      }).join('') +
    '</div>' +
    '<div class="card stack">' +
      headerHtml +
      ((isWeekly || isMonthly || isYearly) ? '<div class="row-between"><span class="badge">' + escapeHtml(expenseCountLabel(cur.count)) + '</span></div>' : '') +
      '<div class="display-md tabular">' + fmtMMK(cur.total) + '</div>' +
      '<div class="muted caption">' + escapeHtml(diffLabel) + '</div>' +
      (cur.byCategory.length ? ('<hr class="divider" />' + '<h3 class="subheading">' + escapeHtml(t('summary.whereItWent')) + '</h3>' + catRows) :
        '<p class="muted" style="padding:8px 0;">' + escapeHtml(t('summary.noneYet')) + '</p>') +
      weekBoxesHtml +
      yearlyBarsHtml +
    '</div>'
  );
}
function periodNoun(p) { return p === 'weekly' ? t('period.week') : p === 'yearly' ? t('period.year') : t('period.month'); }

function renderRecentExpenseRow(e) {
  var cat = findCategory(e.categoryId);
  var pay = PAY_BY_ID[e.paymentMethod];
  var member = state.members.find(function (m) { return m.id === e.memberId; });
  return '<button type="button" class="expense-row" data-expense="' + e.id + '">' +
    '<span class="cat-icon" style="background:var(--surface-2);">' + icon(cat.icon, '', 20) + '</span>' +
    '<span class="expense-main">' +
      '<div class="expense-title">' + escapeHtml(e.detail || catLabel(cat)) + '</div>' +
      '<div class="expense-meta">' + escapeHtml(catLabel(cat)) + ' · ' + escapeHtml(fmtDateHuman(e.date)) + ' · ' + escapeHtml(payLabel(pay)) + ' · ' + escapeHtml(t('row.addedBy', { name: member ? member.name.split(' ')[0] : t('row.someone') })) + '</div>' +
    '</span>' +
    '<span class="expense-amount tabular">' + fmtMMK(e.amount) + '</span>' +
  '</button>';
}

function renderHomeScreen(root) {
  var hasAny = state.expenses.length > 0;
  var recent = recentExpenses(5);
  var body =
    renderTargetCard() +
    (hasAny
      ? ('<div class="stack" id="summary-section">' + renderSummarySection() + '</div>' +
         '<div class="stack">' +
           '<div class="row-between"><h2 class="title">' + escapeHtml(t('home.recentExpenses')) + '</h2><button type="button" class="link-btn" data-nav="all-expenses" style="padding:4px;">' + escapeHtml(t('home.viewAllExpenses')) + '</button></div>' +
           '<div class="card" style="padding:6px 12px;">' + recent.map(renderRecentExpenseRow).join('') + '</div>' +
         '</div>')
      : ('<div class="card empty-state">' +
          '<span class="icon-wrap">' + icon('receipt', '', 30) + '</span>' +
          '<h2 class="title">' + escapeHtml(t('home.noneTitle')) + '</h2>' +
          '<p>' + escapeHtml(t('home.noneDesc')) + '</p>' +
          '<button type="button" class="btn btn-primary" data-nav="add-expense" style="margin-top:8px;">' + escapeHtml(t('home.addFirstExpense')) + '</button>' +
        '</div>')
    );
  root.innerHTML = renderShell('home', body, { topPad: true }, true);
  bindShellEvents(root);
  root.querySelectorAll('[data-nav]').forEach(function (b) {
    if (!b.hasAttribute('data-bound')) { b.setAttribute('data-bound', '1'); }
  });
  root.querySelectorAll('[data-expense]').forEach(function (b) {
    b.addEventListener('click', function () { navigate('expense-detail', { id: b.getAttribute('data-expense') }); });
  });
  if (hasAny) bindSummarySection(root);
}
function bindSummarySection(root) {
  var section = root.querySelector('#summary-section');
  section.querySelectorAll('[data-period]').forEach(function (b) {
    b.addEventListener('click', function () {
      homeUi.period = b.getAttribute('data-period');
      section.innerHTML = renderSummarySection();
      bindSummarySection(root);
      section.querySelector('#tab-' + homeUi.period).focus();
    });
  });
  var prevBtn = section.querySelector('#week-prev');
  var nextBtn = section.querySelector('#week-next');
  if (prevBtn) prevBtn.addEventListener('click', function () {
    if (homeUi.weekIndex === 0) return;
    homeUi.weekIndex -= 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#week-prev:not([disabled])') || section.querySelector('#week-next');
    if (focusTarget) focusTarget.focus();
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    if (homeUi.weekIndex === 3) return;
    homeUi.weekIndex += 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#week-next:not([disabled])') || section.querySelector('#week-prev');
    if (focusTarget) focusTarget.focus();
  });
  var monthPrevBtn = section.querySelector('#month-prev');
  var monthNextBtn = section.querySelector('#month-next');
  if (monthPrevBtn) monthPrevBtn.addEventListener('click', function () {
    if (homeUi.monthIndex === 0) return;
    homeUi.monthIndex -= 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#month-prev:not([disabled])') || section.querySelector('#month-next');
    if (focusTarget) focusTarget.focus();
  });
  if (monthNextBtn) monthNextBtn.addEventListener('click', function () {
    if (homeUi.monthIndex === 11) return;
    homeUi.monthIndex += 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#month-next:not([disabled])') || section.querySelector('#month-prev');
    if (focusTarget) focusTarget.focus();
  });
  section.querySelectorAll('[data-week-detail]').forEach(function (b) {
    b.addEventListener('click', function () {
      openWeekDetailsDialog(parseInt(b.getAttribute('data-week-detail'), 10), b.getAttribute('data-week-month'));
    });
  });
  var yearPrevBtn = section.querySelector('#year-prev');
  var yearNextBtn = section.querySelector('#year-next');
  if (yearPrevBtn) yearPrevBtn.addEventListener('click', function () {
    homeUi.year -= 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#year-prev') || section.querySelector('#year-next');
    if (focusTarget) focusTarget.focus();
  });
  if (yearNextBtn) yearNextBtn.addEventListener('click', function () {
    if (homeUi.year >= new Date().getFullYear()) return;
    homeUi.year += 1;
    section.innerHTML = renderSummarySection();
    bindSummarySection(root);
    var focusTarget = section.querySelector('#year-next:not([disabled])') || section.querySelector('#year-prev');
    if (focusTarget) focusTarget.focus();
  });
}

function openWeekDetailsDialog(weekIndex, monthKey) {
  closeDialog();
  var week = getMonthWeeks(monthKey)[weekIndex];
  var items = expensesInRange(week).slice().sort(function (a, b) {
    return (b.date + b.createdAt) < (a.date + a.createdAt) ? -1 : 1;
  });
  var total = summarize(items).total;
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.innerHTML =
    '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="week-dlg-title">' +
      '<div class="row-between">' +
        '<h2 class="title" id="week-dlg-title">' + escapeHtml(t('summary.week', { n: weekIndex + 1 })) + '</h2>' +
        '<button type="button" class="icon-btn" id="week-dlg-close" aria-label="' + escapeHtml(t('close')) + '">' + icon('close') + '</button>' +
      '</div>' +
      '<div class="stack" style="gap:2px;">' +
        '<span class="muted caption">' + escapeHtml(fmtDateHumanShort(week.start) + ' – ' + fmtDateHumanShort(week.end)) + '</span>' +
        '<span class="display-md tabular">' + fmtMMK(total) + '</span>' +
      '</div>' +
      '<hr class="divider" />' +
      (items.length
        ? '<div class="stack" style="gap:0;">' + items.map(renderRecentExpenseRow).join('') + '</div>'
        : '<p class="muted" style="padding:8px 0;">' + escapeHtml(t('summary.noneYet')) + '</p>') +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDialog(); });
  back.querySelector('#week-dlg-close').addEventListener('click', closeDialog);
  back.querySelectorAll('[data-expense]').forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-expense');
      closeDialog();
      navigate('expense-detail', { id: id });
    });
  });
  document.addEventListener('keydown', dialogKeyHandler);
  back.querySelector('#week-dlg-close').focus();
}


/* ============================================================
   ADD / EDIT EXPENSE
   ============================================================ */
var expenseForm = null; // transient per-visit form state

function focusedHeader(title) {
  return '<header class="topbar is-elevated">' +
    '<button type="button" class="icon-btn" data-action="form-back" aria-label="' + escapeHtml(t('back')) + '">' + icon('back') + '<span class="visually-hidden">' + escapeHtml(t('back')) + '</span></button>' +
    '<h1 class="title" style="flex:1;">' + escapeHtml(title) + '</h1>' +
    '<span style="width:48px"></span>' +
  '</header>';
}

function renderCategoryPicker(selectedId, showAll) {
  var all = formCategories();
  var common = all.slice(0, 6);
  var rest = all.slice(6);
  function btnHtml(c) {
    return '<button type="button" class="choice-btn" aria-pressed="' + (selectedId === c.id ? 'true' : 'false') + '" data-category="' + c.id + '">' +
      '<span class="cat-icon">' + icon(c.icon) + '</span><span>' + escapeHtml(catLabel(c)) + '</span>' +
    '</button>';
  }
  var createTileHtml = '<button type="button" class="choice-btn" data-action="create-category">' +
      '<span class="cat-icon">' + icon('plus') + '</span><span>' + escapeHtml(t('expense.createCategory')) + '</span>' +
    '</button>';
  return '<div class="field">' +
    '<span class="field-label" id="category-label">' + escapeHtml(t('expense.categoryLabel')) + '</span>' +
    '<div class="choice-grid" role="group" aria-labelledby="category-label" id="category-grid">' +
      common.map(btnHtml).join('') +
      (showAll ? rest.map(btnHtml).join('') : '') +
      createTileHtml +
    '</div>' +
    (!showAll && rest.length ? '<button type="button" class="link-btn" data-action="show-all-categories" style="align-self:flex-start;">' + escapeHtml(t('expense.viewAllCategories')) + '</button>' : '') +
    '<div id="category-error"></div>' +
  '</div>';
}

function openCreateCategoryDialog(onCreated) {
  closeDialog();
  var selectedIcon = 'tag';
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.setAttribute('role', 'presentation');
  var iconGridHtml = ICON_CHOICES.map(function (ic) {
    return '<button type="button" class="choice-btn icon-choice-btn" aria-pressed="' + (ic.id === selectedIcon ? 'true' : 'false') + '" data-icon="' + ic.id + '" aria-label="' + escapeHtml(iconChoiceLabel(ic)) + '" title="' + escapeHtml(iconChoiceLabel(ic)) + '">' + icon(ic.id, '', 22) + '</button>';
  }).join('');
  back.innerHTML =
    '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="create-cat-title">' +
      '<h2 class="title" id="create-cat-title">' + escapeHtml(t('createCat.title')) + '</h2>' +
      '<p class="muted body-lg">' + escapeHtml(t('createCat.subtitle')) + '</p>' +
      '<div class="field">' +
        '<label class="field-label" for="new-category-input">' + escapeHtml(t('createCat.nameLabel')) + '</label>' +
        '<input class="text-input" id="new-category-input" type="text" maxlength="30" placeholder="' + escapeHtml(t('createCat.namePlaceholder')) + '" />' +
        '<div id="new-category-error"></div>' +
      '</div>' +
      '<div class="field">' +
        '<span class="field-label" id="new-category-icon-label">' + escapeHtml(t('createCat.chooseIcon')) + '</span>' +
        '<div class="choice-grid icon-choice-grid" role="group" aria-labelledby="new-category-icon-label" id="new-category-icon-grid">' + iconGridHtml + '</div>' +
      '</div>' +
      '<div class="dialog-actions">' +
        '<button type="button" class="btn btn-secondary" data-dlg="cancel">' + escapeHtml(t('cancel')) + '</button>' +
        '<button type="button" class="btn btn-primary" data-dlg="confirm">' + escapeHtml(t('createCat.create')) + '</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDialog(); });
  var input = back.querySelector('#new-category-input');
  var errBox = back.querySelector('#new-category-error');
  function setErr(msg) {
    errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + msg + '</span></span>';
    input.classList.add('has-error');
  }
  back.querySelector('[data-dlg="cancel"]').addEventListener('click', closeDialog);
  back.querySelectorAll('[data-icon]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectedIcon = btn.getAttribute('data-icon');
      back.querySelectorAll('[data-icon]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
    });
  });
  function tryCreate() {
    var label = input.value.trim();
    if (!label) { setErr(t('createCat.err.name')); input.focus(); return; }
    if (label.length > 30) { setErr(t('createCat.err.tooLong')); input.focus(); return; }
    var existing = formCategories().find(function (c) { return catLabel(c).toLowerCase() === label.toLowerCase(); });
    if (existing) { setErr(t('createCat.err.duplicate', { name: escapeHtml(catLabel(existing)) })); input.focus(); return; }
    var cat = { id: uid('cat'), label: label, icon: selectedIcon };
    pendingCustomCategories.push(cat);
    closeDialog();
    onCreated(cat);
  }
  back.querySelector('[data-dlg="confirm"]').addEventListener('click', tryCreate);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); tryCreate(); } });
  input.addEventListener('input', function () { errBox.innerHTML = ''; input.classList.remove('has-error'); });
  document.addEventListener('keydown', dialogKeyHandler);
  input.focus();
}

function renderBankPicker(selectedBankId) {
  var bankButtons = formBanks().map(function (b) {
    return '<button type="button" class="choice-btn bank-choice-btn" aria-pressed="' + (selectedBankId === b.id ? 'true' : 'false') + '" data-bank="' + b.id + '">' +
      '<span class="bank-badge" style="background:' + (b.color) + ';" aria-hidden="true">' + escapeHtml(b.initials) + '</span>' +
      '<span class="bank-name">' + escapeHtml(bankLabel(b)) + '</span>' +
    '</button>';
  }).join('');
  var addTileHtml = '<button type="button" class="choice-btn bank-choice-btn" data-action="add-bank">' +
      '<span class="bank-badge bank-badge-add" aria-hidden="true">' + icon('plus', '', 18) + '</span>' +
      '<span class="bank-name">' + escapeHtml(t('payment.addBank')) + '</span>' +
    '</button>';
  return '<div class="bank-picker">' +
    '<span class="field-label" id="bank-picker-label">' + escapeHtml(t('payment.chooseBank')) + '</span>' +
    '<div class="choice-grid bank-choice-grid" role="group" aria-labelledby="bank-picker-label">' + bankButtons + addTileHtml + '</div>' +
  '</div>';
}
function renderWalletPicker(selectedWalletId) {
  var walletButtons = formWallets().map(function (w) {
    return '<button type="button" class="choice-btn bank-choice-btn" aria-pressed="' + (selectedWalletId === w.id ? 'true' : 'false') + '" data-wallet="' + w.id + '">' +
      '<span class="bank-badge" style="background:' + (w.color) + ';" aria-hidden="true">' + escapeHtml(w.initials) + '</span>' +
      '<span class="bank-name">' + escapeHtml(walletLabel(w)) + '</span>' +
    '</button>';
  }).join('');
  var addTileHtml = '<button type="button" class="choice-btn bank-choice-btn" data-action="add-wallet">' +
      '<span class="bank-badge bank-badge-add" aria-hidden="true">' + icon('plus', '', 18) + '</span>' +
      '<span class="bank-name">' + escapeHtml(t('payment.addWallet')) + '</span>' +
    '</button>';
  return '<div class="bank-picker">' +
    '<span class="field-label" id="wallet-picker-label">' + escapeHtml(t('payment.chooseWallet')) + '</span>' +
    '<div class="choice-grid bank-choice-grid" role="group" aria-labelledby="wallet-picker-label">' + walletButtons + addTileHtml + '</div>' +
  '</div>';
}
function renderPaymentPicker(selectedId, selectedBankId, selectedWalletId) {
  return '<div class="field">' +
    '<span class="field-label" id="payment-label">' + escapeHtml(t('expense.paymentLabel')) + '</span>' +
    '<div class="stack" role="group" aria-labelledby="payment-label">' +
      PAYMENT_METHODS.map(function (p) {
        var help = payHelpText(p);
        var btnHtml = '<button type="button" class="choice-btn choice-btn-wide" aria-pressed="' + (selectedId === p.id ? 'true' : 'false') + '" data-payment="' + p.id + '">' +
          '<span class="cat-icon">' + icon(p.icon) + '</span>' +
          '<span class="stack" style="gap:2px; align-items:flex-start;"><span>' + escapeHtml(payLabel(p)) + '</span>' + (help ? '<span class="faint" style="font-size:0.78rem; font-weight:600;">' + escapeHtml(help) + '</span>' : '') + '</span>' +
        '</button>';
        if (p.id === 'bank' && selectedId === 'bank') {
          btnHtml += renderBankPicker(selectedBankId);
        }
        if (p.id === 'ewallet' && selectedId === 'ewallet') {
          btnHtml += renderWalletPicker(selectedWalletId);
        }
        return btnHtml;
      }).join('') +
    '</div>' +
    '<div id="payment-error"></div>' +
  '</div>';
}

function openAddBankDialog(onCreated) {
  closeDialog();
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.setAttribute('role', 'presentation');
  back.innerHTML =
    '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="create-bank-title">' +
      '<h2 class="title" id="create-bank-title">' + escapeHtml(t('createBank.title')) + '</h2>' +
      '<p class="muted body-lg">' + escapeHtml(t('createBank.subtitle')) + '</p>' +
      '<div class="field">' +
        '<label class="field-label" for="new-bank-input">' + escapeHtml(t('createBank.nameLabel')) + '</label>' +
        '<input class="text-input" id="new-bank-input" type="text" maxlength="30" placeholder="' + escapeHtml(t('createBank.namePlaceholder')) + '" />' +
        '<div id="new-bank-error"></div>' +
      '</div>' +
      '<div class="dialog-actions">' +
        '<button type="button" class="btn btn-secondary" data-dlg="cancel">' + escapeHtml(t('cancel')) + '</button>' +
        '<button type="button" class="btn btn-primary" data-dlg="confirm">' + escapeHtml(t('createBank.create')) + '</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDialog(); });
  var input = back.querySelector('#new-bank-input');
  var errBox = back.querySelector('#new-bank-error');
  function setErr(msg) {
    errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + msg + '</span></span>';
    input.classList.add('has-error');
  }
  back.querySelector('[data-dlg="cancel"]').addEventListener('click', closeDialog);
  function tryCreate() {
    var name = input.value.trim();
    if (!name) { setErr(t('createBank.err.name')); input.focus(); return; }
    if (name.length > 30) { setErr(t('createBank.err.tooLong')); input.focus(); return; }
    var existing = formBanks().find(function (b) { return bankLabel(b).toLowerCase() === name.toLowerCase(); });
    if (existing) { setErr(t('createBank.err.duplicate', { name: escapeHtml(bankLabel(existing)) })); input.focus(); return; }
    var bank = { id: uid('bank'), name: name, initials: initialsOf(name), color: colorForName(name) };
    pendingCustomBanks.push(bank);
    closeDialog();
    onCreated(bank);
  }
  back.querySelector('[data-dlg="confirm"]').addEventListener('click', tryCreate);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); tryCreate(); } });
  input.addEventListener('input', function () { errBox.innerHTML = ''; input.classList.remove('has-error'); });
  document.addEventListener('keydown', dialogKeyHandler);
  input.focus();
}

function openAddWalletDialog(onCreated) {
  closeDialog();
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.setAttribute('role', 'presentation');
  back.innerHTML =
    '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="create-wallet-title">' +
      '<h2 class="title" id="create-wallet-title">' + escapeHtml(t('createWallet.title')) + '</h2>' +
      '<p class="muted body-lg">' + escapeHtml(t('createWallet.subtitle')) + '</p>' +
      '<div class="field">' +
        '<label class="field-label" for="new-wallet-input">' + escapeHtml(t('createWallet.nameLabel')) + '</label>' +
        '<input class="text-input" id="new-wallet-input" type="text" maxlength="30" placeholder="' + escapeHtml(t('createWallet.namePlaceholder')) + '" />' +
        '<div id="new-wallet-error"></div>' +
      '</div>' +
      '<div class="dialog-actions">' +
        '<button type="button" class="btn btn-secondary" data-dlg="cancel">' + escapeHtml(t('cancel')) + '</button>' +
        '<button type="button" class="btn btn-primary" data-dlg="confirm">' + escapeHtml(t('createWallet.create')) + '</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDialog(); });
  var input = back.querySelector('#new-wallet-input');
  var errBox = back.querySelector('#new-wallet-error');
  function setErr(msg) {
    errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + msg + '</span></span>';
    input.classList.add('has-error');
  }
  back.querySelector('[data-dlg="cancel"]').addEventListener('click', closeDialog);
  function tryCreate() {
    var name = input.value.trim();
    if (!name) { setErr(t('createWallet.err.name')); input.focus(); return; }
    if (name.length > 30) { setErr(t('createWallet.err.tooLong')); input.focus(); return; }
    var existing = formWallets().find(function (w) { return walletLabel(w).toLowerCase() === name.toLowerCase(); });
    if (existing) { setErr(t('createWallet.err.duplicate', { name: escapeHtml(walletLabel(existing)) })); input.focus(); return; }
    var wallet = { id: uid('wallet'), name: name, initials: initialsOf(name), color: colorForName(name) };
    pendingCustomWallets.push(wallet);
    closeDialog();
    onCreated(wallet);
  }
  back.querySelector('[data-dlg="confirm"]').addEventListener('click', tryCreate);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); tryCreate(); } });
  input.addEventListener('input', function () { errBox.innerHTML = ''; input.classList.remove('has-error'); });
  document.addEventListener('keydown', dialogKeyHandler);
  input.focus();
}

function renderReceiptSection(dataUrls, status) {
  dataUrls = dataUrls || [];
  var count = dataUrls.length;
  var atMax = count >= RECEIPT_MAX;
  var labelHtml = '<span class="field-label" id="receipt-label">' + escapeHtml(t(count ? 'expense.receiptLabelPlural' : 'expense.receiptLabel')) + (count ? ' <span class="muted" style="font-weight:600;">' + escapeHtml(t('expense.receiptCount', { n: count, max: RECEIPT_MAX })) + '</span>' : '') + '</span>';

  var thumbsHtml = count ? ('<div class="receipt-grid">' + dataUrls.map(function (url, i) {
    return '<div class="receipt-thumb">' +
      '<img src="' + url + '" alt="' + escapeHtml(t('expense.removeReceiptPhoto', { n: i + 1 })) + '" />' +
      '<button type="button" class="icon-btn receipt-remove-btn" data-remove-receipt="' + i + '" aria-label="' + escapeHtml(t('expense.removeReceiptPhoto', { n: i + 1 })) + '">' + icon('close', '', 16) + '</button>' +
    '</div>';
  }).join('') + '</div>') : '';

  var uploadHtml;
  if (status === 'compressing') {
    uploadHtml = '<div class="receipt-drop"><div class="skeleton" style="width:100%;height:90px;"></div><span>' + escapeHtml(t(count ? 'expense.compressingMore' : 'expense.compressingFirst')) + '</span></div>';
  } else if (atMax) {
    uploadHtml = '<p class="muted caption">' + escapeHtml(t('expense.receiptMax', { max: RECEIPT_MAX })) + '</p>';
  } else {
    uploadHtml = '<div class="receipt-drop" id="receipt-drop">' +
      (count ? '' : icon('receipt', 'faint', 30)) +
      '<span>' + escapeHtml(t(count ? 'expense.receiptAddAnother' : 'expense.receiptTakeOrChoose')) + '</span>' +
      '<div class="row" style="flex-wrap:wrap; justify-content:center;">' +
        '<label class="btn btn-secondary" for="receipt-camera-input">' + icon('camera', '', 18) + ' ' + escapeHtml(t('expense.takePhoto')) + '</label>' +
        '<label class="btn btn-secondary" for="receipt-gallery-input">' + icon('image', '', 18) + ' ' + escapeHtml(t('expense.chooseGallery')) + '</label>' +
      '</div>' +
      '<input type="file" id="receipt-camera-input" accept="image/*" capture="environment" class="visually-hidden" aria-labelledby="receipt-label" />' +
      '<input type="file" id="receipt-gallery-input" accept="image/*" multiple class="visually-hidden" aria-labelledby="receipt-label" />' +
    '</div>';
  }

  return '<div class="field">' +
    labelHtml +
    thumbsHtml +
    uploadHtml +
    '<span class="field-help">' + escapeHtml(t('expense.receiptHelp', { max: RECEIPT_MAX })) + '</span>' +
    '<div id="receipt-error"></div>' +
  '</div>';
}

function renderExpenseFormScreen(root, expenseId) {
  var existing = expenseId ? state.expenses.find(function (e) { return e.id === expenseId; }) : null;
  var isEdit = !!existing;
  var member = currentMember();
  pendingCustomCategories = [];
  pendingCustomBanks = [];
  pendingCustomWallets = [];
  expenseForm = {
    category: existing ? existing.categoryId : null,
    payment: existing ? existing.paymentMethod : null,
    bankId: existing ? (existing.bankId || null) : null,
    walletId: existing ? (existing.walletId || null) : null,
    receiptDataUrls: existing ? (existing.receiptDataUrls || (existing.receiptDataUrl ? [existing.receiptDataUrl] : [])) : [],
    showAllCategories: existing && savedCategories().slice(6).some(function (c) { return c.id === existing.categoryId; }),
    saving: false,
    dirty: false,
    expenseId: expenseId || null
  };
  var content =
    '<form id="expense-form" novalidate class="stack-lg">' +
      renderCategoryPicker(expenseForm.category, expenseForm.showAllCategories) +
      '<div class="field">' +
        '<label class="field-label" for="detail-input">' + escapeHtml(t('expense.detailLabel')) + '</label>' +
        '<input class="text-input" id="detail-input" type="text" placeholder="' + escapeHtml(t('expense.detailPlaceholder')) + '" value="' + escapeHtml(existing ? existing.detail || '' : '') + '" />' +
        '<span class="field-help">' + escapeHtml(t('optional')) + '</span>' +
      '</div>' +
      renderReceiptSection(expenseForm.receiptDataUrls, null) +
      '<div class="field">' +
        '<label class="field-label" for="amount-input">' + escapeHtml(t('expense.amountLabel')) + '</label>' +
        '<div class="amount-input-wrap"><span class="currency-tag">MMK</span>' +
          '<input class="text-input" id="amount-input" type="text" inputmode="decimal" placeholder="0" value="' + (existing ? String(existing.amount) : '') + '" />' +
        '</div>' +
        '<div id="amount-error"></div>' +
      '</div>' +
      renderPaymentPicker(expenseForm.payment, expenseForm.bankId, expenseForm.walletId) +
      '<div class="field">' +
        '<span class="field-label">' + escapeHtml(t('expense.addedByLabel')) + '</span>' +
        '<div class="readonly-row"><span class="avatar" aria-hidden="true">' + escapeHtml(member.initials) + '</span><span>' + escapeHtml(member.name) + '</span></div>' +
      '</div>' +
      '<div class="field">' +
        '<label class="field-label" for="date-input">' + escapeHtml(t('expense.dateLabel')) + '</label>' +
        '<input class="text-input" id="date-input" type="date" value="' + (existing ? existing.date : todayISO()) + '" max="' + todayISO() + '" />' +
        '<div id="date-error"></div>' +
      '</div>' +
      '<div id="save-error"></div>' +
      '<div class="stack">' +
        '<button type="submit" class="btn btn-primary btn-block" id="save-expense-btn">' + escapeHtml(isEdit ? t('expense.saveChanges') : t('expense.saveExpense')) + '</button>' +
        '<button type="button" class="btn btn-ghost btn-block" data-action="form-cancel">' + escapeHtml(t('cancel')) + '</button>' +
      '</div>' +
    '</form>';
  root.innerHTML = '<div class="main-col" style="padding-bottom:32px;">' + focusedHeader(isEdit ? t('expense.editTitle') : t('expense.addTitle')) + '<main class="page-wrap" style="padding-top:20px;">' + content + '</main></div>';
  bindExpenseForm(root, existing);
  trackFormDirty(root);
}

function trackFormDirty(root) {
  root.querySelectorAll('#expense-form input').forEach(function (input) {
    input.addEventListener('input', function () { expenseForm.dirty = true; });
  });
}

function compressImage(file, callback) {
  var reader = new FileReader();
  reader.onload = function (ev) {
    var img = new Image();
    img.onload = function () {
      var maxDim = 1024;
      var scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      var w = Math.round(img.width * scale), h = Math.round(img.height * scale);
      var canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      var dataUrl = canvas.toDataURL('image/jpeg', 0.6);
      callback(null, dataUrl);
    };
    img.onerror = function () { callback(new Error('unreadable')); };
    img.src = ev.target.result;
  };
  reader.onerror = function () { callback(new Error('read-failed')); };
  reader.readAsDataURL(file);
}

// Compresses a list of image files in parallel, resolving in the same order
// they were passed in (not necessarily the order compression finishes).
function compressImages(files, callback) {
  var results = new Array(files.length);
  var remaining = files.length;
  var failed = false;
  if (!remaining) { callback(null, []); return; }
  files.forEach(function (file, i) {
    compressImage(file, function (err, dataUrl) {
      if (failed) return;
      if (err) { failed = true; callback(err); return; }
      results[i] = dataUrl;
      remaining--;
      if (remaining === 0) callback(null, results);
    });
  });
}

function bindExpenseForm(root, existing) {
  var form = root.querySelector('#expense-form');

  function clearFieldError(id) {
    var e = root.querySelector('#' + id + '-error');
    if (e) e.innerHTML = '';
  }
  function setFieldError(id, msg) {
    var e = root.querySelector('#' + id + '-error');
    if (e) e.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + msg + '</span></span>';
  }

  bindCategoryField(root, form);
  bindPaymentField(root, form);

  var amountInput = form.querySelector('#amount-input');
  amountInput.addEventListener('input', function () {
    var v = amountInput.value.replace(/[^0-9.]/g, '');
    var firstDot = v.indexOf('.');
    if (firstDot !== -1) v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, '');
    amountInput.value = v;
    clearFieldError('amount');
  });

  function receiptField() {
    return root.querySelector('#receipt-label').closest('.field');
  }
  function bindReceiptInputs() {
    ['receipt-camera-input', 'receipt-gallery-input'].forEach(function (id) {
      var input = root.querySelector('#' + id);
      if (!input) return;
      input.addEventListener('change', function () {
        var files = Array.prototype.slice.call(input.files || []);
        if (!files.length) return;
        clearFieldError('receipt');
        var current = expenseForm.receiptDataUrls || [];
        var remaining = RECEIPT_MAX - current.length;
        if (remaining <= 0) {
          setFieldError('receipt', escapeHtml(t('expense.err.receiptOverMax', { max: RECEIPT_MAX })));
          input.value = '';
          return;
        }
        if (files.length > remaining) {
          setFieldError('receipt', escapeHtml(morePhotosLabel(remaining, RECEIPT_MAX)));
          input.value = '';
          return;
        }
        var invalidType = files.some(function (f) { return !/^image\//.test(f.type); });
        if (invalidType) {
          setFieldError('receipt', escapeHtml(t('expense.err.receiptType')));
          input.value = '';
          return;
        }
        var tooLarge = files.some(function (f) { return f.size > 8 * 1024 * 1024; });
        if (tooLarge) {
          setFieldError('receipt', escapeHtml(t('expense.err.receiptSize')));
          input.value = '';
          return;
        }
        receiptField().outerHTML = renderReceiptSection(current, 'compressing');
        compressImages(files, function (err, dataUrls) {
          if (err) {
            receiptField().outerHTML = renderReceiptSection(current, null);
            bindReceiptInputs();
            bindRemoveReceiptButtons();
            setFieldError('receipt', escapeHtml(t('expense.err.receiptRead')));
            return;
          }
          expenseForm.receiptDataUrls = current.concat(dataUrls);
          expenseForm.dirty = true;
          receiptField().outerHTML = renderReceiptSection(expenseForm.receiptDataUrls, null);
          bindReceiptInputs();
          bindRemoveReceiptButtons();
        });
      });
    });
  }
  function bindRemoveReceiptButtons() {
    root.querySelectorAll('[data-remove-receipt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-remove-receipt'), 10);
        expenseForm.receiptDataUrls.splice(idx, 1);
        expenseForm.dirty = true;
        receiptField().outerHTML = renderReceiptSection(expenseForm.receiptDataUrls, null);
        bindReceiptInputs();
        bindRemoveReceiptButtons();
      });
    });
  }
  bindReceiptInputs();
  bindRemoveReceiptButtons();

  root.querySelector('[data-action="form-back"]').addEventListener('click', function () { attemptLeaveForm(); });
  root.querySelector('[data-action="form-cancel"]').addEventListener('click', function () { attemptLeaveForm(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (expenseForm.saving) return;
    submitExpenseForm(root, form, existing);
  });
}
function bindCategoryField(root, form) {
  var showAllBtn = form.querySelector('[data-action="show-all-categories"]');
  if (showAllBtn) showAllBtn.addEventListener('click', function () {
    expenseForm.showAllCategories = true;
    var field = showAllBtn.closest('.field');
    field.outerHTML = renderCategoryPicker(expenseForm.category, true);
    bindCategoryField(root, form);
  });

  var createBtn = form.querySelector('[data-action="create-category"]');
  if (createBtn) createBtn.addEventListener('click', function () {
    openCreateCategoryDialog(function (cat) {
      expenseForm.category = cat.id;
      expenseForm.showAllCategories = true;
      expenseForm.dirty = true;
      var field = form.querySelector('#category-grid').closest('.field');
      field.outerHTML = renderCategoryPicker(expenseForm.category, true);
      bindCategoryField(root, form);
      showToast(t('toast.categoryCreated', { name: cat.label }));
    });
  });

  bindCategoryButtons(root, form);
}
function bindCategoryButtons(root, form) {
  form.querySelectorAll('[data-category]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      expenseForm.category = btn.getAttribute('data-category');
      expenseForm.dirty = true;
      form.querySelectorAll('[data-category]').forEach(function (b) {
        var on = b === btn;
        b.setAttribute('aria-pressed', String(on));
      });
      var eBox = root.querySelector('#category-error'); if (eBox) eBox.innerHTML = '';
    });
  });
}

function bindPaymentField(root, form) {
  var field = form.querySelector('#payment-label').closest('.field');
  function rerender() {
    field.outerHTML = renderPaymentPicker(expenseForm.payment, expenseForm.bankId, expenseForm.walletId);
    bindPaymentField(root, form);
  }
  field.querySelectorAll('[data-payment]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var chosen = btn.getAttribute('data-payment');
      var errBox = root.querySelector('#payment-error'); if (errBox) errBox.innerHTML = '';
      if (expenseForm.payment === chosen) return;
      expenseForm.payment = chosen;
      if (chosen !== 'bank') { expenseForm.bankId = null; }
      if (chosen !== 'ewallet') { expenseForm.walletId = null; }
      expenseForm.dirty = true;
      rerender();
    });
  });
  field.querySelectorAll('[data-bank]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var chosenBank = btn.getAttribute('data-bank');
      if (expenseForm.bankId === chosenBank) return;
      expenseForm.bankId = chosenBank;
      expenseForm.dirty = true;
      rerender();
    });
  });
  field.querySelectorAll('[data-wallet]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var chosenWallet = btn.getAttribute('data-wallet');
      if (expenseForm.walletId === chosenWallet) return;
      expenseForm.walletId = chosenWallet;
      expenseForm.dirty = true;
      rerender();
    });
  });
  var addBankBtn = field.querySelector('[data-action="add-bank"]');
  if (addBankBtn) {
    addBankBtn.addEventListener('click', function () {
      openAddBankDialog(function (bank) {
        expenseForm.bankId = bank.id;
        expenseForm.dirty = true;
        rerender();
        showToast(t('toast.bankCreated', { name: bankLabel(bank) }));
      });
    });
  }
  var addWalletBtn = field.querySelector('[data-action="add-wallet"]');
  if (addWalletBtn) {
    addWalletBtn.addEventListener('click', function () {
      openAddWalletDialog(function (wallet) {
        expenseForm.walletId = wallet.id;
        expenseForm.dirty = true;
        rerender();
        showToast(t('toast.walletCreated', { name: walletLabel(wallet) }));
      });
    });
  }
}

function attemptLeaveForm() {
  if (!expenseForm.dirty) { navigate(expenseForm.expenseId ? 'expense-detail' : 'home', expenseForm.expenseId ? { id: expenseForm.expenseId } : {}); return; }
  openDialog({
    title: t('expense.discardTitle'),
    message: t('expense.discardMessage'),
    cancelLabel: t('expense.keepEditing'),
    confirmLabel: t('expense.discard'),
    destructive: true,
    onCancel: closeDialog,
    onConfirm: function () {
      closeDialog();
      navigate(expenseForm.expenseId ? 'expense-detail' : 'home', expenseForm.expenseId ? { id: expenseForm.expenseId } : {});
    }
  });
}

function submitExpenseForm(root, form, existing) {
  var detail = root.querySelector('#detail-input').value.trim();
  var amountRaw = root.querySelector('#amount-input').value.trim();
  var dateVal = root.querySelector('#date-input').value;
  var amount = parseFloat(amountRaw);

  root.querySelectorAll('.has-error').forEach(function (i) { i.classList.remove('has-error'); });
  ['category', 'amount', 'payment', 'date'].forEach(function (id) { var e = root.querySelector('#' + id + '-error'); if (e) e.innerHTML = ''; });

  var firstInvalid = null;
  function fail(id, el, msg) {
    setErr(id, msg);
    if (el) el.classList.add('has-error');
    if (!firstInvalid) firstInvalid = el || root.querySelector('#' + id + '-label');
  }
  function setErr(id, msg) {
    var e = root.querySelector('#' + id + '-error');
    if (e) e.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + msg + '</span></span>';
  }

  if (!expenseForm.category) fail('category', null, escapeHtml(t('expense.err.category')));
  if (!amountRaw) fail('amount', root.querySelector('#amount-input'), escapeHtml(t('expense.err.amountRequired')));
  else if (isNaN(amount) || !isFinite(amount)) fail('amount', root.querySelector('#amount-input'), escapeHtml(t('expense.err.amountInvalid')));
  else if (amount <= 0) fail('amount', root.querySelector('#amount-input'), escapeHtml(t('expense.err.amountZero')));
  if (!expenseForm.payment) fail('payment', null, escapeHtml(t('expense.err.payment')));
  if (!dateVal) fail('date', root.querySelector('#date-input'), escapeHtml(t('expense.err.dateRequired')));
  else if (dateVal > todayISO()) fail('date', root.querySelector('#date-input'), escapeHtml(t('expense.err.dateFuture')));

  if (firstInvalid) { firstInvalid.focus(); firstInvalid.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }

  var saveBtn = root.querySelector('#save-expense-btn');
  var cancelBtn = root.querySelector('[data-action="form-cancel"]');
  expenseForm.saving = true;
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  saveBtn.innerHTML = '<span class="spinner" aria-hidden="true" style="display:inline-block;width:18px;height:18px;border:2.5px solid rgba(255,255,255,0.5);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite;"></span> ' + escapeHtml(t('expense.savingSpinner'));
  var styleTag = document.getElementById('spin-kf');
  if (!styleTag) { styleTag = document.createElement('style'); styleTag.id = 'spin-kf'; styleTag.textContent = '@keyframes spin{to{transform:rotate(360deg)}}'; document.head.appendChild(styleTag); }

  var member = currentMember();
  var isEdit = !!existing;
  var expenseId = isEdit ? existing.id : null; // assigned by the server on create
  var saveErrBox = root.querySelector('#save-error');
  saveErrBox.innerHTML = '';

  function doSave() {
    var payload = {
      categoryId: expenseForm.category,
      detail: detail,
      amount: amount,
      paymentMethod: expenseForm.payment,
      bankId: expenseForm.payment === 'bank' ? (expenseForm.bankId || null) : null,
      walletId: expenseForm.payment === 'ewallet' ? (expenseForm.walletId || null) : null,
      date: dateVal,
      receiptDataUrls: expenseForm.receiptDataUrls || []
    };

    // Categories/banks/wallets created from this form's pickers were only
    // held locally (pendingCustom*) so a cancelled form doesn't litter the
    // household's shared lists; now that the user is actually saving,
    // persist them for real before (or alongside) the expense itself. Each
    // one gets a fresh server-assigned id, different from the temporary
    // uid() it was given for the picker UI — carry the temp id along so it
    // can be swapped for the real one in payload.categoryId/bankId/walletId
    // below (the payload may currently be pointing at a temp id).
    var extraRequests = [];
    pendingCustomCategories.forEach(function (c) {
      extraRequests.push(apiRequest('POST', '/categories', { label: c.label, icon: c.icon })
        .then(function (r) { return { kind: 'category', tempId: c.id, item: r.category }; }));
    });
    pendingCustomBanks.forEach(function (b) {
      extraRequests.push(apiRequest('POST', '/banks', { name: b.name })
        .then(function (r) { return { kind: 'bank', tempId: b.id, item: r.bank }; }));
    });
    pendingCustomWallets.forEach(function (w) {
      extraRequests.push(apiRequest('POST', '/wallets', { name: w.name })
        .then(function (r) { return { kind: 'wallet', tempId: w.id, item: r.wallet }; }));
    });

    Promise.all(extraRequests).then(function (created) {
      var idMap = {}; // temp uid() -> server-assigned id
      created.forEach(function (c) {
        if (c.kind === 'category') state.customCategories.push(c.item);
        if (c.kind === 'bank') state.customBanks.push(c.item);
        if (c.kind === 'wallet') state.customWallets.push(c.item);
        idMap[c.tempId] = c.item.id;
      });
      if (idMap[payload.categoryId]) payload.categoryId = idMap[payload.categoryId];
      if (idMap[payload.bankId]) payload.bankId = idMap[payload.bankId];
      if (idMap[payload.walletId]) payload.walletId = idMap[payload.walletId];
      return isEdit
        ? apiRequest('PATCH', '/expenses/' + expenseId, payload)
        : apiRequest('POST', '/expenses', payload);
    }).then(function (result) {
      var saved = result.expense;
      var idx = state.expenses.findIndex(function (e) { return e.id === saved.id; });
      if (idx > -1) state.expenses[idx] = saved; else state.expenses.unshift(saved);
      expenseId = saved.id;
      expenseForm.saving = false;
      expenseForm.dirty = false;
      pendingCustomCategories = [];
      pendingCustomBanks = [];
      pendingCustomWallets = [];
      renderExpenseSuccessScreen(document.getElementById('app'), isEdit, expenseId);
    }).catch(function (err) {
      expenseForm.saving = false;
      saveBtn.disabled = false;
      cancelBtn.disabled = false;
      saveBtn.textContent = isEdit ? t('expense.saveChanges') : t('expense.saveExpense');
      var tooLarge = err && err.code === 'too_large';
      var msg = tooLarge
        ? escapeHtml(t('expense.err.saveFailedTooLarge'))
        : escapeHtml(t('expense.err.saveFailedGeneric'));
      saveErrBox.innerHTML = '<div class="banner warn">' + icon('warning') + '<div><strong>' + escapeHtml(t('expense.err.saveFailedTitle')) + '</strong><br/>' + msg + '</div></div>' +
        (tooLarge ? '' : '<button type="button" class="btn btn-secondary btn-block" id="retry-save-btn" style="margin-top:10px;">' + escapeHtml(t('tryAgain')) + '</button>');
      var retryBtn = document.getElementById('retry-save-btn');
      if (retryBtn) retryBtn.addEventListener('click', doSave);
    });
  }
  doSave();
}

function renderExpenseSuccessScreen(root, isEdit, expenseId) {
  root.innerHTML = '<div class="main-col" style="padding-bottom:32px;"><main class="page-wrap" style="padding-top:20vh; align-items:center; text-align:center; gap:16px;">' +
    '<span class="icon-wrap" style="width:88px;height:88px;background:var(--ok-tint);"><span style="color:var(--ok);">' + icon('checkCircle', '', 44) + '</span></span>' +
    '<h1 class="display-md">' + escapeHtml(isEdit ? t('success.changesSaved') : t('success.expenseAdded')) + '</h1>' +
    '<p class="muted body-lg">' + escapeHtml(t('success.updated')) + '</p>' +
    '<div class="stack" style="width:100%; max-width:320px; margin-top:12px;">' +
      '<button type="button" class="btn btn-primary btn-block" data-action="back-home">' + escapeHtml(t('success.backHome')) + '</button>' +
      (isEdit ? '<button type="button" class="btn btn-secondary btn-block" data-action="view-expense">' + escapeHtml(t('success.viewExpense')) + '</button>' : '<button type="button" class="btn btn-secondary btn-block" data-action="add-another">' + escapeHtml(t('success.addAnother')) + '</button>') +
    '</div>' +
  '</main></div>';
  root.querySelector('[data-action="back-home"]').addEventListener('click', function () { navigate('home'); });
  var addAnother = root.querySelector('[data-action="add-another"]');
  if (addAnother) addAnother.addEventListener('click', function () { navigate('add-expense'); });
  var viewExp = root.querySelector('[data-action="view-expense"]');
  if (viewExp) viewExp.addEventListener('click', function () { navigate('expense-detail', { id: expenseId }); });
  showToast(isEdit ? t('success.changesSaved') : t('success.expenseAdded'));
}


/* ============================================================
   ALL EXPENSES
   ============================================================ */
var expensesUi = { search: '', dateFrom: '', dateTo: '', category: 'all', payment: 'all', member: 'all', sort: 'newest', visibleCount: 20 };

function expensesUiActiveFilterCount() {
  var n = 0;
  if (expensesUi.dateFrom || expensesUi.dateTo) n++;
  if (expensesUi.category !== 'all') n++;
  if (expensesUi.payment !== 'all') n++;
  if (expensesUi.member !== 'all') n++;
  return n;
}
function clearExpensesFilters() {
  expensesUi.dateFrom = ''; expensesUi.dateTo = ''; expensesUi.category = 'all'; expensesUi.payment = 'all'; expensesUi.member = 'all'; expensesUi.sort = 'newest';
}
function getFilteredExpenses() {
  var list = state.expenses.slice();
  var q = expensesUi.search.trim().toLowerCase();
  if (q) list = list.filter(function (e) { return (e.detail || '').toLowerCase().indexOf(q) !== -1; });
  if (expensesUi.dateFrom) list = list.filter(function (e) { return e.date >= expensesUi.dateFrom; });
  if (expensesUi.dateTo) list = list.filter(function (e) { return e.date <= expensesUi.dateTo; });
  if (expensesUi.category !== 'all') list = list.filter(function (e) { return e.categoryId === expensesUi.category; });
  if (expensesUi.payment !== 'all') list = list.filter(function (e) { return e.paymentMethod === expensesUi.payment; });
  if (expensesUi.member !== 'all') list = list.filter(function (e) { return e.memberId === expensesUi.member; });
  list.sort(function (a, b) {
    if (expensesUi.sort === 'oldest') return (a.date + a.createdAt) < (b.date + b.createdAt) ? -1 : 1;
    if (expensesUi.sort === 'highest') return b.amount - a.amount;
    if (expensesUi.sort === 'lowest') return a.amount - b.amount;
    return (b.date + b.createdAt) < (a.date + a.createdAt) ? -1 : 1;
  });
  return list;
}
function groupByDate(list) {
  var groups = [];
  var map = {};
  list.forEach(function (e) {
    if (!map[e.date]) { map[e.date] = { date: e.date, items: [] }; groups.push(map[e.date]); }
    map[e.date].items.push(e);
  });
  return groups;
}

function renderFiltersDialogHtml() {
  var cats = '<option value="all">' + escapeHtml(t('filters.allCategories')) + '</option>' + savedCategories().map(function (c) { return '<option value="' + c.id + '"' + (expensesUi.category === c.id ? ' selected' : '') + '>' + escapeHtml(catLabel(c)) + '</option>'; }).join('');
  var pays = '<option value="all">' + escapeHtml(t('filters.allPayments')) + '</option>' + PAYMENT_METHODS.map(function (p) { return '<option value="' + p.id + '"' + (expensesUi.payment === p.id ? ' selected' : '') + '>' + escapeHtml(payLabel(p)) + '</option>'; }).join('');
  var mems = '<option value="all">' + escapeHtml(t('filters.everyone')) + '</option>' + state.members.map(function (m) { return '<option value="' + m.id + '"' + (expensesUi.member === m.id ? ' selected' : '') + '>' + escapeHtml(m.name) + '</option>'; }).join('');
  var sorts = [['newest', t('filters.newestFirst')], ['oldest', t('filters.oldestFirst')], ['highest', t('filters.highestAmount')], ['lowest', t('filters.lowestAmount')]].map(function (s) {
    return '<option value="' + s[0] + '"' + (expensesUi.sort === s[0] ? ' selected' : '') + '>' + escapeHtml(s[1]) + '</option>';
  }).join('');
  return '<div class="stack-lg">' +
    '<div class="row" style="gap:12px;">' +
      '<div class="field" style="flex:1;"><label class="field-label" for="filter-from">' + escapeHtml(t('filters.fromDate')) + '</label><input class="text-input" type="date" id="filter-from" value="' + expensesUi.dateFrom + '" max="' + todayISO() + '" /></div>' +
      '<div class="field" style="flex:1;"><label class="field-label" for="filter-to">' + escapeHtml(t('filters.toDate')) + '</label><input class="text-input" type="date" id="filter-to" value="' + expensesUi.dateTo + '" max="' + todayISO() + '" /></div>' +
    '</div>' +
    '<div class="field"><label class="field-label" for="filter-category">' + escapeHtml(t('filters.category')) + '</label><select class="select-input" id="filter-category">' + cats + '</select></div>' +
    '<div class="field"><label class="field-label" for="filter-payment">' + escapeHtml(t('filters.payment')) + '</label><select class="select-input" id="filter-payment">' + pays + '</select></div>' +
    '<div class="field"><label class="field-label" for="filter-member">' + escapeHtml(t('filters.member')) + '</label><select class="select-input" id="filter-member">' + mems + '</select></div>' +
    '<div class="field"><label class="field-label" for="filter-sort">' + escapeHtml(t('filters.sortBy')) + '</label><select class="select-input" id="filter-sort">' + sorts + '</select></div>' +
    '<div class="dialog-actions">' +
      '<button type="button" class="btn btn-secondary" id="filters-clear">' + escapeHtml(t('allExpenses.clearFilters')) + '</button>' +
      '<button type="button" class="btn btn-primary" id="filters-apply">' + escapeHtml(t('filters.showResults')) + '</button>' +
    '</div>' +
  '</div>';
}
function openFiltersSheet(onApplied) {
  var back = document.createElement('div');
  back.className = 'dialog-backdrop';
  back.id = 'active-dialog';
  back.innerHTML = '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="filters-title"><h2 class="title" id="filters-title">' + escapeHtml(t('filters.title')) + '</h2>' + renderFiltersDialogHtml() + '</div>';
  document.body.appendChild(back);
  back.addEventListener('click', function (e) { if (e.target === back) closeDialog(); });
  back.querySelector('#filters-clear').addEventListener('click', function () { clearExpensesFilters(); closeDialog(); onApplied(); });
  back.querySelector('#filters-apply').addEventListener('click', function () {
    expensesUi.dateFrom = back.querySelector('#filter-from').value;
    expensesUi.dateTo = back.querySelector('#filter-to').value;
    expensesUi.category = back.querySelector('#filter-category').value;
    expensesUi.payment = back.querySelector('#filter-payment').value;
    expensesUi.member = back.querySelector('#filter-member').value;
    expensesUi.sort = back.querySelector('#filter-sort').value;
    closeDialog();
    onApplied();
  });
  document.addEventListener('keydown', dialogKeyHandler);
  back.querySelector('#filter-from').focus();
}

function renderAllExpensesList() {
  if (!navigator.onLine) {
    return '<div class="empty-state"><span class="icon-wrap">' + icon('wifiOff', '', 28) + '</span><h2 class="title">' + escapeHtml(t('allExpenses.offlineTitle')) + '</h2><p>' + escapeHtml(t('allExpenses.offlineDesc')) + '</p></div>';
  }
  var all = state.expenses;
  var filtered = getFilteredExpenses();
  if (all.length === 0) {
    return '<div class="empty-state"><span class="icon-wrap">' + icon('receipt', '', 28) + '</span><h2 class="title">' + escapeHtml(t('home.noneTitle')) + '</h2><p>' + escapeHtml(t('home.noneDesc')) + '</p><button type="button" class="btn btn-primary" data-nav="add-expense" style="margin-top:8px;">' + escapeHtml(t('home.addFirstExpense')) + '</button></div>';
  }
  if (filtered.length === 0) {
    var reason = expensesUi.search.trim() ? escapeHtml(t('allExpenses.noMatchQuery', { q: expensesUi.search.trim() })) : escapeHtml(t('allExpenses.noMatchFilters'));
    return '<div class="empty-state"><span class="icon-wrap">' + icon('search', '', 28) + '</span><h2 class="title">' + reason + '</h2><p>' + escapeHtml(t('allExpenses.tryDifferent')) + '</p><button type="button" class="btn btn-secondary" id="clear-filters-inline" style="margin-top:8px;">' + escapeHtml(t('allExpenses.clearFilters')) + '</button></div>';
  }
  var visible = filtered.slice(0, expensesUi.visibleCount);
  var groups = groupByDate(visible);
  var html = groups.map(function (g) {
    return '<div class="day-group-label">' + fmtDateGroup(g.date) + '</div>' +
      '<div class="card" style="padding:6px 12px;">' + g.items.map(renderRecentExpenseRow).join('') + '</div>';
  }).join('');
  if (filtered.length > expensesUi.visibleCount) {
    html += '<button type="button" class="btn btn-secondary btn-block" id="load-more-btn">' + escapeHtml(t('allExpenses.showMore')) + '</button>';
  } else {
    html += '<p class="muted" style="text-align:center; padding:16px 0;">' + icon('end', '', 16) + ' ' + escapeHtml(t('allExpenses.reachedEnd')) + '</p>';
  }
  return html;
}

function renderAllExpensesScreen(root) {
  var body =
    '<div class="stack">' +
      '<div class="row" style="gap:10px;">' +
        '<div style="flex:1; position:relative;">' +
          '<span style="position:absolute; left:14px; top:50%; transform:translateY(-50%); color:var(--text-faint);">' + icon('search', '', 20) + '</span>' +
          '<input class="text-input" style="padding-left:44px;" type="search" id="expense-search" placeholder="' + escapeHtml(t('allExpenses.searchPlaceholder')) + '" value="' + escapeHtml(expensesUi.search) + '" aria-label="' + escapeHtml(t('allExpenses.searchAria')) + '" />' +
        '</div>' +
        '<button type="button" class="icon-btn" style="border:2px solid var(--border-strong); width:52px; height:52px; position:relative;" id="open-filters-btn" aria-label="' + escapeHtml(t('allExpenses.filterAria')) + '">' + icon('filter') +
          (expensesUiActiveFilterCount() ? '<span class="notif-dot" style="background:var(--brand); top:2px; right:2px;"></span>' : '') +
        '</button>' +
      '</div>' +
      (expensesUiActiveFilterCount() ? '<div class="row"><span class="badge">' + escapeHtml(filterCountLabel(expensesUiActiveFilterCount())) + '</span><button type="button" class="link-btn" id="clear-filters-top" style="padding:4px;">' + escapeHtml(t('allExpenses.clearFilters')) + '</button></div>' : '') +
    '</div>' +
    '<div id="expenses-list-region">' + renderAllExpensesList() + '</div>';
  root.innerHTML = renderShell('all-expenses', body, { title: t('allExpenses.title'), backTo: true, topPad: true }, true);
  bindShellEvents(root);
  onScreenBack = function () { navigate('home'); };
  bindAllExpensesScreen(root);
}
function bindAllExpensesScreen(root) {
  var region = root.querySelector('#expenses-list-region');
  function refreshList() {
    region.innerHTML = renderAllExpensesList();
    bindListRegion();
  }
  function bindListRegion() {
    region.querySelectorAll('[data-expense]').forEach(function (b) {
      b.addEventListener('click', function () { navigate('expense-detail', { id: b.getAttribute('data-expense') }); });
    });
    var loadMore = region.querySelector('#load-more-btn');
    if (loadMore) loadMore.addEventListener('click', function () { expensesUi.visibleCount += 20; refreshList(); });
    var clearInline = region.querySelector('#clear-filters-inline');
    if (clearInline) clearInline.addEventListener('click', function () { clearExpensesFilters(); expensesUi.search=''; renderAllExpensesScreen(root); });
    var navAdd = region.querySelector('[data-nav="add-expense"]');
    if (navAdd) navAdd.addEventListener('click', function () { navigate('add-expense'); });
  }
  bindListRegion();
  var search = root.querySelector('#expense-search');
  var searchDebounceTimer;
  search.addEventListener('input', function () {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(function () { expensesUi.search = search.value; expensesUi.visibleCount = 20; refreshList(); }, 200);
  });
  root.querySelector('#open-filters-btn').addEventListener('click', function () {
    openFiltersSheet(function () { expensesUi.visibleCount = 20; renderAllExpensesScreen(root); });
  });
  var clearTop = root.querySelector('#clear-filters-top');
  if (clearTop) clearTop.addEventListener('click', function () { clearExpensesFilters(); renderAllExpensesScreen(root); });
}


/* ============================================================
   EXPENSE DETAIL
   ============================================================ */
function renderExpenseDetailScreen(root, expenseId) {
  var e = state.expenses.find(function (x) { return x.id === expenseId; });
  if (!e) {
    root.innerHTML = renderShell('all-expenses', '<div class="empty-state"><span class="icon-wrap">' + icon('warning', '', 28) + '</span><h2 class="title">' + escapeHtml(t('detail.notAvailable')) + '</h2><p>' + escapeHtml(t('detail.mayHaveBeenDeleted')) + '</p><button type="button" class="btn btn-primary" data-nav="all-expenses" style="margin-top:8px;">' + escapeHtml(t('detail.backToAll')) + '</button></div>', { title: t('detail.title'), backTo: true, topPad: true });
    bindShellEvents(root); onScreenBack = function(){navigate('all-expenses');};
    return;
  }
  var cat = findCategory(e.categoryId);
  var member = state.members.find(function (m) { return m.id === e.memberId; });
  var editor = e.editedBy ? state.members.find(function (m) { return m.id === e.editedBy; }) : null;
  var canEdit = currentMemberIsOwner() || (member && member.id === session.memberId);
  var receiptUrls = e.receiptDataUrls || (e.receiptDataUrl ? [e.receiptDataUrl] : []);
  var body =
    '<div class="stack-lg">' +
      '<div class="card stack" style="align-items:center; text-align:center;">' +
        '<span class="cat-icon" style="width:56px;height:56px; background:var(--brand-tint); color:var(--brand-strong);">' + icon(cat.icon, '', 26) + '</span>' +
        '<div class="display-md tabular">' + fmtMMK(e.amount) + '</div>' +
        '<div class="muted">' + escapeHtml(e.detail || catLabel(cat)) + '</div>' +
      '</div>' +
      (receiptUrls.length ? ('<div class="receipt-grid">' + receiptUrls.map(function (url, i) {
        return '<div class="receipt-thumb receipt-thumb-view"><img src="' + url + '" alt="' + escapeHtml(t('detail.receiptPhotoAlt', { n: i + 1, total: receiptUrls.length, name: e.detail || catLabel(cat) })) + '" /></div>';
      }).join('') + '</div>') : '') +
      '<div class="card stack">' +
        detailRow(t('detail.category'), escapeHtml(catLabel(cat))) +
        detailRow(t('detail.detailName'), escapeHtml(e.detail || '—')) +
        detailRow(t('expense.amountLabel'), '<span class="tabular">' + fmtMMK(e.amount) + '</span>') +
        detailRow(t('detail.currency'), escapeHtml(state.household.currency)) +
        detailRow(t('expense.paymentLabel'), escapeHtml(paymentDetailText(e))) +
        detailRow(t('expense.dateLabel'), escapeHtml(fmtDateLong(e.date))) +
        detailRow(t('expense.addedByLabel'), escapeHtml(member ? member.name : t('detail.aHouseholdMember'))) +
        detailRow(t('detail.created'), escapeHtml(fmtDateTimeHuman(e.createdAt))) +
        (e.editedAt ? detailRow(t('detail.lastEdited'), escapeHtml((editor ? editor.name + ', ' : '') + fmtDateTimeHuman(e.editedAt))) : '') +
      '</div>' +
      (canEdit ? ('<div class="stack">' +
        '<button type="button" class="btn btn-secondary btn-block" id="edit-expense-btn">' + icon('edit', '', 18) + ' ' + escapeHtml(t('detail.edit')) + '</button>' +
        '<button type="button" class="btn btn-ghost btn-block" id="delete-expense-btn" style="color:var(--danger);">' + icon('trash', '', 18) + ' ' + escapeHtml(t('detail.delete')) + '</button>' +
      '</div>') : '') +
    '</div>';
  root.innerHTML = renderShell('all-expenses', body, { title: t('detail.title'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('all-expenses'); };
  if (canEdit) {
    root.querySelector('#edit-expense-btn').addEventListener('click', function () { navigate('edit-expense', { id: e.id }); });
    root.querySelector('#delete-expense-btn').addEventListener('click', function () {
      openDialog({
        title: t('detail.deleteTitle'),
        message: t('detail.deleteMessage'),
        cancelLabel: t('cancel'),
        confirmLabel: t('detail.delete'),
        destructive: true,
        onCancel: closeDialog,
        onConfirm: function () {
          closeDialog();
          apiRequest('DELETE', '/expenses/' + e.id).then(function () {
            state.expenses = state.expenses.filter(function (x) { return x.id !== e.id; });
            navigate('all-expenses');
            showToast(t('toast.expenseDeleted'));
          }).catch(function () {
            showToast(t('toast.actionFailed'));
          });
        }
      });
    });
  }
}
function detailRow(label, valueHtml) {
  return '<div class="row-between" style="align-items:flex-start;"><span class="muted">' + escapeHtml(label) + '</span><span style="text-align:right; font-weight:700;">' + valueHtml + '</span></div>';
}

/* ============================================================
   SET MONTHLY TARGET
   ============================================================ */
function renderSetTargetScreen(root) {
  var mk = currentMonthKey();
  var canEdit = currentMemberIsOwner();
  var current = state.target && state.target.month === mk ? state.target.amount : (state.target ? state.target.amount : null);
  var body =
    '<div class="stack-lg">' +
      '<p class="body-lg">' + escapeHtml(t('target.pageQuestion')) + '</p>' +
      '<div class="banner info">' + icon('info') + '<span>' + escapeHtml(t('target.pageInfo')) + '</span></div>' +
      '<form id="target-form" class="card stack-lg" novalidate>' +
        '<div class="field">' +
          '<label class="field-label" for="target-amount">' + escapeHtml(t('target.amountLabel')) + '</label>' +
          '<div class="amount-input-wrap"><span class="currency-tag">MMK</span><input class="text-input" id="target-amount" type="text" inputmode="decimal" placeholder="0" value="' + (current != null ? String(current) : '') + '" ' + (canEdit ? '' : 'disabled') + ' /></div>' +
          '<div id="target-error"></div>' +
        '</div>' +
        '<div class="field"><span class="field-label">' + escapeHtml(t('target.currencyLabel')) + '</span><div class="readonly-row"><span>' + icon('shield', '', 18) + '</span><span>' + escapeHtml(state.household.currency) + '</span></div></div>' +
        '<div class="field"><span class="field-label">' + escapeHtml(t('target.month')) + '</span><div class="readonly-row"><span>' + icon('calendar', '', 18) + '</span><span>' + escapeHtml(monthLabel(mk)) + '</span></div></div>' +
        (canEdit ? '<button type="submit" class="btn btn-primary btn-block" id="target-save-btn">' + escapeHtml(t('target.saveBtn')) + '</button>' :
          '<div class="banner info">' + icon('info') + '<span>' + escapeHtml(t('target.ownerOnlyInfo')) + '</span></div>') +
      '</form>' +
    '</div>';
  root.innerHTML = renderShell('home', body, { title: t('target.pageTitle'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('home'); };
  if (!canEdit) return;
  var amtInput = root.querySelector('#target-amount');
  amtInput.addEventListener('input', function () {
    var v = amtInput.value.replace(/[^0-9.]/g, '');
    var firstDot = v.indexOf('.');
    if (firstDot !== -1) v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, '');
    amtInput.value = v;
    root.querySelector('#target-error').innerHTML = '';
  });
  root.querySelector('#target-form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var val = parseFloat(amtInput.value.trim());
    var errBox = root.querySelector('#target-error');
    if (!amtInput.value.trim() || isNaN(val) || val <= 0) {
      errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('target.err.amount')) + '</span></span>';
      amtInput.classList.add('has-error');
      amtInput.focus();
      return;
    }
    var btn = root.querySelector('#target-save-btn');
    btn.disabled = true; btn.textContent = t('target.saving');
    apiRequest('PUT', '/target', { amount: val, month: mk }).then(function (result) {
      state.target = result.target;
      navigate('home');
      showToast(t('toast.targetUpdated'));
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = t('target.saveBtn');
      errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('target.err.save')) + '</span></span>';
    });
  });
}


/* ============================================================
   HOUSEHOLD
   ============================================================ */
function renderHouseholdScreen(root) {
  var isOwner = currentMemberIsOwner();
  var mk = currentMonthKey();
  var body =
    '<div class="stack-lg">' +
      '<div class="card stack">' +
        '<div class="row-between"><h2 class="title">' + escapeHtml(state.household.name) + '</h2><span class="badge">' + icon('shield', '', 14) + ' ' + escapeHtml(state.household.currency) + '</span></div>' +
        detailRow(t('target.currencyLabel'), escapeHtml(state.household.currency)) +
        detailRow(t('target.monthlyTarget'), state.target && state.target.month === mk ? ('<span class="tabular">' + fmtMMK(state.target.amount) + '</span>') : escapeHtml(t('household.notSet'))) +
        '<button type="button" class="link-btn" data-nav="set-target" style="align-self:flex-start; padding:4px;">' + escapeHtml(t('household.viewOrEditTarget')) + '</button>' +
      '</div>' +
      '<div class="stack">' +
        '<div class="row-between"><h2 class="title">' + escapeHtml(t('household.familyMembers')) + '</h2></div>' +
        '<div class="card" style="padding:6px 16px;">' +
          state.members.map(function (m, i) {
            return '<div class="row-between" style="padding:12px 0; border-bottom:' + (i < state.members.length - 1 ? '1px solid var(--border)' : 'none') + ';">' +
              '<div class="row"><span class="avatar" aria-hidden="true">' + escapeHtml(m.initials) + '</span><div class="stack" style="gap:2px;"><strong>' + escapeHtml(m.name) + (m.id === session.memberId ? escapeHtml(t('household.you')) : '') + '</strong><span class="muted caption">' + escapeHtml(m.role === 'owner' ? t('role.owner') : t('role.member')) + '</span></div></div>' +
              (isOwner && m.id !== session.memberId ? '<button type="button" class="icon-btn" data-remove-member="' + m.id + '" aria-label="' + escapeHtml(t('household.removeAria', { name: m.name })) + '">' + icon('trash', '', 18) + '</button>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
        (isOwner ? '<button type="button" class="btn btn-secondary btn-block" data-nav="invite">' + icon('qr', '', 18) + ' ' + escapeHtml(t('household.inviteMember')) + '</button>' : '') +
      '</div>' +
      '<div class="banner info">' + icon('info') + '<span>' + escapeHtml(isOwner ? t('household.infoOwner') : t('household.infoMember')) + '</span></div>' +
    '</div>';
  root.innerHTML = renderShell('household', body, { title: t('household.title'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('home'); };
  root.querySelectorAll('[data-remove-member]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-remove-member');
      var m = state.members.find(function (x) { return x.id === id; });
      openDialog({
        title: t('household.removeTitle', { name: m.name }),
        message: t('household.removeMessage', { name: m.name }),
        confirmLabel: t('household.removeConfirm'),
        cancelLabel: t('cancel'),
        destructive: true,
        onCancel: closeDialog,
        onConfirm: function () {
          closeDialog();
          apiRequest('DELETE', '/members/' + id).then(function () {
            state.members = state.members.filter(function (x) { return x.id !== id; });
            renderApp();
            showToast(t('toast.memberRemoved'));
          }).catch(function () {
            showToast(t('toast.actionFailed'));
          });
        }
      });
    });
  });
}

/* ============================================================
   INVITE (QR + link share)
   ============================================================ */
function renderQrSvg(text) {
  try {
    var res = encodeQR(text);
    var n = res.size, cell = 6, quiet = 4 * cell;
    var px = n * cell + quiet * 2;
    var rects = '';
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (res.modules[r][c]) rects += '<rect x="' + (c * cell + quiet) + '" y="' + (r * cell + quiet) + '" width="' + cell + '" height="' + cell + '"/>';
      }
    }
    return '<svg viewBox="0 0 ' + px + ' ' + px + '" width="220" height="220" role="img" aria-label="' + escapeHtml(t('invite.qrAria')) + '">' +
      '<rect x="0" y="0" width="' + px + '" height="' + px + '" fill="#ffffff"/>' +
      '<g fill="#161311">' + rects + '</g>' +
    '</svg>';
  } catch (e) {
    return '<p class="muted">' + escapeHtml(t('invite.qrFallback')) + '</p>';
  }
}
function renderInviteScreen(root) {
  var isOwner = currentMemberIsOwner();
  var link = window.location.href.split('#')[0];
  var body =
    '<div class="stack-lg">' +
      '<p class="body-lg">' + t('invite.shareWith', { name: '<strong>' + escapeHtml(state.household.name) + '</strong>' }) + '</p>' +
      '<div class="card stack" style="align-items:center; text-align:center;">' +
        '<div class="qr-box">' + renderQrSvg(link) + '</div>' +
        '<p class="muted">' + escapeHtml(t('invite.scanHint')) + '</p>' +
        '<button type="button" class="btn btn-secondary btn-block" id="copy-link-btn">' + icon('copy', '', 18) + ' ' + escapeHtml(t('invite.copyLink')) + '</button>' +
      '</div>' +
      (isOwner ? (
        '<div class="stack">' +
          '<h2 class="title">' + escapeHtml(t('invite.addMemberTitle')) + '</h2>' +
          '<p class="muted">' + escapeHtml(t('invite.addMemberDesc')) + '</p>' +
          '<form id="add-member-form" class="card stack-lg" novalidate>' +
            '<div class="field"><label class="field-label" for="new-member-name">' + escapeHtml(t('invite.theirName')) + '</label><input class="text-input" id="new-member-name" type="text" placeholder="' + escapeHtml(t('invite.theirNamePlaceholder')) + '" /></div>' +
            '<div class="field"><label class="field-label" for="new-member-pin">' + escapeHtml(t('invite.tempPasscode')) + '</label><input class="text-input" id="new-member-pin" type="text" inputmode="numeric" pattern="[0-9]*" placeholder="' + escapeHtml(t('setup.passcodePlaceholder')) + '" /></div>' +
            '<div id="add-member-error"></div>' +
            '<button type="submit" class="btn btn-primary btn-block">' + escapeHtml(t('invite.addMemberBtn')) + '</button>' +
          '</form>' +
        '</div>'
      ) : '') +
    '</div>';
  root.innerHTML = renderShell('household', body, { title: t('invite.title'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('household'); };
  root.querySelector('#copy-link-btn').addEventListener('click', function () {
    var done = function () { showToast(t('toast.linkCopied')); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(done, done);
    else done();
  });
  var form = root.querySelector('#add-member-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.querySelector('#new-member-name').value.trim();
    var pin = form.querySelector('#new-member-pin').value.trim();
    var errBox = root.querySelector('#add-member-error');
    errBox.innerHTML = '';
    if (!name) { errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('invite.err.name')) + '</span></span>'; form.querySelector('#new-member-name').focus(); return; }
    if (!/^\d{4,6}$/.test(pin)) { errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('setup.err.pin')) + '</span></span>'; form.querySelector('#new-member-pin').focus(); return; }
    apiRequest('POST', '/members', { name: name, pin: pin }).then(function (result) {
      state.members.push(result.member);
      navigate('household');
      showToast(t('toast.memberAdded', { name: name }));
    }).catch(function () {
      errBox.innerHTML = '<span class="field-error">' + icon('warning') + '<span>' + escapeHtml(t('invite.err.name')) + '</span></span>';
    });
  });
}

/* ============================================================
   SETTINGS
   ============================================================ */
var TEXT_SCALE_KEY = 'hn_text_scale';
function getTextScale() { try { return parseFloat(localStorage.getItem(TEXT_SCALE_KEY)) || 1; } catch (e) { return 1; } }
function setTextScale(v) {
  try { localStorage.setItem(TEXT_SCALE_KEY, String(v)); } catch (e) {}
  document.documentElement.style.setProperty('--text-scale', String(v));
}
function renderSettingsScreen(root) {
  var m = currentMember();
  var scale = getTextScale();
  var lang = getLang();
  var body =
    '<div class="stack-lg">' +
      '<div class="card row"><span class="avatar" style="width:52px;height:52px;font-size:1.1rem;" aria-hidden="true">' + escapeHtml(m.initials) + '</span>' +
        '<div class="stack" style="gap:2px;"><strong class="body-lg">' + escapeHtml(m.name) + '</strong><span class="muted">' + escapeHtml(m.role === 'owner' ? t('role.owner') : t('role.member')) + ' · ' + escapeHtml(state.household.name) + '</span></div></div>' +
      '<div class="stack">' +
        '<h2 class="title">' + escapeHtml(t('settings.display')) + '</h2>' +
        '<div class="card stack">' +
          '<div class="stack">' +
            '<span class="row">' + icon('globe', '', 20) + ' ' + escapeHtml(t('settings.language')) + '</span>' +
            '<div class="segmented" role="group" aria-label="' + escapeHtml(t('settings.language')) + '">' +
              '<button type="button" data-lang-option="en" aria-selected="' + (lang === 'en' ? 'true' : 'false') + '" aria-pressed="' + (lang === 'en' ? 'true' : 'false') + '">English</button>' +
              '<button type="button" data-lang-option="my" aria-selected="' + (lang === 'my' ? 'true' : 'false') + '" aria-pressed="' + (lang === 'my' ? 'true' : 'false') + '">မြန်မာ</button>' +
            '</div>' +
          '</div>' +
          '<hr class="divider" />' +
          '<div class="stack">' +
            '<span class="row">' + icon('text', '', 20) + ' ' + escapeHtml(t('settings.textSize')) + '</span>' +
            '<div class="segmented" role="group" aria-label="' + escapeHtml(t('settings.textSize')) + '">' +
              [[0.9,t('settings.textSize.small')],[1,t('settings.textSize.standard')],[1.15,t('settings.textSize.large')],[1.3,t('settings.textSize.extraLarge')]].map(function(o){
                return '<button type="button" data-scale="' + o[0] + '" aria-selected="' + (Math.abs(scale - o[0]) < 0.01 ? 'true':'false') + '">' + escapeHtml(o[1]) + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="stack">' +
        '<h2 class="title">' + escapeHtml(t('settings.more')) + '</h2>' +
        '<div class="card" style="padding:4px 16px;">' +
          '<button type="button" class="drawer-link" style="padding-left:0;" data-nav="household">' + icon('household') + ' ' + escapeHtml(t('settings.householdSettings')) + '</button>' +
          '<hr class="divider" />' +
          '<button type="button" class="drawer-link" style="padding-left:0;" data-nav="help">' + icon('help') + ' ' + escapeHtml(t('settings.privacyHelp')) + '</button>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="btn btn-secondary btn-block" data-action="logout">' + icon('logout', '', 18) + ' ' + escapeHtml(t('menu.logout')) + '</button>' +
    '</div>';
  root.innerHTML = renderShell('settings', body, { title: t('settings.title'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('home'); };
  root.querySelectorAll('[data-scale]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTextScale(parseFloat(b.getAttribute('data-scale')));
      renderSettingsScreen(root);
    });
  });
  root.querySelectorAll('[data-lang-option]').forEach(function (b) {
    b.addEventListener('click', function () {
      var chosen = b.getAttribute('data-lang-option');
      if (chosen === getLang()) return;
      setLang(chosen);
      renderApp();
    });
  });
}

/* ============================================================
   HELP & PRIVACY
   ============================================================ */
function renderHelpScreen(root) {
  var body = '<div class="stack-lg">' +
    '<div class="card stack"><h2 class="title">' + icon('shield', '', 20) + ' ' + escapeHtml(t('help.privacyTitle')) + '</h2>' +
      '<p>' + escapeHtml(t('help.privacyBody')) + '</p></div>' +
    '<div class="card stack"><h2 class="title">' + icon('help', '', 20) + ' ' + escapeHtml(t('help.gettingHelpTitle')) + '</h2>' +
      '<p>' + escapeHtml(t('help.gettingHelpBody')) + '</p></div>' +
    '<div class="card stack"><h2 class="title">' + escapeHtml(t('help.aboutTitle')) + '</h2>' +
      '<p class="muted">' + escapeHtml(t('help.aboutBody')) + '</p></div>' +
  '</div>';
  root.innerHTML = renderShell('settings', body, { title: t('menu.helpPrivacy'), backTo: true, topPad: true });
  bindShellEvents(root);
  onScreenBack = function () { navigate('settings'); };
}


/* ============================================================
   QR CODE ENCODER (Byte mode, ECC level M) — verified bit-exact
   against the reference `qrcode` Python library for versions 1-10.
   ============================================================ */

  // ---- Galois Field GF(256) tables ----
  const EXP_TABLE = new Array(256);
  const LOG_TABLE = new Array(256);
  for (let i = 0; i < 8; i++) EXP_TABLE[i] = 1 << i;
  for (let i = 8; i < 256; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
  }
  for (let i = 0; i < 255; i++) LOG_TABLE[EXP_TABLE[i]] = i;
  function glog(n) { return LOG_TABLE[n]; }
  function gexp(n) { return EXP_TABLE[((n % 255) + 255) % 255]; }

  // ---- Polynomial over GF(256) ----
  class Poly {
    constructor(num, shift) {
      let offset = 0;
      while (offset < num.length && num[offset] === 0) offset++;
      this.num = num.slice(offset).concat(new Array(shift).fill(0));
    }
    get(i) { return this.num[i]; }
    get length() { return this.num.length; }
    multiply(other) {
      const num = new Array(this.length + other.length - 1).fill(0);
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < other.length; j++) {
          num[i + j] ^= gexp(glog(this.num[i]) + glog(other.num[j]));
        }
      }
      return new Poly(num, 0);
    }
    mod(other) {
      if (this.length - other.length < 0) return this;
      const ratio = glog(this.num[0]) - glog(other.num[0]);
      const num = this.num.map((item, i) => {
        const oi = i < other.length ? other.num[i] : 0;
        return item ^ gexp(glog(oi) + ratio);
      });
      return new Poly(num, 0).mod(other);
    }
  }

  // ---- RS block table (count, totalCount, dataCount) triples per version, per ECC (L,M,Q,H) ----
  // Ported verbatim from qrcode.base.RS_BLOCK_TABLE
  const RS_BLOCK_TABLE = [
    [1,26,19],[1,26,16],[1,26,13],[1,26,9],
    [1,44,34],[1,44,28],[1,44,22],[1,44,16],
    [1,70,55],[1,70,44],[2,35,17],[2,35,13],
    [1,100,80],[2,50,32],[2,50,24],[4,25,9],
    [1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],
    [2,86,68],[4,43,27],[4,43,19],[4,43,15],
    [2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],
    [2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],
    [2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],
    [2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],
  ];
  // Only versions 1-10 supported (plenty for a URL); ECC order per version block: L=0,M=1,Q=2,H=3
  const ECC = { L: 0, M: 1, Q: 2, H: 3 };

  function rsBlocks(version, ecc) {
    const idx = (version - 1) * 4 + ecc;
    const row = RS_BLOCK_TABLE[idx];
    const blocks = [];
    for (let i = 0; i < row.length; i += 3) {
      const [count, totalCount, dataCount] = [row[i], row[i + 1], row[i + 2]];
      for (let k = 0; k < count; k++) blocks.push({ totalCount, dataCount });
    }
    return blocks;
  }

  function bitLimit(version, ecc) {
    return rsBlocks(version, ecc).reduce((s, b) => s + b.dataCount * 8, 0);
  }

  // ---- Pattern position table (versions 1-10) ----
  const PATTERN_POSITION_TABLE = [
    [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42],
    [6, 26, 46], [6, 28, 50],
  ];

  // ---- BCH for format/version info ----
  const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
  const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
  const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
  function bchDigit(data) { let d = 0; while (data !== 0) { d++; data >>>= 1; } return d; }
  function bchTypeInfo(data) {
    let d = data << 10;
    while (bchDigit(d) - bchDigit(G15) >= 0) d ^= G15 << (bchDigit(d) - bchDigit(G15));
    return ((data << 10) | d) ^ G15_MASK;
  }
  function bchTypeNumber(data) {
    let d = data << 12;
    while (bchDigit(d) - bchDigit(G18) >= 0) d ^= G18 << (bchDigit(d) - bchDigit(G18));
    return (data << 12) | d;
  }

  // ---- Mask functions ----
  const MASK_FUNCS = [
    (i, j) => (i + j) % 2 === 0,
    (i, j) => i % 2 === 0,
    (i, j) => j % 3 === 0,
    (i, j) => (i + j) % 3 === 0,
    (i, j) => (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0,
    (i, j) => ((i * j) % 2) + ((i * j) % 3) === 0,
    (i, j) => (((i * j) % 2) + ((i * j) % 3)) % 2 === 0,
    (i, j) => (((i * j) % 3) + ((i + j) % 2)) % 2 === 0,
  ];

  // ---- Bit buffer ----
  class BitBuffer {
    constructor() { this.buffer = []; this.length = 0; }
    put(num, length) {
      for (let i = 0; i < length; i++) this.putBit(((num >>> (length - i - 1)) & 1) === 1);
    }
    putBit(bit) {
      const bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) this.buffer.push(0);
      if (bit) this.buffer[bufIndex] |= 0x80 >>> (this.length % 8);
      this.length += 1;
    }
  }

  const PAD0 = 0xec, PAD1 = 0x11;

  function createBytes(buffer, blocks) {
    let offset = 0;
    let maxDc = 0, maxEc = 0;
    const dcdata = [], ecdata = [];
    for (const block of blocks) {
      const dcCount = block.dataCount;
      const ecCount = block.totalCount - dcCount;
      maxDc = Math.max(maxDc, dcCount);
      maxEc = Math.max(maxEc, ecCount);
      const currentDc = [];
      for (let i = 0; i < dcCount; i++) currentDc.push(0xff & buffer.buffer[i + offset]);
      offset += dcCount;

      let rsPoly = new Poly([1], 0);
      for (let i = 0; i < ecCount; i++) rsPoly = rsPoly.multiply(new Poly([1, gexp(i)], 0));

      const rawPoly = new Poly(currentDc, rsPoly.length - 1);
      const modPoly = rawPoly.mod(rsPoly);
      const currentEc = [];
      const modOffset = modPoly.length - ecCount;
      for (let i = 0; i < ecCount; i++) {
        const modIndex = i + modOffset;
        currentEc.push(modIndex >= 0 ? modPoly.get(modIndex) : 0);
      }
      dcdata.push(currentDc);
      ecdata.push(currentEc);
    }
    const data = [];
    for (let i = 0; i < maxDc; i++) for (const dc of dcdata) if (i < dc.length) data.push(dc[i]);
    for (let i = 0; i < maxEc; i++) for (const ec of ecdata) if (i < ec.length) data.push(ec[i]);
    return data;
  }

  function utf8Bytes(str) {
    return Array.from(new TextEncoder().encode(str));
  }

  function charCountBits(version) {
    // Byte mode only: 8 bits for v1-9, 16 bits for v10-26, 16 for v27-40 too
    if (version < 10) return 8;
    return 16;
  }

  function createData(version, ecc, dataBytes) {
    const buffer = new BitBuffer();
    buffer.put(0b0100, 4); // byte mode indicator
    buffer.put(dataBytes.length, charCountBits(version));
    for (const b of dataBytes) buffer.put(b, 8);

    const blocks = rsBlocks(version, ecc);
    const bitLim = blocks.reduce((s, b) => s + b.dataCount * 8, 0);
    if (buffer.length > bitLim) throw new Error("data too long for version");

    for (let i = 0; i < Math.min(bitLim - buffer.length, 4); i++) buffer.putBit(false);
    const delimit = buffer.length % 8;
    if (delimit) for (let i = 0; i < 8 - delimit; i++) buffer.putBit(false);
    const bytesToFill = Math.floor((bitLim - buffer.length) / 8);
    for (let i = 0; i < bytesToFill; i++) buffer.put(i % 2 === 0 ? PAD0 : PAD1, 8);

    return createBytes(buffer, blocks);
  }

  function bestVersion(dataLen, ecc) {
    for (let v = 1; v <= 10; v++) {
      // total bits needed = 4 (mode) + charCountBits + 8*dataLen, plus terminator etc handled by createData
      const headerBits = 4 + charCountBits(v);
      const neededBits = headerBits + dataLen * 8;
      if (neededBits <= bitLimit(v, ecc)) return v;
    }
    throw new Error("data too long (max supported version 10)");
  }

  function lostPoint(modules) {
    const n = modules.length;
    let lost = 0;
    // level 1: runs
    const container = new Array(n + 1).fill(0);
    for (let row = 0; row < n; row++) {
      let prev = modules[row][0], len = 0;
      for (let col = 0; col < n; col++) {
        if (modules[row][col] === prev) { len++; }
        else { if (len >= 5) container[len] += 0; if (len >= 5) lost += (len - 2); len = 1; prev = modules[row][col]; }
      }
      if (len >= 5) lost += (len - 2);
    }
    for (let col = 0; col < n; col++) {
      let prev = modules[0][col], len = 0;
      for (let row = 0; row < n; row++) {
        if (modules[row][col] === prev) { len++; }
        else { if (len >= 5) lost += (len - 2); len = 1; prev = modules[row][col]; }
      }
      if (len >= 5) lost += (len - 2);
    }
    // level 2: 2x2 blocks
    for (let row = 0; row < n - 1; row++) {
      for (let col = 0; col < n - 1; col++) {
        const c = modules[row][col];
        if (c === modules[row][col + 1] && c === modules[row + 1][col] && c === modules[row + 1][col + 1]) {
          lost += 3;
        }
      }
    }
    // level 3: finder-like patterns
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n - 10; col++) {
        const r = modules[row];
        if (!r[col + 1] && r[col + 4] && !r[col + 5] && r[col + 6] && !r[col + 9] &&
          ((r[col + 0] && r[col + 2] && r[col + 3] && !r[col + 7] && !r[col + 8] && !r[col + 10]) ||
           (!r[col + 0] && !r[col + 2] && !r[col + 3] && r[col + 7] && r[col + 8] && r[col + 10]))) {
          lost += 40;
        }
      }
    }
    for (let col = 0; col < n; col++) {
      for (let row = 0; row < n - 10; row++) {
        if (!modules[row + 1][col] && modules[row + 4][col] && !modules[row + 5][col] && modules[row + 6][col] && !modules[row + 9][col] &&
          ((modules[row + 0][col] && modules[row + 2][col] && modules[row + 3][col] && !modules[row + 7][col] && !modules[row + 8][col] && !modules[row + 10][col]) ||
           (!modules[row + 0][col] && !modules[row + 2][col] && !modules[row + 3][col] && modules[row + 7][col] && modules[row + 8][col] && modules[row + 10][col]))) {
          lost += 40;
        }
      }
    }
    // level 4: dark ratio
    let dark = 0;
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (modules[r][c]) dark++;
    const percent = (dark / (n * n)) * 100;
    lost += Math.floor(Math.abs(percent - 50) / 5) * 10;
    return lost;
  }

  function makeMatrix(version, ecc, dataCodewords, maskPattern, test) {
    const n = version * 4 + 17;
    const modules = Array.from({ length: n }, () => new Array(n).fill(null));

    function setupProbe(row, col) {
      for (let r = -1; r <= 7; r++) {
        if (row + r <= -1 || n <= row + r) continue;
        for (let c = -1; c <= 7; c++) {
          if (col + c <= -1 || n <= col + c) continue;
          if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
              (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
              (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            modules[row + r][col + c] = true;
          } else {
            modules[row + r][col + c] = false;
          }
        }
      }
    }
    setupProbe(0, 0);
    setupProbe(n - 7, 0);
    setupProbe(0, n - 7);

    // alignment (must run before timing — the alignment box can straddle
    // the timing line, and timing fill only writes still-null cells)
    const pos = PATTERN_POSITION_TABLE[version - 1];
    for (let i = 0; i < pos.length; i++) {
      for (let j = 0; j < pos.length; j++) {
        const row = pos[i], col = pos[j];
        if (modules[row][col] !== null) continue;
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || (r === 0 && c === 0)) modules[row + r][col + c] = true;
            else modules[row + r][col + c] = false;
          }
        }
      }
    }

    // timing
    for (let r = 8; r < n - 8; r++) if (modules[r][6] === null) modules[r][6] = r % 2 === 0;
    for (let c = 8; c < n - 8; c++) if (modules[6][c] === null) modules[6][c] = c % 2 === 0;

    // type info (format info) — test=false, real bits
    function setupTypeInfo(mp) {
      // Format-info field uses the QR spec's ECC bit values (L=1,M=0,Q=3,H=2),
      // which differ from RS_BLOCK_TABLE's row-offset ordering (L=0,M=1,Q=2,H=3).
      // We are fixed to ECC level M, whose format-info bit value is 0.
      const data = (0 << 3) | mp;
      const bits = bchTypeInfo(data);
      for (let i = 0; i < 15; i++) {
        const mod = !test && ((bits >>> i) & 1) === 1;
        if (i < 6) modules[i][8] = mod;
        else if (i < 8) modules[i + 1][8] = mod;
        else modules[n - 15 + i][8] = mod;
      }
      for (let i = 0; i < 15; i++) {
        const mod = !test && ((bits >>> i) & 1) === 1;
        if (i < 8) modules[8][n - i - 1] = mod;
        else if (i < 9) modules[8][15 - i - 1 + 1] = mod;
        else modules[8][15 - i - 1] = mod;
      }
      modules[n - 8][8] = !test;
    }
    setupTypeInfo(maskPattern);

    if (version >= 7) {
      const bits = bchTypeNumber(version);
      for (let i = 0; i < 18; i++) {
        const mod = !test && ((bits >>> i) & 1) === 1;
        modules[Math.floor(i / 3)][(i % 3) + n - 8 - 3] = mod;
      }
      for (let i = 0; i < 18; i++) {
        const mod = !test && ((bits >>> i) & 1) === 1;
        modules[(i % 3) + n - 8 - 3][Math.floor(i / 3)] = mod;
      }
    }

    // data placement
    const maskFn = MASK_FUNCS[maskPattern];
    let inc = -1, row = n - 1, bitIndex = 7, byteIndex = 0;
    const dataLen = dataCodewords.length;
    for (let colBase = n - 1; colBase > 0; colBase -= 2) {
      const col = colBase <= 6 ? colBase - 1 : colBase;
      while (true) {
        for (const c of [col, col - 1]) {
          if (modules[row][c] === null) {
            let dark = false;
            if (byteIndex < dataLen) dark = ((dataCodewords[byteIndex] >>> bitIndex) & 1) === 1;
            if (maskFn(row, c)) dark = !dark;
            modules[row][c] = dark;
            bitIndex -= 1;
            if (bitIndex === -1) { byteIndex += 1; bitIndex = 7; }
          }
        }
        row += inc;
        if (row < 0 || n <= row) { row -= inc; inc = -inc; break; }
      }
    }
    return modules;
  }

  function encodeQR(text) {
    const ecc = ECC.M;
    const dataBytes = utf8Bytes(text);
    const version = bestVersion(dataBytes.length, ecc);
    const dataCodewords = createData(version, ecc, dataBytes);

    let bestPattern = 0, bestLost = Infinity;
    for (let p = 0; p < 8; p++) {
      const m = makeMatrix(version, ecc, dataCodewords, p, true);
      const lp = lostPoint(m);
      if (lp < bestLost) { bestLost = lp; bestPattern = p; }
    }
    const finalModules = makeMatrix(version, ecc, dataCodewords, bestPattern, false);
    return { modules: finalModules, version, size: version * 4 + 17 };
  }


/* ============================================================
   BOOT
   ============================================================ */
function handleConnectivityChange() {
  if (session.memberId && session.route && session.route.name === 'all-expenses') renderApp();
}
window.addEventListener('online', handleConnectivityChange);
window.addEventListener('offline', handleConnectivityChange);

// Fetches everything private to a logged-in member (expenses, target,
// custom categories/banks/wallets) — called once right after boot finds an
// existing session, and again right after a fresh login, since those are
// the only two moments a member's identity is confirmed.
function loadHouseholdData() {
  return Promise.all([
    apiRequest('GET', '/expenses'),
    apiRequest('GET', '/target'),
    apiRequest('GET', '/categories'),
    apiRequest('GET', '/banks'),
    apiRequest('GET', '/wallets')
  ]).then(function (results) {
    state.expenses = results[0].expenses;
    state.target = results[1].target;
    state.customCategories = results[2].categories;
    state.customBanks = results[3].banks;
    state.customWallets = results[4].wallets;
  });
}

(function boot() {
  var scale = getTextScale();
  document.documentElement.style.setProperty('--text-scale', String(scale));
  document.documentElement.lang = getLang();
  document.documentElement.setAttribute('data-lang', getLang());
  try { document.title = t('brand.name'); } catch (e) {}

  if (!HOUSEHOLD_ID) {
    // Bare "/" — nothing to fetch, this is the "create a household" screen.
    bootState = 'ready';
    renderApp();
    return;
  }

  renderApp(); // shows the loading screen immediately while we fetch

  apiRequest('GET', '').then(function (data) {
    state.household = data.household;
    state.members = data.members;
    return apiRequest('GET', '/me');
  }).then(function (meData) {
    if (!meData.member) {
      bootState = 'ready';
      renderApp();
      return;
    }
    session.memberId = meData.member.id;
    return loadHouseholdData().then(function () {
      bootState = 'ready';
      renderApp();
    });
  }).catch(function (err) {
    bootState = (err && err.status === 404) ? 'not-found' : 'ready';
    renderApp();
  });
})();

})();
