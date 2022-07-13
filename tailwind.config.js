module.exports = {
  content: [
    './packages/**/*.{html,vue,md}'
  ],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {},
  },
}
