import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react() // <-- ничего не добавляем вручную
  ],

  base: '/olga-konovalova/',

  server: {
    open: true,
    port: 5173,
    strictPort: true
  },

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 900
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  }
});

