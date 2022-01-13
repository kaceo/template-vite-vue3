<script>
import HeadPanel from './headpanel.vue'
import FootPanel from './footpanel.vue'

// insert cookie script
export default {
  components: {
    HeadPanel, FootPanel,
  }
};
</script>

<template lang="pug">
#view
  HeadPanel
  hr
  .main.container
    slot
  hr
  FootPanel


</template>

