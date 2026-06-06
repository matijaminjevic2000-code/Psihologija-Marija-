import { defineCollection, z } from 'astro:content';

const teme = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tag: z.string(),
  }),
});

export const collections = { teme };
