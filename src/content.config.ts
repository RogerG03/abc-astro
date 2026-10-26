import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const landings = defineCollection({
  // Locale paths must remain part of the ID: a shared slug otherwise overwrites translations.
  loader: glob({ pattern: '**/*.json', base: './src/content/landings', generateId: ({ entry }) => entry.replace(/\.json$/, '') }),
  schema: z.object({
    locale: z.enum(['es', 'en']), slug: z.string().regex(/^[a-z0-9-]+$/),
    kind: z.enum(['saas', 'studio', 'event']), name: z.string().min(1), title: z.string().min(1),
    description: z.string().min(1), action: z.string().min(1),
    sections: z.array(z.enum(['features', 'faq', 'cta'])).refine((s) => new Set(s).size === s.length, 'Sections must be unique'),
    features: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).min(1),
  }),
});
export const collections = { landings };
