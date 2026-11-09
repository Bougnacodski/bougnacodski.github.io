import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles : src/content/blog/fr/*.md et src/content/blog/en/*.md
const blog = defineCollection({
  loader: glob({ pattern: '{fr,en}/**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // `comments: false` désactive les commentaires sur cet article.
    comments: z.boolean().default(true),
    // Relie deux traductions dont les noms de fichiers diffèrent (ex. bienvenue.md ↔ welcome.md).
    translationKey: z.string().optional(),
  }),
});

// Projets : src/content/projets/fr/*.md et src/content/projets/en/*.md
const projets = defineCollection({
  loader: glob({ pattern: '{fr,en}/**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    order: z.number().default(100),
  }),
});

export const collections = { blog, projets };
