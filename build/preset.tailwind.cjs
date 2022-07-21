const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],

  //prefix:  (prefix tailwind stuffs)
  //
  darkMode: 'class', //or false or media or class
  //purge: [],

  theme: {
    //===============================
    colors: {
      'blue': '  #1fb6ff',
      'purple': '#7e5bef',
      'pink': '  #ff49db',
      'orange': '#ff7849',
      'green':  '#13ce66',
      'yellow': '#ffc82c',
      'gray':   '#8492a6',
    },

    //===============================
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      //sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },

    //===============================
    extend: {
      fontFamily: {
        heading: ["Goldman", "cursive"],
        text: ["Ubuntu", "sans-serif"]
      },

      colors: {
        primary: colors.sky["500"],
        secondary: colors.slate["700"],
        error: colors.red["500"]
      },
    },

  },

  //===============================
  variants: {
    extend: {}
  },
}



/*
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      'gray-light': '#d3dce6',
      'gray-dark': '#273444',

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
*/
