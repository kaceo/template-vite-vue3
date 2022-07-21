<template lang="pug">
main.border
  h1 This is my App
  p.text-center Nice to meet you
  .container.p-4.border.bg-pink-200
    router-view
    p Good Ending!

</template>

<script setup>
const name='Example App'
</script>
