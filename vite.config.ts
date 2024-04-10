import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'api': path.resolve(__dirname, './src/api'),
      'assets': path.resolve(__dirname, './src/assets'),
      'styles': path.resolve(__dirname, './src/styles'),
      'utils': path.resolve(__dirname, './src/utils'),
      'views': path.resolve(__dirname, './src/views'),
    },
  },
});
