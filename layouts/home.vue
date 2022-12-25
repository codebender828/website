<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
</script>

<template>
  <chakra.div :min-h="['100vh', '100vh', '100vh']" w="100%">
    <TopNavigation>
      <template #name>Jonathan Bakebwa</template>
    </TopNavigation>
    <chakra.div h="12" />
    <slot />
    <LayoutFooter />
  </chakra.div>
</template>
