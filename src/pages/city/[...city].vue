<route lang="yaml">
meta:
  layout: SGLayout
</route>

<template lang="pug">
h1 City Finder

template(v-if="!city || city==='index' ")
  h2 No such city
  button(@click="$router.push('/city')") Go to All City

  button(@click="$router.push('/city/sg')") Singapore
  button(@click="$router.push('/city/hk')") Hong Kong


template(v-else)
  h2 {{ city }}
  hr
  h3 {{ $route.params }}
</template>

<script setup>
//import { useRouter } from 'vue-router'
//const r = useRouter()

const props = defineProps([
  'city'
])

/*
if (!props.city || props.city==='index') {
  console.log('Bounce to city index')
  r.push({ '/city' )
}
*/

//const routeName = 'cityfinder'
//const layout = 'home'

const route = {
  meta: {
    layout: 'SGLayout',
  }
}


/*
const route = {
  meta: {
    layout: 'SGLayout',
  }
}

route //lang="yaml"
name: myname
meta:
  layout: Layout_Page
/route

Markdown({
  headEnabled: true,
  frontmatterDefaults: {
    requireAuth: false,
  },
  style: {
    baseStyle: 'github',
  },
  builders: [
    code({
      theme: 'base',
    }),
    link(),
    meta({
      routeProps: ['layout', 'requireAuth', 'route', 'foo'],
    }),
  ],
}),

title: About
description: About Page in MD
routeName: 'about'
route:
  howdy: doody
  color: blue
layout: default

const route = {"howdy":"doody","color":"blue"}
const layout = "default"
const excerpt = undefined
defineExpose({
  frontmatter: {
    "requireAuth":false,
    "title":"About",
    "routeName":"home",
    "route":{"howdy":"doody","color":"blue"},
    "//layout":"default"},
    excerpt: undefined
})


*/
</script>
