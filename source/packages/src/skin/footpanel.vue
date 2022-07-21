<script>
import footmenus from './footmenu.yaml';

export default {
  name: 'FootMenu',
  data() {
    return {
      'menus': footmenus,
      'dest':
        'legal-privacy'
        //'https://google.com',
        //'about',
        //"{name: 'about'}",
    }
  },
}
</script>

<template lang="pug">
footer.footer
  .container
    .row
      .col-sm-3
        .branding.logo-wh
          span.sr-only
        .footer-copyright ©2022 Strava

      .col-sm-3.nav-group
        h5 Menu
        ul.list-nav.nav-2-col
          li(v-for="i in menus.colone")
            a(v-if="i.href" :href="i.href") {{i.name}}
            router-link(v-else :to="{name: i.nref}") {{i.name}}

      .col-sm-3.nav-group
        h5 Follow
        ul.list-nav
          li(v-for="i in menus.coltwo")
            span.app-icon-wrapper
              span.app-icon.icon-white.icon-sm(:class="i.icon")
            a(:href="i.href") {{i.name}}

      .col-sm-3.nav-group
        h5 Get Started
        ul.list-nav
          li(v-for="i in menus.colthree")
            a(v-if="i.href" :href="i.href") {{i.name}}
            router-link(v-else :to="{name: i.nref}") {{i.name}}
</template>


