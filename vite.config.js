import { defineConfig } from "vite";
import { resolve } from "path";

const root = "src";

export default defineConfig({
  root,
  base: "./",
  // base: "/",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
        works01: resolve(root, "works01.html"),
        works02: resolve(root, "works02.html"),
        works03: resolve(root, "works03.html"),
        works04: resolve(root, "works04.html"),
      },
    },
  },
  server: {
    host: true,
  },
  css: {
    devSourcemap: true,
  },
});
