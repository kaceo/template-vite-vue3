<template>

section.p-4.bg-secondary.w-full
  h1 CLUB AREA
  h2 Vue-Tail-Fire
  hr

  h2.mb-2 Pages
  ul.list-disc.list-inside
    li Home Page
    li Login Page
    li Sign Up Page
    li Forgot Password Page
    li
      | Profile Page -
      code Auth required
    li
      | Database Page -
      code Auth required

  h2.my-2 Fonts and colors
  ul.list-disc.list-inside
    li
      | Font -
      code Ubuntu (font-text) & Goldman (font-heading)
    li
      | Primary Color -
      code Tailwind - colors.blue["500"]
    li
      | Secondary Color -
      code Tailwind - colors.coolGray["700"]
    li
      | Background Color -
      code Tailwind - .bg-secondary/90
    li
      | Error Color -
      code Tailwind - colors.red["500"]

</template>

<style scoped>
code {@apply
  bg-gray-800 px-2 mx-2;
}
</style>
