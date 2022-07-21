module.exports = {
  content: [
    "./docs/**/*.{vue,md}",
    "./app/**/*.{vue,md}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  darkMode: 'class',
}

/*
//or false or media or class
  presets: {
    require('/build/preset.tailwind.cjs')
  },
  presets: {
    //require('./preset.tailwind.cjs')
  },
theme: {
  extend: {},
},
plugins: [],
*/
