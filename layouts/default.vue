<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
</script>

<template>
  <chakra.div :min-h="['100vh', '100vh', '100vh']" w="100%">
    <TopNavigationDefault>
      <template #name>JB</template>
    </TopNavigationDefault>
    <chakra.div h="12" />
    <c-container max-w="3xl" pb="24">
      <main class="chakra-prose">
        <slot />
      </main>
      <c-stack my="10">
        <LazyWorkNewsletter />
      </c-stack>
    </c-container>
    <LayoutFooter />
  </chakra.div>
</template>
