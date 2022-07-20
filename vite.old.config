import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Yaml from '@rollup/plugin-yaml'
import Pages from 'vite-plugin-pages'
//import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'


function entryPoints(...startpaths) {
  const entries = startpaths
    .map(path.parse)
    .map(entry => {
      console.log('Processing ', entry)
    const { dir, base, name, ext } = entry;
    const key = path.join( dir, name );
    const path = path.resolve( __dirname, dir, base );
      console.log('Get', key, ' and ', path)
    return [key, path];
  });
  const config = Object.fromEntries(entries);
  return config;
}
/*
input: {
  main: path.resolve(__dirname, 'index.html'),
  'docs/index': path.resolve(__dirname, 'packages/doc/index.html'),
},
const entries = entryPoints(
  'index.html',
  'packages/doc/index.html',
)
*/
const mpaconfig = {
  'index': 'index.html',
  'packages/src/index': 'packages/src/index.html',
}
console.log('Entries are ', mpaconfig)


const aliasconfig = {
  '@xassets/': `${path.resolve(__dirname, 'packages/shared/assets')}/`,
  //'@/': `${resolve(__dirname, 'src')}/`,
}


const pagesconfig = {
  extensions: ['vue'],
  //, 'md'],
  dirs: [
//    { dirs: "src/pages", baseRoute: "" },
//    { dirs: "src/hidden", baseRoute: "v"},
    {
      dirs: "packages/src/pages",
      baseRoute: ""
    },
  ],
  routeBlockLang: 'yaml',
}







export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  //==========================
  plugins: [
    Vue({    }),
    Yaml(),
    Pages(),//pagesconfig),
    //VitePWA(),
  ],
  //==========================
  //publicDir: 'public',
  build: {
    rollupOptions: {
      input: mpaconfig,
      //output: {},
      //plugins: [],
    },
    //assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    //reportCompressedSize: true,
    //manifest: true,
  },
  //==========================
  resolve: {
    alias: aliasconfig,
  },

})

