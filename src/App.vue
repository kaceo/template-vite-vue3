<script>
import Frame from './skin/framepanel.vue'

export default {
  name: 'App',
  components: {
    Frame,
  },
}
</script>

<template lang="pug">
div
  router-link(:to="{ name: 'home' }") Home
  span &nbsp;|&nbsp;
  router-link(:to="{ name: 'about' }") Go to About
  span &nbsp;|&nbsp;
  router-link(:to="{ name: 'contact' }") Go to Contact
Frame
  router-view
</template>
