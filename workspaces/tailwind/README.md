
## Packages

dependencies:

((  "bootstrap": ))


devDependencies:
  postcss ^8.4
  postcss-html
  tailwindcss ^3
  autoprefixer
  @tailwindcss/aspect-ratio
  @tailwindcss/forms
  @tailwindcss/line-clamp
  @tailwindcss/typography
  ts: @types/tailwindcss

  (( bulma, bulma-extensions, ))
  (( font-awesome 4.7))
  (( ))
    "@fortawesome/fontawesome-svg-core"
    "@fortawesome/free-brands-svg-icons"
    "@fortawesome/free-regular-svg-icons"
    "@fortawesome/free-solid-svg-icons"
    "@fortawesome/vue-fontawesome"

## postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};

## tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // "./app/src/**/*.{vue,js,html}"

  //  "./docs/index.md",
  //  "./docs/**/*.{md,vue}",
  //  "./docs/.vuepress/**/*.{md,vue}",
  ],

  darkMode: 'class',
  //darkMode: 'class', media,

}
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        //sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
  ],
  daisyui: {},

  ??
    corePlugins: {preflight: false},

}

