<route lang="yaml">
path: "/"
</route>

<template lang="pug">
//h1 Home
img(alt="Vue logo", src="@/assets/logo.png")
//HelloWorld(msg="Hello Vue 3.0 + Vite").
//p This is a strange place, please come here and find out.
</template>



<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'PageHome',
  components: {
    HelloWorld
  }
}
</script>
