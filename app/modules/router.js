import { createRouter, createWebHistory } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

export const routes = setupLayouts(generatedRoutes)
console.log('Routes is: ', routes)

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

  //extendRoutes: (routes) => setupLayouts(routes),
