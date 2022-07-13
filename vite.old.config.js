import Vue from '@vitejs/plugin-vue'
import path from 'path'


//import Pages from "vite-plugin-pages";
//import Markdown from 'vite-plugin-md'
//import Content from '@originjs/vite-plugin-content'
//import Inspect from 'vite-plugin-inspect'
//import { VitePWA } from 'vite-plugin-pwa'

export default {
  //base: '/template-vite-vue3/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    //host: true,
    // fs: {strict: true},
  },
  //==========================
  resolve: {
    alias: {
      //'@/': `${path.resolve(__dirname, 'src')}/`,
      //'@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  //==========================
  plugins: [
    Vue({
      //include: [ /\.vue$/, /\.md$/, ],
    }),
    //Inspect(), // only applies in dev mode
    //vueI18nPlugin,
    // yaml type
    // pug sass
    //
  ],
  //==========================
  build: {
    minify: false,
    emptyOutDir: true,
    outDir: "dist",
  //    outDir: 'dist',
  //    manifest: true,
    rollupOptions: {
      //MPA, only these HTML to be entry points
      input: {
  //      main: path.resolve(__dirname, 'src/index.html'),
  //        static: path.resolve(__dirname, 'ssg/index.html'),
      },
      //chunking into index and vendor
      output: {
  //        manualChunks: {
  //
  //        }
      },
    }
  },
  //==========================
  //  assetsInclude: [
    //'**/*.gltf' (default: png jpg gif svg ico webp avif)
    // mp4 webm ogg mp3 wav flac aac
    // woff2 eot ttf otf  webmanifest pdf txt
  //  ],
  optimizeDeps: {
    include: [
      // bundle the monorepo's internal (non-node_module) js
    ]
  },
  //==========================
}



/*
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

//=================
    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        { dirs: "src/pages", baseRoute: "" },
        { dirs: "src/hidden", baseRoute: "v"},
      ],
      routeBlockLang: 'yaml',

    }),
    Markdown(),
    Content(),
    Inspect(),

    VitePWA({
      registerType: 'autoUpdate',
      //includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
*/




//const { stringify } = require('querystring')
//const { write, watch } = require('fs')
//const Inspect = require('vite-plugin-inspect')

//local SFC custom block extender
const vueI18nPlugin = {
  name: 'vue-i18n',
  transform(code, id) {
    // is it a "i18n" block? no
    if (!/vue&type=i18n/.test(id)) {
      return
    }
    // "yaml" support
    if (/\.ya?ml$/.test(id)) {
      code = JSON.stringify(
        require('js-yaml').load(code.trim())
      )
    }
    // process it
    return `export default Comp => {
      Comp.i18n = ${code}
    }`
  }
}



/*
  //root: process.cwd()
  base /
  mode development production
  define
  plugins []
  publicDir public
  cacheDir node_modules/.vite
  resolve
    alias
    dedupe
    conditions
    mainFields
    extensions
    preserveSymlinks
  css
    modules
    postcss
    preprocessorOptions
    devSourcemap
  json
    namedExports
    stringify
  esbuild
  assetsInclude
  logLevel
  clearScreen
  envDir (read .env)
  envPrefix VITE_
  server
    port 3000
    host 127.0.0.1
    strictPort
    https
    open
    proxy (for dev use)
    cors
    headers
    force
    hmr
    watch
    middlewareMode
    base
    fs
      strict
      allow
      deny
    origin
  build
    target
    outDIr dist
    polyfillModulePreload
    assetsDir assets
    assetsInlineLimit 4096
    cssCodeSplit
    sourcemap false
    rollupOptions
    commonjsOptions
    dynamicImportVarsOptions
    lib
    manifest false
    ssrManifest false
    ssr
    minify
    terserOptions
    write
    emptyOutDir
    reportCompressedSize
    chunkSizeWarningLimit 500
    watch
  preview
  optimizeDeps
  ssr
  worker
*/

