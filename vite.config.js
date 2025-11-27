import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}', // указываем, какие файлы обрабатывать
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx-source',
          '@babel/plugin-transform-react-jsx-self',
        ],
      },
    }),
  ],

  base: '/olga-konovalova/', // корректная база для GitHub Pages

  server: {
    open: true,          // авто-открытие браузера
    port: 5173,          // фиксированный порт
    strictPort: true,    // ошибка, если порт занят
  },

  build: {
    outDir: 'dist',        // стандартно, но можно поменять
    sourcemap: true,       // помогает при отладке продакшена
    chunkSizeWarningLimit: 900, // мягче лимит разбивки
  },

  resolve: {
    alias: {
      '@': '/src',        // удобные alias для импортов типа "@/components/..."
    },
  },
});
