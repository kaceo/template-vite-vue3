import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import ports from './build/ports.js'
import bins from './build/bins.js'

import { ssgconfig } from './build/ssg.config'
import { basicbuild, basicpipeline,
//advancedpipeline, // with SSG
} from './build/vite-plugins'


export default defineConfig({
  server: ports,
  resolve: { alias: bins.alias, },
  root: bins.rootDir,
  publicDir: bins.publicDir,

  ssgOptions: ssgconfig,
  build: basicbuild,
  plugins:
    //[ Vue(), ],
    basicpipeline,
    //advancedpipeline,
})






