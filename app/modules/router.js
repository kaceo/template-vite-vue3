import { createRouter, createWebHistory } from 'vue-router'



/*
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
export const routes = setupLayouts(generatedRoutes)
console.log('Routes is: ', routes)
*/

const routes = [
  { path: '/',
    component: ()=>import('@/test.vue'),
  },
  { path: '/about',
    component: ()=>import('@/about.md'),
  },
  { path: '/:pathMatch(.*)*',
    component: ()=>import('@/layouts/NotFound.vue'),
  },

]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})

  //extendRoutes: (routes) => setupLayouts(routes),
