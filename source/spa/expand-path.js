import pathmap from './pathmap.yml'

let newroutes = pathmap.map( (x) => {
  return {
    path: x.path,
    name: x.name,
    props: true,
    components: "() => import('/pages/"+x.file+".vue')"
  }
})

console.log('Site map is', newroutes)

export default newroutes



/*
import vroutes from '~pages'

console.log('Vroutes is ', vroutes)

import pathmap from './expand-path.js'
console.log('Pathmap is', pathmap)

const routes = [
  {path: '/city/:params(.*)*',
   name: 'tf-city', props: true,
   component: () => import('./pages/CityHome.vue'),
  },

  {path: '/dash/:params(.*)*',
   name: 'te-dash', props: true,
   component: () => import('./pages/DashHome.vue'),
  },

  //---- no section, just give navigation
  {path: '/',
   name: 'spa-home',
   component: () => import('./pages/SpaHome.vue')
  },

  //---- UNKNOWN path
  {path: '/:pathMatch(.*)*',
   name: 'spa-unknown',
   component: () => import('./pages/NotFound.vue')
  },
]
console.log('Routes is', routes)
*/

