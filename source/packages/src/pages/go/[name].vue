<script setup>

const props = defineProps({
  name: String
})

</script>



<template lang="pug">
h1 You came here!
h3 {{ props.name }}
</template>
