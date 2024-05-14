import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import remarkCustomHeaderId from 'remark-custom-header-id';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: 'https://st3phhays.github.io',
    base: 'choco-astro-test',
    markdown: {
        syntaxHighlight: false, // Temporarily disable syntax highlighting and rely on Prism.js via choco-theme
        remarkPlugins: [
            remarkCustomHeaderId,
        ],
    },
    integrations: [sitemap(), mdx()]
});