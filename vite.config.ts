import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { apiProxyPlugin } from './server/api-proxy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // Make the key available to the Vite server process so api-proxy.ts can read it.
  // It is intentionally NOT passed to the client via `define`.
  process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || '';
  process.env.API_KEY        = process.env.API_KEY        || env.API_KEY        || process.env.GEMINI_API_KEY;

  return {
    server: {
      port: 5000,
      host: '0.0.0.0',
      allowedHosts: true,
    },
    preview: {
      port: 5000,
      host: '0.0.0.0',
      allowedHosts: true,
    },
    plugins: [
      react(),
      apiProxyPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
