import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Owner-approved browser baseline (2026-10-29), for both JS and CSS transforms.
const browserTargets = ["chrome111", "edge111", "firefox128", "safari16.4"];

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: browserTargets,
    cssTarget: browserTargets
  }
});
