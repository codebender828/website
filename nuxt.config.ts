import { componentResolver } from "@chakra-ui/vue-auto-import";
import Components from "unplugin-vue-components/vite";
import { config } from "dotenv-defaults";
import { resolve } from "path";

config({
  path: resolve("./.env"),
  debug: process.env.NODE_ENV !== "production",
});

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/jonathan-bakebwa.png" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      newsletter: {
        mailToken: process.env.NEWSLETTER_TOKEN,
      },
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [componentResolver as any],
      }),
    ],
  },
  modules: [
    "@nuxt/content",
    (_options, nuxt) => {
      nuxt.hook("nitro:config", (config) => {
        // Prevent inlining emotion (+ the crucial css cache!) in dev mode
        if (nuxt.options.dev) {
          if (config.externals) {
            config.externals.external ||= [];
            config.externals.external.push("@emotion/server");
          }
        }
      });
    },
    "~/modules/chakra.module.ts",
    "~/modules/content-chunks.module.ts",
    "@nuxt/image-edge",
  ],
  plugins: ["~/plugins/router.ts", "~/plugins/chakra.ts"],
  css: ["~/styles/fonts.scss", "~/styles/prism.scss"],
  content: {
    documentDriven: true,
    markdown: {
      toc: { depth: 5, searchDepth: 3 },
      remarkPlugins: ["remark-prism"],
      rehypePlugins: [
        "rehype-prism-plus",
        [
          "rehype-autolink-headings",
          {
            behavior: "append",
            test: ["h2", "h3", "h4"],
            properties: { className: ["heading-anchor"] },
          },
        ],
      ],
    },
  },
  /**
   * @nuxt/image-edge screen optimization option
   */
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  dir: {
    public: "public",
  },
});
