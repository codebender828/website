import { defineNuxtPlugin } from "#imports";
import { nextTick } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", async (a) => {
    window.scrollTo({ top: 0 });
  });
});
