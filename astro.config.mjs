import { defineConfig } from 'astro/config';
import process from 'node:process';

export default defineConfig({
  site: process.env.SITE_URL || 'https://rehunss.github.io',
  base: process.env.SITE_BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { server: { allowedHosts: true } },
});
