import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Ensure path module works correctly
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // This sets up an alias for "src" directory
    },
  },
  // Add server options to resolve the "host" and "port" issues on Render
  server: {
    host: '0.0.0.0',
    port: 10000, // This can be customized based on your needs
  }
});
