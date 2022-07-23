import path from 'path'
const r = (n) => path.resolve(__dirname, n)

export default {
  alias: {
    '@/':    `${ r('../app') }/`,
    //'@shared/': `${ r('../app') }/`,
  },

  outDir:    r('../dist'),

  inDir:     r('../docs/pages'),
  testDir:   r('../docs/test'),
  siteDir:   r('../docs/site'),
  playDir:   r('../docs/play'),


  rootDir:   r('../app'),
  layoutDir: r('../app/layouts'),
  publicDir: r('../app/public'),
  cdnDir:    r('../app/cdn'),
  extraDir:  r('../app/extras'),

}



/*
//============================
// ssg (vitepress)
  ssg: {
    inDir: r('../ssg'), // static site source
    outDir: r('../dist'),
  },

//============================
// spa (vite+vue)
  spa: {
    inDir: r('../spa'), // spa vue3 source
    outDir: r('../dist'),
    pagesDir: r('../spa/pages')
    root: 'spa',
  },

*/
