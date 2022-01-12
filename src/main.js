import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import './index.css'

import routes from "~pages";
const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
})

console.log ('Routes is actually', routes)

import App from './App.vue'
createApp(App)
.use(router)
.mount('#app')
