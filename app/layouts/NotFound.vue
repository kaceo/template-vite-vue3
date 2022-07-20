<template lang="pug">
section.p-4.bg-secondary.w-full
  h1.text-center Page Not Found
  p.mt-4.text-center
    router-link.bg-primary.t-btn(
      to='/') Go Home

quicknav
</template>

<script setup>
const name = 'notfoundlayout'
import quicknav from '@/components/chrome/quicknav.vue'
</script>
