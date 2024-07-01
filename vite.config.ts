import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import { glob } from "glob";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"], exclude: ["lib/**/*.stories.tsx"] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: [resolve(__dirname, "lib/main.tsx")],
      formats: ["es"],
    },
    rollupOptions: {
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", { ignore: "lib/**/*.stories.tsx" })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      external: [
        "react",
        "react/jsx-runtime",
        "antd",
        "classnames",
        "react-intl",
        "sass",
        "ag-grid-react",
        "ag-grid-community",
        "@ag-grid-enterprise/set-filter",
        "@ag-grid-enterprise/server-side-row-model"
      ],
    },
  },
});
