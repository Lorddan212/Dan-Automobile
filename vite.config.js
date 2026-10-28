import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Preserve the Vite 5 browser target during the tooling upgrade.
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"]
  }
});
