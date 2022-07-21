import '@/styles/tailwind.css'

//import { router, routes } from './modules/router.jsnot'
//import { createPinia } from 'pinia'

/*-------------------------------
SPA mode using Vite
import { createHead } from '@vueuse/head'
app.use(createHead())
-------------------------------*/

import { createApp } from 'vue'
//import { router, routes } from '@/modules/router'

import { router } from './modules/router'


import Shell from './App.vue'
const app = createApp(Shell)
app.use(router)
app.mount('#app')


/*-------------------------------
SSG mode using Vite-ssg

import { ViteSSG } from 'vite-ssg'
import { router, routes } from '@/modules/router'

export const createApp = ViteSSG(
  App,
  {
   // routes: router.getRoutes(),
    routes: routes,
    //base: import.meta.env.BASE_URL
  },
  async ctx => {
    Object.values(
      import.meta.glob('./modules/*.js', { eager: true })
    ).map(i => i.install?.(ctx))
  },
  {},
)

-------------------------------*/

/*-------------------------------*/
/*
  ctx  = {
  app, router, routes,
  isClient, initialState,
  onSSRAppRendered,
  })

  const pinia = createPinia()
  app.use(pinia)
  if (import.meta.env.SSR) {
    initialState.pinia = pinia.state.value
  }
  else {
    pinia.state.value = initialState.pinia || {}
  }

  router.beforeEach((to, from. next) => {
    const store = useRootStore(pinia)
    if (!store.ready)
      store.initialize()
    next()
  })

<ClientOnly> component transports js to client
useHead({ title:, meta: }) - from '@vueuse/head'
critters = critial css
*/
