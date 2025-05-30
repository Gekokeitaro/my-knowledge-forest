// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeCallouts from 'rehype-callouts';
import astroRehypeRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [],
    //rehypePlugins: [[rehypeCallouts, { theme: "github" }]] --> Para anotar después
    rehypePlugins: [rehypeCallouts, astroRehypeRelativeMarkdownLinks],
  },
});
