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
          Engineer, Founder & Open-source maintainer.
        </c-heading>
        <c-text font-size="display.xl" opacity="0.8">
          Hi! I'm Jonathan Bakebwa. A software engineer based in Beijing, China.
          I'm an <chakra.a text-style="anchor">Engineer</chakra.a>,
          <chakra.a text-style="anchor">Startup founder</chakra.a>,
          <chakra.a text-style="anchor">Open-source maintainer</chakra.a> and a
          <chakra.a text-style="anchor">Fisher of men</chakra.a>.
        </c-text>
        <c-text font-size="display.xl" opacity="0.8">
          Welcome to my garden of thoughts.
        </c-text>
        <c-text font-size="display.xl" opacity="0.8">
          My work largely revolves on the front-end with Vue, React &
          TypeScript, Backend with and Node.js and System Infrastructure Design.
          I'm also well-versed with Web 3 technologies like Solana and EVM at
          the protocol level.
        </c-text>
        <social-media-links />
      </c-stack>
      <c-grid :template-columns="['1fr', '1fr', '1.5fr 1fr']" gap="8">
        <c-grid-item>
          <c-stack py="8">
            <c-heading text-style="display.sm">Articles I've written</c-heading>
            <chakra.div><cards-article-card-list /></chakra.div>
          </c-stack>
        </c-grid-item>
        <c-grid-item>
          <c-stack py="6">
            <c-h-stack align-items="center">
              <c-icon font-size="1.5em" name="briefcase" />
              <c-heading text-style="display.sm">My Work</c-heading>
            </c-h-stack>
            <work-experience-card />
          </c-stack>
          <c-stack>
            <lazy-work-newsletter />
          </c-stack>
        </c-grid-item>
      </c-grid>
    </c-container>
  </chakra.main>
</template>
