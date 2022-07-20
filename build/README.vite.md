# README about vite configuration


## Plugins We Like

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


    vite-plug-amp (for SSG use)
    vite-plugin-favicon (PWA helper)
    @intlify/vite-plugin-vue-i18n
    vite-plugin-webfont-dl
    vite-plugin-pwa

  vite-plugin-inspect

  https://github.com/tcly861204/vite-plugin-files-copy/
  https://www.npmjs.com/package/vite-plugin-better-output


## .vitepress/config.js

  srcDir
  srcExclude
  outDir

  markdown
  vue
  vite
  extends
  mpa
  buildEnd
  ignoreDeadLinks

  base
  lang
  title
  titleTemplate
  description
  appearance
  lastUpdated
  shouldPreload
  scrollOffset
  head
  themeConfig
  locales

  -------------
  root
  ?srcDir
  site
  configPath
  themeDir
  ?outDir
  tempDir
  alias
  pages


## Basic Template

Vite
Vue3
Vue-router
Pinia
Tailwind


Inspect(),
AutoImport
vue, vue-router, @vueuse/head, @vueuse/core
Components
extensions: ['vue', 'md'],
include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
css stuffs


## Basic Template 2


__Basic Template for Vite, Vue3 project__


# Vite MPA

pnpm scripts
  rimraf to clean
  vitest
  prettier (esbuild > typescript)
  eslint
  nodemon
  postcss autoprefixer

zero - Vite, Vite-ssg (snowpack, gulp)
  vite - chunk-split
  rollup/ yaml yamljs
  @originjs/vite-plugin-content
  vitejs/ vue
  pug
  vite-plugin-md pages
  vite-plugin-pwa
  sitemap
  vite-plugin compress radar inspect
  vue-sfc-rollup
  vite-plugin-vue-layouts -windicss
  -vue-gql graphql urql/vue
  loader tweaks: "import .... ?url, ?raw, ?worker ?inline"
  loader: json. import.meta.glob('*.js')  .globEager
  loader: wasm

common -
  sass
  public dir
  fontawesome @heroicons/vue
  tailwindcss typography
  daisyui
  bootstrap
  dayjs
  chartjs
  fast-glob fs-extra globby gray-matter
  @vueuse / core, head component firebase integrations
  nprogress
  @iconify-json/carbon unplug-icons

one - static site build (vuepress2)
  vitepress
  vitepress-theme-book
  markdown-it regex deflist
  markup- charts graphviz math music tables prism
    -link-attributes
  netlifycms (github based auth)
  ?comment engine (github based issues)

  trois= three, troisjs, tweakpane, gsap, chrome-js, cannon, nice-color-palettes, simplex-noise, stats.js


two - SPA (vue3)
  vue-i18n
  firebase axios(fetch) gql
  pinia
  vue-router
  rss-atom (feed)
  (blog - collection)
  vue-demi
  unplug-auto-import unplug-vue-components
  Pages (automatic convert files/dir to Routes)

