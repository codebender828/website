import ChakraUIVuePlugin, { chakra, extendChakra } from "@chakra-ui/vue-next";
import { domElements } from "@chakra-ui/vue-system";
import { hydrate, injectGlobal } from "@emotion/css";
import { css, toCSSVar } from "@chakra-ui/styled-system";
import { get, runIfFn } from "@chakra-ui/utils";
import customTheme from "../theme";

import * as iconSet from "../utils/icons";

const { extendedIcons: extend, ...library } = iconSet;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    ChakraUIVuePlugin,
    extendChakra({
      cssReset: true,
      emotionCacheOptions: {
        key: "css",
      },
      extendTheme: customTheme,
      icons: {
        library,
        extend,
      },
    })
  );

  /**
   * TODO: Add to Chakra UI Vue Nuxt Plugin
   */
  const theme = toCSSVar(customTheme);
  const styleObjectOrFn = get(theme, "styles.global");
  const globalStyles = runIfFn(styleObjectOrFn, {
    theme,
    colorMode: "light",
  });

  const styles = css(globalStyles)(theme);

  if (styles) {
    injectGlobal(styles);
  }

  domElements.forEach((tag) => {
    nuxtApp.vueApp.component(`chakra.${tag}`, chakra(tag));
  });

  if (typeof window !== "undefined") {
    const emotionIds = (window as any).$emotionIds;
    hydrate(emotionIds);
  }
});
