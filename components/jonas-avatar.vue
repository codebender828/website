<template>
  <nuxt-link to="/">
    <c-h-stack align-items="center" spacing="4">
      <c-aspect-ratio
        ref="avatarRef"
        transform="var(--avatar-image-transform)"
        data-avatar
        max-width="96px"
        :ratio="1"
        rounded="full"
        overflow="hidden"
        z-index="banner"
      >
        <img src="/assets/images/jbakebwa-headshot.jpeg" />
      </c-aspect-ratio>
      <c-animate-presence type="slideUp">
        <chakra.p font-weight="bold" v-if="isOpen"
          ><slot name="name"
        /></chakra.p>
      </c-animate-presence>
    </c-h-stack>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { useElementBounding } from "@vueuse/core";
import { canUseDOM, unrefElement } from "@chakra-ui/vue-utils";
import { chakra, useDisclosure } from "@chakra-ui/vue-next";

const { isOpen, open, close } = useDisclosure({});

const { fullPath } = useRoute();
const name = computed(() => (fullPath !== "/" ? "JB" : "Jonathan Bakebwa"));

const avatarRef = ref(null);
const { x, y, top, right, bottom, left, width, height } =
  useElementBounding(avatarRef);

const initialTop = ref<number>();
const finalTop = ref(remToPx("1.5rem"));

const unwatch = watch(top, (val) => {
  if (!initialTop.value) {
    initialTop.value = val;
    unwatch();
  }
});

const scaledAvatarWidth = computed(() => {
  if (!canUseDOM() || !initialTop.value) return "100px";
  else {
    if (top.value === initialTop.value) return "100px";
    if (top.value > initialTop.value) return "100px";
    else if (top.value < finalTop.value) return "50px";
    else {
      return `${(1 - finalTop.value / top.value) * 100}px`;
    }
  }
});

function setProperty(property: string, value: any) {
  return document.documentElement.style.setProperty(property, value);
}

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}
let avatarOffset = computed<number>(
  () => unrefElement(avatarRef.value)?.offsetTop - finalTop.value ?? 0
);

function updateAvatarStyles() {
  let maxScale = 1;
  let minScale = 48 / 64;
  let initialX = 0;
  let finalX = 2 / 16;

  let scrollY = avatarOffset.value - window.scrollY;

  let scale = (scrollY * (maxScale - minScale)) / avatarOffset.value + minScale;
  scale = clamp(scale, maxScale, minScale);

  let x = (scrollY * (initialX - finalX)) / avatarOffset.value + finalX;
  x = clamp(x, initialX, finalX);

  setProperty(
    "--avatar-image-transform",
    `translate3d(${x}rem, 0, 0) scale(${scale})`
  );

  if (x === finalX) {
    open();
  } else {
    close();
  }
}

onMounted(async () => {
  if (!canUseDOM()) return;
  await nextTick();

  updateAvatarStyles();
  window.addEventListener("scroll", updateAvatarStyles, { passive: true });
  window.addEventListener("resize", updateAvatarStyles, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateAvatarStyles);
  window.removeEventListener("resize", updateAvatarStyles);
});
</script>

<style>
html {
  --avatar-width: v-bind(scaledAvatarWidth);
}

[data-avatar=""] {
  width: v-bind(scaledAvatarWidth);
  min-width: 50px;
  max-width: 100px;
}
</style>
