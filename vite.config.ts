import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  return {
    plugins: [react()],
    base: repo ? `/${repo}/` : '/',
    define: {
      // Polyfill process.env.API_KEY for the browser build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
