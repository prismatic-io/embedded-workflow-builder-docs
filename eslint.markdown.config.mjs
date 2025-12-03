/**
 * Eslint config for markdown files.
 */
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    extends: ["markdown/recommended"],
    rules: {
      "markdown/fenced-code-language": "off",
      "markdown/no-missing-label-refs": "off",
    },
  },
]);
