<template>
  <chakra.footer>
    <c-container max-w="6xl" pb="4">
      <c-stack color="blackAlpha.800">
        <lazy-social-media-links />
        <c-stack
          justify-content="space-between"
          :align-items="['flex-start', 'flex-start', 'center']"
          :direction="['column', 'column', 'row']"
        >
          <c-h-stack as="ul" text-style="text.sm" list-style-type="none">
            <chakra.li
              px="2"
              py="2"
              :sx="{
                '.router-link-active': {
                  color: 'blue.400',
                  fontWeight: 'bold',
                },
              }"
            >
              <nuxt-link to="/articles">Articles</nuxt-link>
            </chakra.li>
            <chakra.li
              px="2"
              py="2"
              :sx="{
                '.router-link-active': {
                  color: 'blue.400',
                  fontWeight: 'bold',
                },
              }"
            >
              <nuxt-link to="/projects">Work</nuxt-link>
            </chakra.li>
            <chakra.li
              px="2"
              py="2"
              :sx="{
                '.router-link-active': {
                  color: 'blue.400',
                  fontWeight: 'bold',
                },
              }"
            >
              <nuxt-link to="/about">About</nuxt-link>
            </chakra.li>
          </c-h-stack>
          <chakra.p text-style="text.sm">
            © 2022 Jonathan Bakebwa. All rights reserved.
          </chakra.p>
        </c-stack>
      </c-stack>
    </c-container>
  </chakra.footer>
</template>

<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
</script>
