<template lang="pug">
  nav
    .nav-bar
      delay(:duration=400)
        slide-x-right-transition(appear :duration=300)
          .logo concept7
      delay(:duration=750)
        slide-y-up-transition(appear group :duration=400 tag="ul")
            li(key="work")
              a Work
            li(key="who")
              a Who Are We?
            li(key="contact")
              a Contact

</template>

<script lang="ts">
import Vue from 'vue';
import Delay from '@/components/helpers/Delay.vue';

export default Vue.extend({
  components: {
    Delay,
  },
});
</script>

<style lang="scss" scoped>
@import "./NavBar.scss";
</style>
