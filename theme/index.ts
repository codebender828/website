import { extendTheme } from "@chakra-ui/vue-next";
import { textStyles } from "~/theme/text-styles";
import { globalStyles } from "~/theme/global-styles";
import "@fontsource/ibm-plex-mono";
import "@fontsource/dm-sans";

import { semanticTokens } from "~/theme/semantic-tokens";

export default extendTheme({
  colors: {
    emerald: {
      DEFAULT: "#30855F",
      default: "#30855F",
      50: "#B6E5D0",
      100: "#A3DEC4",
      200: "#7ED0AB",
      300: "#58C393",
      400: "#3EAA7A",
      500: "#30855F",
      600: "#226044",
      700: "#153A29",
      800: "#07150F",
      900: "#000000",
    },
    blue: {
      900: "#000b1f",
      800: "#01215e",
      700: "#033799",
      600: "#084dcf",
      500: "#1263fc",
      400: "#2178ff",
      300: "#378eff",
      200: "#53a3ff",
      100: "#9acdff",
      50: "#c3e2ff",
      10: "#edf6ff",
    },
    discord: {
      primary: "#7289DA",
      accessible: "#5570D2",
    },
  },
  fonts: {
    heading:
      'IBM Plex Sans, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'IBM Plex Sans, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"IBM Plex Mono", monospace;',
  },
  shadows: {
    outline: "0 0 0 4px rgba(47, 133, 90, 0.62)",
    search:
      "0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2)",
  },
  styles: {
    global: globalStyles,
  },
  textStyles,
  semanticTokens,
});
