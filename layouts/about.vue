<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
</script>

<template>
  <chakra.div :min-h="['100vh', '100vh', '100vh']" w="100%">
    <TopNavigation>
      <template #name>Jonathan Bakebwa</template>
    </TopNavigation>
    <chakra.div h="12" />
    <c-container max-w="md" pb="24">
      <c-grid :template-columns="['1fr', '1fr', '1.5fr 1fr']" gap="8">
        <c-grid-item>
          <c-stack py="8">
            <chakra.main class="chakra-prose">
              <slot />
            </chakra.main>
          </c-stack>
        </c-grid-item>
        <c-grid-item>
          <c-stack>
            <lazy-work-newsletter />
            <social-media-links />
          </c-stack>
        </c-grid-item>
      </c-grid>
    </c-container>
    <LayoutFooter />
  </chakra.div>
</template>
