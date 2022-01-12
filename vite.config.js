const path = require('path')
import Vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Markdown from 'vite-plugin-md'
import Content from '@originjs/vite-plugin-content'


export default {
  plugins: [
    Vue({
      include: [
        /\.vue$/,
        /\.md$/,
      ],
    }),
    Pages({
      extensions: ['vue', 'md'],
/*      dirs: [
        { dirs: "src/pages", baseRoute: "" },
        { dirs: "src/hidden", baseRoute: "v"},
      ],
    */    }),
    Markdown(),
    Content(),
  ],

  server: {
    host: true,
  },
  build: {
    outDir: "dist",
    minify: false,
    emptyOutDir: true,
  },
  // base: '/repo/', -- for GHPages
  //
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

}
