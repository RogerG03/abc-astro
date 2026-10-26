import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL || 'https://example.com';
const url = new URL(site);
if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('SITE_URL must be an absolute HTTP(S) origin without a path, query or fragment.');
}
export default defineConfig({
  site, output: 'static', trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
});
