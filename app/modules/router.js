import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)
console.log('Routes', generatedRoutes)
console.log('Layouts', routes)

export { routes }



/*
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
//extendRoutes: (routes) => setupLayouts(routes),

const simpleroutes = [
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
console.log('Routes is: ', simpleroutes)

const catchall = {
  path: '/:pathMatch(.*)*',
  name: '404-catchall-layout',
  component: () => import('@/layouts/NotFound.vue')
}
routes.push(catchall)


router.beforeEach((to, from. next) => {
    const store = useRootStore(pinia)
    if (!store.ready)
      store.initialize()
    next()
  })

*/
