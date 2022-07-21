/* this file performs all the plugins */
import bins from './bins.js'

//import Yaml from '@rollup/plugin-yaml'
import Formats from '@originjs/vite-plugin-content'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
//import { VitePWA } from 'vite-plugin-pwa'
//import Inspect from 'vite-plugin-inspect'
//@intlify/vite-plugin-vue-i18n
//"unplugin-auto-import",
//"unplugin-vue-components"
//"vite-plugin-pages-sitemap"
//"vite-ssg-sitemap"
// simple-gql
// radar


export const basicbuild = {
  outDir: bins.outDir,
  assetsDir: 'res',
  emptyOutDir: true,
  reportCompressedSize: false,
  chunkSizeWarningLimit: 1024,
  //assetsInlineLimit: 4096,
  //manifest: true,

/*
  rollupOptions: {
    input: {
      index: 'index.html',
    },
//    input: {
//      spa: `${bins.spa.inDir}/_spa.html`,
      //ssg: `${bins.ssg.inDir}/index.html`,
//    },
    //output: {},
    //plugins: [],
  },
*/
}

export const basicpipeline = [
  Vue({    }),
  Formats(),
  Layouts(),
  Pages(),
  Markdown(),
  //VitePWA(),
  //Inspect(),
]

/*
import { mdconfig } from './md.config'
import { pgconfig } from './pg.config'
import { pwaconfig } from './pwa.config'

export const advancedpipeline = [
  //--------------------------------------------
  //-- loads yaml assets
  Formats(), //@originjs/vite-plugin-content

  //--------------------------------------------
  //-- virtual generator for file-based layouts
  Layouts({
    layoutsDirs: bins.layoutDir,
    //exclude: [''],
    //defaultLayout: 'Layout_Page',
  }),

  //--------------------------------------------
  //-- parses .vue SFC format
  Vue({
    include: [/\.vue$/, /\.md$/],
    //reactivityTransform: true,
  }),  //@vitejs/plugin-vue

  //--------------------------------------------
  //-- virtual generator for file-based routing
  Pages(pgconfig),

  //--------------------------------------------
  //-- parses .md with embedded Vue components
  //-- also loader for .md files
  Markdown(mdconfig),

  //--------------------------------------------
  //VitePWA(pwaconfig),
  //Inspect(),
]
*/
