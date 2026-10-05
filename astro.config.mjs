import { defineConfig } from 'astro/config';

// Real domain by default. The preview build sets BASE=/springboro-hydro-jetting-pros for GitHub Pages.
export default defineConfig({
  site: 'https://springborohydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
