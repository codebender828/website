<script lang="ts" setup>
import {
  chakra,
  CText,
  CStack,
  CHeading,
  CContainer,
} from "@chakra-ui/vue-next";

definePageMeta({
  layout: "home",
  scrollToTop: true,
});
const NuxtLink = resolveComponent("nuxt-link");
</script>

<template>
  <chakra.main pb="24">
    <c-container max-w="6xl">
      <c-stack spacing="4" align-items="flex-start" max-w="3xl">
        <c-heading
          as="h1"
          text-style="display.4xl"
          font-weight="extrabold"
          letter-spacing="-1px"
        >
          Articles
        </c-heading>
      </c-stack>
      <c-grid :template-columns="['1fr', '1fr', '1.5fr 1fr']" gap="8">
        <c-grid-item>
          <c-stack py="8">
            <chakra.div><cards-article-card-list /></chakra.div>
          </c-stack>
        </c-grid-item>
        <c-grid-item>
          <c-stack>
            <lazy-work-newsletter />
          </c-stack>
        </c-grid-item>
      </c-grid>
    </c-container>
  </chakra.main>
</template>
