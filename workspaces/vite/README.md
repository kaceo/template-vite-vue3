




## Packages

dependencies:

  vite-plugin-compress
  vite-plugin-compression
  vite-plugin-vue-setup-extend

  vite-plugin-radar


devDependencies:
  vite ^2.9
  vite-ssg
  vitest

  (loaders)
  vite-svg-loader
  @rollup/plugin-yaml
  @originjs/vite-plugin-content



  (lint)
  vite-plugin-eslint
  vite-plugin-stylelint


  (vue)
  @vitejs/plugin-vue

  vite-plugin-inspect
  vite-plugin-md
  vite-plugin-pages
  vite-plugin-pwa
  vite-plugin-vue-layouts

  @intlify/vite-plugin-vue-i18n


  vite-plugin-chunk-split
  vite-plugin-md-to-html




inside .vuepress/config.js

  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  },


  no need postcss.config.js
  no need vite.config.js
