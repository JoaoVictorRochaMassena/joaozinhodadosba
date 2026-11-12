import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        inicio: resolve("index.html"),
        angular: resolve("angular/index.html"),
        vue: resolve("vue/index.html"),
      },
    },
  },
});
