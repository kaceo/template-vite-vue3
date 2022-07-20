import ssg_generateSitemap from 'vite-ssg-sitemap'


// chain pathsmap to manage which paths become SSG
const pathsmap = (paths, routes) => {
  return []

  console.log('SSG checking paths', paths)
  console.log('SSG checking routes', routes)
  // default, only manage those paths that do not have wildcards
  // or replaceable parameters, i.e. non-dynamic routes
  var p = paths.filter(i =>
    !i.includes(':') &&
    !i.includes('*')
  )
  console.log('SSG candidates', p)
  return p
}

// return a list of paths that are not html
const dynamicRoutes = [
  '/dash/sin',
  '/dash/hkg',
  '/dash/tpe',
]

const excludeRoutes = [
  '/secret',
]

// chain sitemap generator
const sitemap = () => {
  ssg_generateSitemap({
    dynamicRoutes: dynamicRoutes,
    exclude: excludeRoutes,
    extentions: ['html', 'md'],
    hostname: 'https://tangueros.org/',
    changefreq: 'weekly',
    readable: true, //xml in human readable
//    filename: 'sitemap',
//    robots: [{
//      userAgent: '*',
//      allow: '/',
//    }]
    //outDir: 'dist',
 //   : bins.publicDir, extrasDir
//    : 'extras',
})
}

export const ssgconfig = {
 // script: 'async', //async

  //mock = false

  //entry =

  //formatting: 'minify', // none

  //crittersOption

  includedRoutes: pathsmap,

  //onBeforePageRender,

  //onPageRendered,

  //onFinished: sitemap,

//  dirStyle: 'nested', //flat

  //includeAllRoutes: false,
  //format: 'esm',



/*
  includedRoutes(paths, routes) {
    return paths.filter(i => !i.includes('app'))
  },
  includedRoutes(paths, routes) {
    return routes.flatMap((route) => {
      return (route.name === 'city')
      ? `/c/${slug}`
      : route.path
    })
  },

  script
*/

}

