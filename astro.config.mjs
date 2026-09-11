// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import mermaid from 'astro-mermaid';
import d2 from 'astro-d2';

export default defineConfig({
  site: 'https://docs.carbidecore.online',
  integrations: [
    // d2 diagrams (ADR-034..042). Rendered at build time with the D2.js
    // WebAssembly build (`experimental.useD2js`), so no `d2` binary is
    // required in CI. Fenced ```d2 blocks are compiled to SVG under
    // public/d2/ and referenced by <img>.
    mermaid({
      theme: 'dark',
      autoTheme: true,
    }),
    starlight({
      title: 'CARB/IDE2 Docs',
      description: 'Documentation for the CARB/IDE2 collaborative development environment.',
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        },
        {
          tag: 'link',
          attrs: { rel: 'shortcut icon', href: '/favicon.svg' },
        },
      ],
      logo: {
        alt: 'CARB/IDE2',
        src: './src/assets/c2-logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/fdimitri' },
      ],
      editLink: {
        baseUrl: 'https://github.com/fdimitri/carbide2-docs/edit/main/',
      },
      sidebar: [
        { label: 'Get Started', items: [{ autogenerate: { "directory": "get-started" }}]},
        { label: 'Architecture', items: [{ autogenerate: { "directory": "architecture" }}]},
        { label: 'API Reference', items: [{ autogenerate: { "directory": "api-reference" }}]},
        { label: 'Operations', items: [{ autogenerate: { "directory": "operations" }}]},
        { label: 'Development', items: [{ autogenerate: { "directory": "development" }}]},
        { label: 'Standards', items: [{ autogenerate: { "directory": "standards" }}]},
        { label: 'Design', items: [{ autogenerate: { "directory": "design" }}]},
        { label: 'Release Notes', items: [{ autogenerate: { "directory": "release-notes" }}]},
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    d2({
      layout: 'elk',
      experimental: { useD2js: true },
      inline: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
