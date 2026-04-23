// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: "/",
  build: {
    assets: 'assets', 
  },
  
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pr"],
  },
  devToolbar: {
      enabled: false,
  },
  vite: {
  },
});