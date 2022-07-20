import bins from './shared/bins'
import ports from './shared/ports'
import Formats from '@originjs/vite-plugin-content'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import { defineConfig } from 'vite'

import { mdconfig } from './md.config'
import { pgconfig } from './pg.config'

export default defineConfig({

//root: bins.spa.inDir,
  //base: '/',
  //mode:

//  publicDir: bins.publicDir,
  // do not use, because SSG already done bins.publicDir,

  build: {
    emptyOutDir: true,
    outDir: bins.spa.outDir,

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
    chunkSizeWarningLimit: 1024,
    reportCompressedSize: false,
  },

  server: {
    ...ports,
  },

  resolve: {
    alias: bins.alias,
  },

  plugins: [

    //--------------------------------------------
    //-- parses .vue SFC format
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),  //@vitejs/plugin-vue

    //--------------------------------------------
    //-- loads yaml assets
    Formats(), //@originjs/vite-plugin-content

    //--------------------------------------------
    //-- virtual generator for file-based routing
    Pages(pgconfig),

    //--------------------------------------------
    //-- parses .md with embedded Vue components
    //-- also loader for .md files
    Markdown(mdconfig),

    //--------------------------------------------
    //-- virtual generator for file-based layouts
    Layouts({
      //layoutsDir: 'src/layouts',
      //exclude: [''],
      //defaultLayout: 'Layout_Page',
    }),

    //--------------------------------------------

  ],
})

/*

    //--------------------------------------------
    //Inspect(),
    //AutoImport
    // vue, vue-router, @vueuse/head, @vueuse/core
    //Components
    // extensions: ['vue', 'md'],
    // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //css stuffs


https://github.com/vitejs/awesome-vite#plugins

  (inside Vue = pug sass + vue-router pinia)

  vite-plugin-pwa
  vite-plugin-windicss
  vite-plugin-relay (graphql)
  vite-plugin-simple-gql
  vite-plugin-webfont-dl
  vite-plugin-electron

  unocss/vite
  unplugin-icons
  rollup-plugin-visualizer == analyse rollup build
  vite-plugin-radar
  vite-plugin-raw

  @vitejs/plugin-react
  @vitejs/plugin-react-refresh (for react)

  vite-plugin-mp  multi-pages  html-template-mpa   mpa
  vite-plugin-static-copy

  vite-plugin-md2vue
  vite-plugin-virtual-html
  vite-plugin-content (yaml xml ini toml csv plist )
  (yaml) @rollup/plugin-yaml
  vite-plugin-pug-transfpormer
  vitest

  -------
  vite-plugin-vue-docs
  vite-plugin-pages
  v-route-generate
  vite-plugin-md
  vite-ssg
  vite-plugin-vue-i18n
  vite-plugin-md-preview
  unplug-vue-components
  vite-plugin-vue-gql
  vite-plugin-vue-static-sfc

  vite-ssr
  ssr


*/

