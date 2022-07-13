const path = require('path')
import Vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Markdown from 'vite-plugin-md'
import Content from '@originjs/vite-plugin-content'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'

export default {
  //base: '/vite-vue/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [ /\.vue$/, /\.md$/, ],
    }),

    Pages({
      extensions: ['vue', 'md'],
/*      dirs: [
        { dirs: "src/pages", baseRoute: "" },
        { dirs: "src/hidden", baseRoute: "v"},
      ], */
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
        /*
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
        */
        ],
      },
    }),

  ],

  //========================================

  server: {
    host: true,
    // fs: {strict: true},
  },
  build: {
    outDir: "dist",
    minify: false,
    emptyOutDir: true,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

}
