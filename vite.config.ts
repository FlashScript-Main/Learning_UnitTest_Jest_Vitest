// Root 👉🏻 "vite.config.ts"

/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        css: true,
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            include: ["src/components/**/*.{ts,tsx}"],
            exclude: [
                "node_modules/**",
                "**/*.d.ts",
                "**/*.test.{ts,tsx}",
                "**/*.spec.{ts,tsx}",
            ],
        },
    },
});
