import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4903,
    strictPort: true,
    allowedHosts: ['divinegrace.cyberpunk.co.in'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4903,
    strictPort: true,
    allowedHosts: ['divinegrace.cyberpunk.co.in'],
  },
});

