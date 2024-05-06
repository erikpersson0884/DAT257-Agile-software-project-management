import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration with selective proxy for /api/ calls
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      // Proxy all /api/v2/* calls to the specified address
      "/api/": {
        target: "http://localhost:8080/",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});


