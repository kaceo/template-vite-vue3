<template lang="pug">
h1 DEFAULT LAYOUT

quicknav
main
  router-view
</template>

<script setup>
const name='defaultlayout'
import quicknav from '@/components/chrome/quicknav.vue'
</script>
