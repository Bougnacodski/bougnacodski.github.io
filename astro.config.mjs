import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// À adapter : l'adresse publique de ton site.
// - Dépôt nommé <pseudo>.github.io  → site: 'https://<pseudo>.github.io', pas de base
// - Autre nom de dépôt (ex. "site") → site: 'https://<pseudo>.github.io', base: '/site'
// - Nom de domaine personnel        → site: 'https://ton-domaine.fr'
export default defineConfig({
  site: 'https://bougnacodski.github.io',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-GB' } },
    }),
  ],
  markdown: {
    // Processeur Markdown « unified » : nécessaire pour les formules (remark-math + KaTeX)
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
