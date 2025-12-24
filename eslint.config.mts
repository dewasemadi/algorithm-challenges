import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"
import tsparser from "@typescript-eslint/parser"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ["js/recommended"],
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
    },
    rules: {
      ...prettierConfig.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "warn",
      semi: "off",
      quotes: "off",
      "prettier/prettier": ["error", { semi: false, singleQuote: false }],
    },
  },
  tseslint.configs.recommended,
])
