<template>

section.p-4.bg-secondary.w-full
  h1 Welcome, {{ user?.displayName }}

  button.my-4.t-btn.inline-flex.items-center.bg-error(
    @click="signOutUser")

    loading.h-5.w-5(v-if="loading")

    font-awesome-icon.mr-2(v-else
      :icon="[\'fas\', \'sign-out-alt\']",
      ) LogOut

  dialog(
    button-name="About Me",
    title="About Me",
    description="Hello there, this is Sushil Kamble. I have created a
      authetication demo using Vue 3, Firebase 9 and Tailwind. Features
      included are sign up form validation, navigation guard,
      firestore read and write demo, page transition,
      and this reuseable modal.",
    :icon="[\'fas\', \'info-circle\']")

</template>

<script>
import Dialog from "@/components/chrome/Dialog.vue";
import Loading from "@/components/chrome/Loading.vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { ref } from "vue";
const loading = ref(false);

import { useAuthState, useSignOut } from "@/firebase";
const { user } = useAuthState();

const signOutUser = async () => {
  loading.value = true;
  await useSignOut();
  await router.replace({ name: "Login" });
  loading.value = false;
};
</script>
