
./public/

./index.html

./src/
  main.js
    create the router (routes.js)
    include the styles (fonts, main, tailwind)
    include createpinia
  app.vue
  routes.js

  ./src/pages/*.vue - views, pages, routable targets
    index.vue
    not-found.vue

  ./src/components/*.vue - embeddable web components

  ./src/composables/*.js - abstract states management
  ./src/stores/*.js - pinia states management

  ./src/helpers or libs or utils

  ./src/assets/
     img
     svg
     fonts
        (the woff2 files)
     styles
        font.css (points to woff2 files)
        tailwind.css
        main.css




## Packages

dependencies:
  vue ^3.2
  vue-router ^4.0
  pinia ^2

  vue-i18n
  vue-demi
  @vueuse/core
  @vueuse/head

    "@vueuse/components"
    "@vueuse/firebase"
    "@vueuse/integrations"


  axios (or fetch)
  firebase



devDependencies:
  vite ^2.9
  @vitejs/plugin-vue ^2.3


  sass
  pug
  (( @rollup/plugin-yaml ))


  dotenv
  glob
  https-localhost
  json-server

  dayjs
  yamljs
  chart.js vue-chartjs
