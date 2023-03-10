import { defineNuxtModule, useNuxt } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "components-chunk",
  },
  setup() {
    const nuxt = useNuxt();
    let dirs: string[];

    nuxt.hook("components:dirs", (_dirs) => {
      dirs = _dirs.map((d) => (typeof d === "string" ? d : d.path));
    });

    const usedComponents = [
      "ContentDoc",
      "ContentRendererMarkdown",
      "ProseP",
      "ProseA",
      "ProseH1",
      "ProseH2",
      "ProseH3",
      "ProseH4",
      "ProseH4",
      "ProseLi",
      "ProseOl",
      "ProseUl",
      "ProseEm",
      "ProseImg",
      "ProseP",
      "ProseTable",
      "ProseThead",
      "ProseStrong",
      "ProseBlockquote",
      "ProseTr",
      "ProseTd",
      "ProseTh",
      "ProseTbody",
      "ProseCode",
      "ProseCodeInline",
      "CardsArticleCardList",
    ];

    // Exclude non-prose content components
    nuxt.hook("components:extend", (components) => {
      const toPurge = [];
      for (const component of components) {
        if (
          "filePath" in component &&
          component.filePath.includes("@nuxt/content")
        ) {
          if (!usedComponents.includes(component.pascalName)) {
            toPurge.push(component);
          }
        }
      }
      for (const component of toPurge) {
        components.splice(components.indexOf(component), 1);
      }
    });

    nuxt.hook("vite:extendConfig", (config, { isServer }) => {
      config.build ||= {};
      config.build.rollupOptions ||= {};
      config.build.rollupOptions.output ||= {};
      if (Array.isArray(config.build.rollupOptions.output) || isServer) return;
      config.build.rollupOptions.output.manualChunks = (id) => {
        if (
          (id.includes("@nuxt/content") || id.includes("ProseImg")) &&
          dirs.some((dir) => id.includes(dir))
        ) {
          return "components-chunk";
        }
      };
    });
  },
});
