
<template lang="pug">
div
  router-link(to="/") Home
  span &nbsp;|&nbsp;
  router-link(to="/about") Go to About
  span &nbsp;|&nbsp;
  router-link(to="/contact") Go to Contact
Frame
  router-view
</template>

<script>
import Frame from './skin/framepanel.vue'

const adata = [1,2,3]

export default {
  name: 'App',
  components: {
    Frame,
  },
  data() {
    return {
      menus: "this menu",
      mlist: adata,
    }
  },
}
/*
each i of [1,2,3]
  b i
  span |

*/



/*
<xtemplate lang="pug">
//Frame
//  div Something
div
  router-link(to="/") Home
  span &nbsp;|&nbsp;
  router-link(to="/about") Go to About
  span &nbsp;|&nbsp;
  router-link(to="/contact") Go to Contact
hr
router-view
hr
div= menus + " you like?"
hr
div= mlist + " is a list"
hr
each i in []
  span= i
  span &nbsp;|&nbsp;
h1 Special Frog
hr
div {{menus}} is one
hr
div(v-for="i in mlist")
  span {{i}} |

</xtemplate>
*/


</script>
