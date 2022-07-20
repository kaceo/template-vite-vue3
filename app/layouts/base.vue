<template lang="pug">

h1 Base Layout (for the whole site)

main
  router-view

quicknav
</template>

<script setup>
import quicknav from '@/components/chrome/quicknav.vue'
const name='base_layout'
</script>
