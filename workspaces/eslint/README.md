


## Packages

dependencies:

devDependencies:
   eslint
   eslint-config-airbnb-base
   eslint-import-resolver-alias
   eslint-plugin-import
   eslint-plugin-tailwindcss
   eslint-plugin-vue

   stylelint
   stylelint-config-rational-order
   stylelint-config-recommended-vue
   stylelint-config-standard

   vite-plugin-eslint
   vite-plugin-stylelint

   prettier
   prettier-eslint-cli

scripts:
  "lint": "pnpm run lint:js && pnpm run lint:style",
  "lint:fix": "pnpm run lint:js -- --fix && pnpm run lint:style -- --fix",
  "lint:js": "eslint --ext .js,.vue --ignore-path .gitignore src",
  "lint:style": "stylelint **/*.{vue,css} --ignore-path .gitignore",
