import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Specify the correct entry module path
    },
  },

  preview: {
    host: true,
    port: 8080,
  },
});
