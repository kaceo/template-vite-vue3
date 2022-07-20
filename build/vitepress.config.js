import bins from './shared/bins'

const viteconfig = {
  //root: bins.ssg.inDir,
  //base: '/',
  //mode:
  //publicDir: bins.publicDir,
  publicDir: false,

  build: {
    emptyOutDir: false,
    //emptyOutDir: true,
    //outDir: bins.spa.outDir,
    //rollupOptions: {
    //  input: {
    //    spa: `${bins.spa.inDir}/_spa.html`,
    //    //ssg: `${bins.ssg.inDir}/index.html`,
    //  },
    //},
    //chunkSizeWarningLimit: 1024,
    //reportCompressedSize: false,
  },

  resolve: {
    alias: bins.alias,
  },

  //server: {...ports,},
  //plugins: [ Vue(), ],
}

const mdconfig = {
  xhtmlOut: true,
  lineNumbers: true,
  anchor: { permalink: false },
  toc: { includeLevel: [1, 2] },
  linkify: false,
//    config: (md) => {
//      md.use(cicons) // icons fa, mdi
//      .use(chints) // asset hints
//      .use(fn) // footnotes
//      .use(dl) // deflists
//    },
}

const vplayout = {
  outDir: bins.ssg.outDir,
  srcDir: bins.ssg.inDir,
  srcExclude: [
    "components/**/*",
    "**/_*/*",
  ],
  //base: '/',
}

const clientconfig = {
  //head
  //nav
  //sidebar
  //footer
  //editlink
  //title
  //description
}

//////////////////////////////////////////////////
// SITE DATA CUSTOMIZATION
//////////////////////////////////////////////////
export default {
  ignoreDeadLinks: true, //don't fail on dead links
  appearance: true, //inject dark mode support
  lang: 'en-us', //always English


  description: 'Vitepress with Vite config',
  title: 'First Vitepress',
  //titleTemplate
  //lastUpdated:
  //scrollOffset: 'header',
  //shouldPreload: false,
  //locales:
  //head: cientconfig.head,
  //editLink: {},
  //footer: clientconfig.footer

  themeConfig: {
    //clientconfig.nav
    //clientconfig.sidebar
  },

  ...vplayout,
  markdown: mdconfig,
  vite: viteconfig,

  //vue: []
  //extends
  //mpa
  //buildEnd

}

