import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  runtimeConfig: {
    mongoURL: process.env.MONGO_URL,
    spotifyID: process.env.SPOTIFY_CLIENT_ID,
    spotifySecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
  },

  nitro: {
    preset: "node-server",
    plugins: [resolve(__dirname, "server/index.ts")],
    compressPublicAssets: true,
  },

  modules: ["@nuxt/image", "@tresjs/nuxt", "@nuxt/icon"],
  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@tresjs/nuxt", "@tresjs/core", "@tresjs/cientos", "three"],
    },
  },

  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [{ prefix: "my-icons", dir: "app/assets/icons" }],
  },

  devtools: { enabled: false },

  compatibilityDate: "2026-06-20",
});
