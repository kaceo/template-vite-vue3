<template lang="pug">
h1 TangoFinder
h2 City
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
