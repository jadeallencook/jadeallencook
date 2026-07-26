// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jadeallencook.com',
  image: {
    domains: ['i.ytimg.com'],
  },
});
