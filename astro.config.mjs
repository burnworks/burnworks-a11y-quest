// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://burnworks.github.io',
  base: '/burnworks-a11y-quest',
  vite: {
    plugins: [tailwindcss()]
  }
});
