import path from 'path'
const r = (n) => path.resolve(__dirname, n)

const spa_name = 'app'
const dist_name = 'dist'


let dist_dir = r('../' + dist_name)

export default {
  alias: {
    '@/': `${ r('../app') }/`,
    '@shared/': `${ r('../app') }/`,
  },

//============================
// shared by both environment
  publicDir: r('../app/public'),
  // .nojekyll, CNAME, favicons,

  cdnDir: r('../app/cdn'),
  // cdn cacheable stuffs

  extraDir: r('../app/extras'),
  // writable during build
  // sitemap.xml, robots.txt
  // atom, pwa, etc

  // layout vue files for Layout plugin
  layoutDir: r('../app/layouts'),

//============================
// ssg (vitepress)
  ssg: {
    inDir: r('../ssg'), // static site source
    outDir: dist_dir,
  },

//============================
// spa (vite+vue)
  spa: {
    inDir: r('../spa'), // spa vue3 source
    outDir: dist_dir,
    root: spa_name,
    pagesDir: r('../spa/pages')
  },
}

