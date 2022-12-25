<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";

import "~/utils/fonts";
useHead({
  title: "Jonathan Bakebwa • Engineer, Founder & Open-source maintainer",
  meta: [
    {
      name: "description",
      content: "Engineer, Founder & Open-source maintainer.",
    },
  ],
});

useSeoMeta({
  charset: "utf-8",
  description: "Engineer, Founder & Open-source maintainer.",
  ogImage: "/jonathan-bakebwa.png",
  ogLocale: "en",
});
</script>
