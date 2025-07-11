// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://bessonovmax.github.io/",
  base: "/global-express/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },

  integrations: [react()],
});
