const path = require('path')
import Vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Markdown from 'vite-plugin-md'
import Content from '@originjs/vite-plugin-content'


export default {
  base: '/vite-vue/',
  server: {
    host: true,
  },
  build: {
    outDir: "dist",
    minify: false,
    emptyOutDir: true,
  },

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
  ],

  //

}
