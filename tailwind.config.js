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
  theme: { extend: {}, },
}

