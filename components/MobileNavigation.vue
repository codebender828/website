<template>
  <chakra.div>
    <c-icon-button
      border-width="1px"
      border-style="solid"
      border-color="blackAlpha.50"
      shadow="2xl"
      backdrop-filter="saturate(120%) blur(5px)"
      pos="fixed"
      top="0"
      right="0"
      icon="menu"
      rounded="full"
      variant="flat"
      aria-label="Open mobile navigation"
      @click="open"
    >
      Open
    </c-icon-button>
    <client-only>
      <c-drawer v-model="isOpen" placement="right" close-on-overlay-click>
        <c-drawer-overlay />
        <c-drawer-content py="4">
          <c-drawer-close-button @click="close" />
          <nav-content />
        </c-drawer-content>
      </c-drawer>
    </client-only>
  </chakra.div>
</template>

<script setup lang="ts">
import { chakra, useDisclosure } from "@chakra-ui/vue-next";

const { isOpen, open, close } = useDisclosure({});
</script>
