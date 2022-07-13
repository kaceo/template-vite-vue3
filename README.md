# TEMPLATE-VITE-VUE3

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

