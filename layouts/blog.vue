<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
</script>

<template>
  <chakra.div :min-h="['100vh', '100vh', '100vh']" w="100%">
    <TopNavigationDefault><template #name>JB</template> </TopNavigationDefault>
    <chakra.div h="12" />
    <c-container max-w="md" pb="24">
      <chakra.main class="chakra-prose">
        <slot />
      </chakra.main>
    </c-container>
    <LayoutFooter />
  </chakra.div>
</template>
