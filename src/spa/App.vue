<template lang="pug">
nav
  div
    router-link(
      :to="{name: 'spa-home'}"
      ) Entry Point of SPA
    |
    | &nbsp;|&nbsp;
    |
    router-link(
      :to="{name: 'tf-city'}"
      ) TangoFinder City
    |
    | &nbsp;|&nbsp;
    |
    router-link(
      to="/city/sg/hello"
      ) SG
    |
    | &nbsp;|&nbsp;
    |

    router-link(
      :to="{name: 'te-dash'}"
      ) TangoEast Dashboard
    |
    | &nbsp;|&nbsp;
    |
    router-link(
      to="/dash/more/notes"
      ) Xtra

  div
    router-link(
      :to="{name: 'spa-unknown'}"
      ) Undefined Page
    |
    | &nbsp;|&nbsp;
    |
    router-link(
      to="/404"
      ) Error Page
    |
    | &nbsp;|&nbsp;
    |
    router-link(
      to="/about.html"
      ) About Page
    |
    | &nbsp;|&nbsp;
    |
    a(
      href="/about.html"
      ) About Page html
    |
    | &nbsp;|&nbsp;
    |
    a(
      href="/about"
      ) About Page clean

hr

main
  router-view

</template>


