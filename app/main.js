import '@/styles/tailwind.css'
import '@/styles/site.css'


import AppShell from './App.vue'
import { routes } from '@/modules/router'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(
  AppShell,
  { routes: routes, },
  async ctx => {
    Object.values(
      import.meta.glob('./modules/*.install.js', { eager: true })
    ).map(i => i.install?.(ctx))
  },
  {},
)


/*-------------------------------
SSG mode using Vite-ssg
//routes: router.getRoutes(),
//base: import.meta.env.BASE_URL
 -------------------------------*/
/*-------------------------------
SPA mode using Vite

import { createApp } from 'vue'
const app = createApp(AppShell)

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
//extendRoutes: (routes) => setupLayouts(routes),
app.use(router)

import { createHead } from '@vueuse/head'
app.use(createHead())

app.mount('#app')
-------------------------------*/

