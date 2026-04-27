import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "_site",
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      input: "react-index.html",
    },
  },
});
