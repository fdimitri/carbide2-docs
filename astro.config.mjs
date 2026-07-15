// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://docs.carbidecore.online',
  integrations: [
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
        {
          label: 'Get Started',
          autogenerate: { directory: 'get-started' },
        },
        {
          label: 'Architecture',
          autogenerate: { directory: 'architecture' },
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api-reference' },
        },
        {
          label: 'Operations',
          autogenerate: { directory: 'operations' },
        },
        {
          label: 'Development',
          autogenerate: { directory: 'development' },
        },
        {
          label: 'Standards',
          autogenerate: { directory: 'standards' },
        },
        {
          label: 'Design',
          autogenerate: { directory: 'design' },
        },
        {
          label: 'Release Notes',
          autogenerate: { directory: 'release-notes' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
