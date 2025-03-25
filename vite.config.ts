import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    vue(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    emptyOutDir: true,
    outDir: './dist'
  },
  server: {
    host: false,
    port: 3000,
  },
});
