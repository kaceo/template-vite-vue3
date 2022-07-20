import Formats from '@originjs/vite-plugin-content'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'

import bins from './build/bins'
import ports from './build/ports'
import { mdconfig } from './build/md.config'
import { pgconfig } from './build/pg.config'
import { pwaconfig } from './build/pwa.config'
import { ssgconfig } from './build/ssg.config'

export default defineConfig({

  //root: bins.spa.inDir,
  //base: '/',
  //mode:
  server: {
    ...ports,
    hmr: { overlay: false, },
  },
  publicDir: bins.publicDir,
  resolve: { alias: bins.alias, },

  ssgOptions: ssgconfig,

  build: {
    outDir: bins.spa.outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
    assetsDir: 'res',

    rollupOptions: {
  //    input: {
  //      spa: `${bins.spa.inDir}/_spa.html`,
        //ssg: `${bins.ssg.inDir}/index.html`,
  //    },
/*
      external: ['vue'],
      output: { globals: {vue: 'Vue'} },
*/
    },
/*
    lib: {
      name: 'MyLib',
      fileName: 'my-lib',
      entry: 'lib/main.js',
    },
*/
  },

  plugins: [

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
  ],

})
