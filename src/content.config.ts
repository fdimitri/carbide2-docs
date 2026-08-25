import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// ADR/proposal metadata. `extends` is a single parent (the decision this one
// builds on); `related` is a list of cross-references. Rendered by
// src/components/AdrHeader.astro.
const adrLink = z.object({
  label: z.string(),
  href: z.string(),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: docsSchema({
    extend: z.object({
      status: z
        .enum(['Exploratory', 'Proposed', 'Accepted', 'Implemented', 'Superseded', 'Deprecated', 'Rejected'])
        .optional(),
      implementation_exists: z.boolean().default(false),
      date: z.string().optional(),
      note: z.string().optional(),
      extends: adrLink.optional(),
      supersedes: z.array(adrLink).default([]),
      related: z.array(adrLink).default([]),
    }),
  }),
});

export const collections = { docs };
