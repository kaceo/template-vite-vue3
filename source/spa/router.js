import { createRouter, createWebHistory } from 'vue-router'

//import vroutes from '~pages'
import vroutes from 'virtual:generated-pages'
const catchall = {
  path: '/:pathMatch(.*)*',
  name: 'spa-unknown',
  //component: () => import('./pages/NotFound.vue')
  component: () => import('./pages/NotFound.vue')
}

vroutes.push(catchall)

console.log('Vroutes is ', vroutes)

import pathmap from './pathmap'
//console.log('Pathmap is ',pathmap )

const router = createRouter({
  history: createWebHistory(),
 // routes: pathmap,
  routes: vroutes,
})

export default router
