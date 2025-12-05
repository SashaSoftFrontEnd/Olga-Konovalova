import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [
      react({
        jsxRuntime: "automatic",
        include: ["src/**/*.{jsx,tsx}"],
      }),
    ],

    base: "/olga-konovalova/",

    resolve: {
      alias: {
        "src": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },

    server: {
      open: true,
      port: 5173,
      strictPort: false, 
      host: true,
    },

    build: {
      sourcemap: !isProd ? "inline" : false,
      chunkSizeWarningLimit: 900,
      minify: isProd ? "esbuild" : false,
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
          },
        },
      },
    },

    esbuild: {
      legalComments: "none",
    },
  };
});
