<script setup lang="ts">
import { chakra } from "@chakra-ui/vue-next";
import { useWindowScroll } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import NavContent from "./NavContent.vue";
import MobileNavigation from "./MobileNavigation.vue";

const headerRef = ref<{ $el: HTMLDivElement } | undefined>(undefined);

const { y } = useWindowScroll();

const height = ref(0);

onMounted(() => {
  height.value = headerRef.value?.$el.getBoundingClientRect().height ?? 0;
});

const headerShadow = computed(() => {
  return y.value > height.value ? "sm" : undefined;
});
</script>

<template>
  <chakra.div
    bg-gradient="linear(to-b, white 0%, white 80%, transparent)"
    position="sticky"
    z-index="banner"
    top="-72px"
    :sx="{
      '&:stuck': {
        backdropFilter: 'saturate(120%) blur(5px)',
      },
    }"
    pb="8"
  >
    <c-container max-w="3xl">
      <chakra.div h="24" />
      <jonas-avatar>
        <template #name>
          <slot name="name" />
        </template>
      </jonas-avatar>
      <chakra.nav
        ref="headerRef"
        :box-shadow="headerShadow"
        transition="box-shadow 0.2s, background-color 0.2s"
        pos="fixed"
        top="6"
        z-index="1"
        :left="[null, null, '50%']"
        :right="[8, 8, null]"
        :transform="[null, null, 'translateX(-50%)']"
        backdrop-filter="saturate(120%) blur(5px)"
        border-width="1px"
        border-style="solid"
        border-color="blackAlpha.50"
        width="fit-content"
        rounded="full"
        shadow="2xl"
      >
        <nav-content :display="['none', 'none', 'flex']" />
        <mobile-navigation :display="['block', 'block', 'none']" />
      </chakra.nav>
    </c-container>
  </chakra.div>
</template>
