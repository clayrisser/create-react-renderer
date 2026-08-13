import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.spec.tsx", "tests/**/*.test.tsx"],
    silent: "passed-only",
    coverage: {
      provider: "v8",
      include: ["src/**"],
      exclude: ["src/**/*.spec.tsx", "src/@types/**"],
      reporter: ["text", "lcov"],
    },
  },
});
