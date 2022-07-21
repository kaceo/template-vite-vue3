<template lang="pug">
h1 TangoEast
h2 Dashboard
  p SPA
  p params
    | {{ params }}
  p route path
    | {{ $route.params }}
</template>

<script setup>
const props = defineProps([
  'params'
])
</script>
