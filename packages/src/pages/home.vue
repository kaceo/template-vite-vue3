<route>
name: home
path: /
</route>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template lang="pug">
//h1 Home
img(alt="Vue logo", src="@/assets/logo.png")
HelloWorld(msg="Hello Vue 3.0 + Vite").
//p This is a strange place, please come here and find out.
</template>
