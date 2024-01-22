import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sassPlugin } from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sassPlugin()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SchoolapUI",
      fileName: (format) => `schoolap-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
