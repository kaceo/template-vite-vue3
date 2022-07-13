import { createApp } from 'vue'

//import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap"
//import './index.css'

//import routes from "~pages";
/*
const router = createRouter({
  // base:
  //history: createWebHashHistory(),
  history: createWebHistory( import.meta.env.BASE_URL, ),
  routes,
})

console.log ('Routes is actually', routes)
*/


import App from './App.vue'
createApp(App)
.use(router)
.mount('#app')


/*
import { ViteSSG } from 'vite-ssg'
export const
createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    Object.values(
      import.meta.globEager('./modules/*.js')
    )
    .map( i => i.install?.(ctx) )
  },
)
*/

