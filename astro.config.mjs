import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL || 'https://datca.day',
  output: 'static',
  // Pages serves foo.html at /foo; directory output would redirect to /foo/.
  build: { format: 'file' },
  devToolbar: { enabled: false },
  trailingSlash: 'never',
});
