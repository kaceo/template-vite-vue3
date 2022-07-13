import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Yaml from '@rollup/plugin-yaml';
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
const entries = {
  'index': 'index.html',
  'doc/index': 'packages/doc/index.html',
}
console.log('Entries are ',entries)


export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  //==========================
  plugins: [
    Vue({    }),
    Yaml(),
  ],
  //==========================
  //publicDir: 'public',
  build: {
    rollupOptions: {
      input: entries,
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
    alias: {
      '@xassets/': `${path.resolve(__dirname, 'packages/shared/assets')}/`,
      //'@/': `${resolve(__dirname, 'src')}/`,
    },
  },

})

