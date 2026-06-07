import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://formauma.rs',
  output: 'static',
  integrations: [sitemap()],
});
