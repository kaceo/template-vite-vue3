import generateSitemap from 'vite-plugin-pages-sitemap'
import bins from './bins'

// return a list of paths that are not statically
// in the src/pages file space
const dynamicRoutes = [
  '/dash/sin',
  '/dash/hkg',
  '/dash/tpe',
]

// chain sitemap generator
const sitemap = async(routes) => {
  generateSitemap({
    routes: [ ...routes, ...dynamicRoutes, ],
    hostname: 'https://tangueros.org/',
    changefreq: 'weekly',
    readable: true, //xml in human readable
    filename: 'sitemap',
    allowRobots: true, // robots can crawl in robots.txt
 //   dest: bins.publicDir, extrasDir
    dest: 'extras',

})
}

export const pgconfig = {
  dirs: [
    { dir: bins.testDir, baseRoute: '' },
  ],
  extensions: ['vue', 'md'],
  routeBlockLang: 'yaml',
  //onRoutesGenerated: sitemap,
}

/*
    //{ dir: bins.siteDir, baseRoute: 'site' },
    //{ dir: bins.playDir, baseRoute: 'play' },
  //dirs: [
  //  { dir: bins.spa.pagesDir, baseRoute: '' },
  //],
  //syncIndex: false,
  //routeStyle: 'next',


    //--------------------------------------------
    //-- virtual generator for file-based routing
    Pages({
      extensions: ['vue', 'md'],
      // pagesDir: 'src/pages',
      //dirs: [
      //  { dir: bins.spa.pagesDir, baseRoute: '' },
      //],
      //syncIndex: false,
    }),

  dirs: [
//    { dir: bins.spa.pagesDir, baseRoute: '' },
    { dir: 'src/pages', baseRoute: '' },
    { dir: 'src/features/ * * /pages', baseRoute: 'features' },
    { dir: 'src/admin/pages', baseRoute: 'admin' },
  ],

  exclude: ['* * /components/ *.vue'],

  importMode: 'sync' preload
     'async' ()=>import
     (filepath, options) {}

  routeBlockLang: 'json5' // yaml
  routeStyle: 'next' // nuxt remix
  resolver: 'auto detect' 'vue' PageResolver

  extendRoute (route, parent) {
    if (route.path==='/') return route
    else return { ...route, meta: {auth: true}}
  }
  onRoutesGenerated (routes)
  onClientGenerated

*/
