const pathmap = [
  {
    path: '/city/:params(.*)*', props: true,
    name: 'tf-city',
    component: () => import('./pages/CityHome.vue'),
  },
  {path: '/dash/:params(.*)*', props: true,
   name: 'te-dash',
   component: () => import('./pages/DashHome.vue'),
  },
  //---- no section, just give navigation
  {
    path: '/',
    name: 'spa-home',
    component: () => import('./pages/Index.vue')
  },
  //---- UNKNOWN path
  {
    path: '/:pathMatch(.*)*',
    name: 'spa-unknown',
    component: () => import('./pages/NotFound.vue')
    //component: () => import('./pages/[...all].vue')
  },
]

export default pathmap
