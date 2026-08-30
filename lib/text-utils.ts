// Ported verbatim from the original app-logic.js so generated initials/colors
// match exactly between the old artifact and this backend.

export function initialsOf(name: string): string {
  const words = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

const CUSTOM_BADGE_COLORS = ["#3C6E78", "#A5710A", "#1D5FA8", "#2E7D5B", "#B85A15", "#B23B2E", "#6E6154"];

export function colorForName(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return CUSTOM_BADGE_COLORS[hash % CUSTOM_BADGE_COLORS.length];
}
