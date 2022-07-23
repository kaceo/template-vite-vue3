//import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import ports from './build/ports.js'
import bins from './build/bins.js'
import { ssgconfig } from './build/ssg.config'
import { basicbuild, basicpipeline,
} from './build/vite-plugins'

export default defineConfig({
  base: '/template-vite/vue3/',
  server: ports,
  resolve: { alias: bins.alias, },
  root: bins.rootDir,
  publicDir: bins.publicDir,
  ssgOptions: ssgconfig,
  build: basicbuild,
  plugins: basicpipeline,
})
