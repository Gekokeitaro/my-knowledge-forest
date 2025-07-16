// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeCallouts from 'rehype-callouts';
import astroRehypeRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [],
    //rehypePlugins: [[rehypeCallouts, { theme: "github" }]] --> Para anotar después
    rehypePlugins: [
      [
        rehypeCallouts,
        {
          theme: 'github',
          callouts: {
            note: {
              title: 'Nota',
              indicator: '',
            },
            warning: {
              title: 'Advertencia',
              indicator: '',
            },
            caution: {
              title: 'Cuidado',
              indicator: '',
            },
            important: {
              title: 'Importante',
              indicator: '',
            },
            tip: {
              title: 'Consejo',
              indicator: '',
            },
            spoiler: {
              title: 'Spoiler',
              indicator: '<b>[SPOILER]</b>',
            },
          },
        },
      ],
      astroRehypeRelativeMarkdownLinks,
    ],
  },

  integrations: [react()],

  adapter: node({
    mode: 'standalone',
  }),
});
