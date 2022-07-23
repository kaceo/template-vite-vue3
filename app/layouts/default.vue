<template lang="pug">
i DEFAULT LAYOUT
quicknav
main.p-4.border
  router-view
</template>

<script setup>
const name='defaultlayout'
import quicknav from '@/components/chrome/quicknav.vue'
</script>
