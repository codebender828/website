<template>
  <c-stack
    rounded="2xl"
    border-width="2px"
    border-color="blackAlpha.50"
    border-style="solid"
    px="6"
    pt="4"
    pb="6"
    backdrop-filter="saturate(120%) blur(5px)"
    spacing="2"
  >
    <chakra.h4 text-style="display.xs"> Join my newsletter </chakra.h4>
    <chakra.p text-style="text.sm" color="gray.600">
      Be updated when I publish something meaningful. Opt-out at any time.
    </chakra.p>
    <c-form-control size="sm">
      <c-h-stack spacing="4">
        <c-input
          id="email"
          v-model="email"
          focus-border-color="blue.300"
          type="email"
          placeholder="Email address"
        />
        <c-button
          left-icon="mail"
          color-scheme="blue"
          @click="subscribeContact"
          :is-loading="isLoading"
          >Join</c-button
        >
      </c-h-stack>
    </c-form-control>
  </c-stack>
</template>

<script lang="ts" setup>
import { chakra } from "@chakra-ui/vue-next";
const config = useRuntimeConfig();

const { fullPath } = useRoute();

const email = ref("");
const isLoading = ref(false);

async function subscribeContact() {
  try {
    isLoading.value = true;
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: config.public.newsletter.mailToken!,
      },
      body: JSON.stringify({
        email: email.value,
        notes: "Subsribed email",
        referrer_url: fullPath,
      }),
    });
    if (!res.ok) {
      const message = await res.json();
      if (message.detail) {
        throw new Error(message.detail);
      }
      if (message.email) {
        throw new Error(message.email[0]);
      }
      throw new Error(message[0]);
    }
    const data = await res.json();
    console.debug("new email subscribed", data);
    alert(
      "SUCCESS! Subscribed " +
        '"' +
        email.value +
        '". Please check your email to confirm your subscription.'
    );
  } catch (error: any) {
    console.error(error);
    alert(`ERROR: Could not subscribe email: ${error.message}`);
  } finally {
    email.value = "";
    isLoading.value = false;
  }
}
</script>
