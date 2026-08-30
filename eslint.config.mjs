import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // public/app.js is a static asset served as-is (the ported vanilla-JS
    // frontend, see README) — not part of the Next.js app source, so it
    // shouldn't be linted against Next's App Router rules.
    "public/**",
  ]),
]);

export default eslintConfig;
