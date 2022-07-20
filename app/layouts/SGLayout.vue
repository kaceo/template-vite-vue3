<template lang="pug">
h1 TangoSingapore LAYOUT
h2 Welcome to Singapore

main
  router-view
quicknav

</template>

<script setup>
const name = 'tspore'
import quicknav from '@/components/chrome/quicknav.vue'
</script>
