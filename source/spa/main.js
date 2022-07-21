import App from './App.vue'
//import '../shared/chrome/tailwind.css'

import { createApp } from 'vue'

//import { createHead } from '@vueuse/head'
//import { createPinia } from 'pinia'
//import i18n from './i18n'
//const head = createHead()

import router from './router'


const app = createApp(App)
app.use(router)
// use i18n, use createPinia() use head
app.mount('#app')
