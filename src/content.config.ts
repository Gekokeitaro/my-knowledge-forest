import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: 'src/content/notes',
    }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        created: z.date(),
        modified: z.date(),
        imgs: z.array(z.string()),
        tags: z.array(z.string()),
        alias: z.array(z.string()),
    }),
});

export const collections = { notes };