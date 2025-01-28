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
    mongoUrl: process.env.MONGO_URL,
  },

  nitro: {
    preset: "node-server",
    plugins: ["~/server/index.ts"],
    compressPublicAssets: true,
  },

  modules: ["@nuxt/image", "@tresjs/nuxt", "@nuxtjs/device", "@nuxt/icon"],
  css: ["@/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  device: {
    refreshOnResize: true,
  },

  icon: {
    customCollections: [{ prefix: "my-icons", dir: "./assets/icons" }],
  },

  compatibilityDate: "2024-07-13",
});
