-- Household Notebook schema for Supabase (Postgres).
-- Paste into Supabase → SQL Editor and click Run.
-- Safe to re-run: every statement uses IF NOT EXISTS.

-- If your project already has the original tables, this is the only new
-- object. Running the rest of the file is still safe.
CREATE TABLE IF NOT EXISTS daily_limits (
  household_id TEXT NOT NULL,
  date TEXT NOT NULL,
  amount REAL NOT NULL,
  PRIMARY KEY (household_id, date)
);

CREATE TABLE IF NOT EXISTS households (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  currency TEXT NOT NULL DEFAULT 'MMK',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS members (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  name TEXT NOT NULL,
  initials TEXT NOT NULL,
  role TEXT NOT NULL,
  pin TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS expenses (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  category_id TEXT,
  detail TEXT,
  amount REAL NOT NULL,
  payment_method TEXT,
  bank_id TEXT,
  wallet_id TEXT,
  member_id TEXT NOT NULL,
  date TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  edited_by TEXT,
  edited_at TEXT,
  receipt_data_urls TEXT
);

CREATE INDEX IF NOT EXISTS idx_expenses_household_date ON expenses(household_id, date);

CREATE TABLE IF NOT EXISTS custom_categories (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  label TEXT NOT NULL,
  icon TEXT
);

CREATE TABLE IF NOT EXISTS custom_banks (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  name TEXT NOT NULL,
  initials TEXT NOT NULL,
  color TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS custom_wallets (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  name TEXT NOT NULL,
  initials TEXT NOT NULL,
  color TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS targets (
  household_id TEXT NOT NULL,
  month TEXT NOT NULL,
  amount REAL NOT NULL,
  PRIMARY KEY (household_id, month)
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL,
  member_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);
