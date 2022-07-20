# SPA section 

## Stack
Vite
Vue3
Vue-router
Pinia
Tailwindcss+Daisyui

## Entry point
_spa.html
main.js
App.vue

## redirect on httpserver
tangoeast.com => 
  tangueros.org/corp/**
tangofinder.com => 
  tangueros.org/tfdb/**

tangueros.org (monorepo)
  /tfdb/* => _spa.html
  /corp/* => _spa.html


## router check
routes definition

/tfdb/
  /c/:city/:subpage?
  /z/:country/:subpage?
  /w/:eventid
  
/
/corp/
