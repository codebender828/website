<template>
  <c-stack
    as="ul"
    text-style="text.sm"
    list-style-type="none"
    px="3"
    :direction="['column', 'column', 'row']"
  >
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
  </c-stack>
</template>

<script lang="ts" setup>
import { chakra } from "@chakra-ui/vue-next";
</script>
