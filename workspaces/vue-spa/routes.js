import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;


/* main.js
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/routes.js';
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});


app.vue
<template>
  <router-view />
</template>


not-found.vue

<template>
  <header class="flex justify-center items-center h-screen">
    <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
      Page not Found
    </h1>
  </header>
</template>

index.vue
setup = useDark setup


*/
