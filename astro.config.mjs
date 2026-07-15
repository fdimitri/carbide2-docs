// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://docs.carbidecore.online',
  integrations: [
    starlight({
      title: 'Carbide2 Docs',
      description: 'Documentation for the Carbide2 collaborative development environment.',
      logo: {
        alt: 'Carbide2',
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
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
