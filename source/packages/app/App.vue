<template lang="pug">
.container.px-2.prose
  h1 Hello World
  p(v-for="i in navtop")
    | {{ i.name }}

</template>

<script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import Ero from './components/ero.vue'
/*
//-
  h2.bg-indigo-200 Are You Sleepy?

  img(src="@xassets/lost/ero-2.png"
    alt="Lost Places")
  p This is a lost place



div
  a(href="https://vitejs.dev", target="_blank")
    img.logo(src="/vite.svg", alt="Vite logo")
  a(href="https://vuejs.org/", target="_blank")
    img.logo.vue(src="./assets/vue.svg", alt="Vue logo")
helloworld(msg="Vite + Vue")
*/

import navtop from '../shared/data/navtop.yaml'


</script>

