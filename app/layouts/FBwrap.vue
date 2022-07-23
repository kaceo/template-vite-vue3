<template lang="pug">
.flex.items-center.justify-center(
  v-if="isLoading"
  style="height: 80vh")

  Loading.h-16.w-16

.flex.flex-col.min-h-screen(
  v-else)

  Navbar
  .t-main-set.flex-1.grid.place-items-center
    router-view(v-slot="{ Component, route }")
      transition(name="slide" mode="out-in")
        component(:is="Component" :key="route.path")
  Footer
</template>

<script setup>
import Navbar from "@/components/chrome/Navbar.vue"
import Footer from "@/components/chrome/Footer.vue"
import Loading from "@/components/chrome/Loading.vue"
//import { getUserState } from "@/firebase"
import { ref } from "vue"

const name = "FBwrap"
const isLoading = ref(false)
//ref(true)

/*
getUserState().then(() => {
  isLoading.value = false
})
*/
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.2s ease-out;
}
.slide-enter-from,
.slide-enter-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>
