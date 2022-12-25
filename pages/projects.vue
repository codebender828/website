<script lang="ts" setup>
import { chakra, CStack, CHeading, CContainer } from "@chakra-ui/vue-next";

definePageMeta({
  layout: "home",
  scrollToTop: true,
});
const NuxtLink = resolveComponent("nuxt-link");
</script>

<template>
  <chakra.main pb="24">
    <c-container max-w="6xl">
      <c-heading
        as="h1"
        text-style="display.4xl"
        font-weight="extrabold"
        letter-spacing="-1px"
      >
        Things I've built
      </c-heading>
      <c-grid :template-columns="['1fr', '1fr', '1.5fr 1fr']" gap="8">
        <c-grid-item>
          <c-stack py="8">
            <chakra.div><work-experience-card /></chakra.div>
          </c-stack>
        </c-grid-item>
        <c-grid-item>
          <c-stack py="8" spacing="5">
            <lazy-work-newsletter />
            <lazy-social-media-links />
          </c-stack>
        </c-grid-item>
      </c-grid>
    </c-container>
  </chakra.main>
</template>
