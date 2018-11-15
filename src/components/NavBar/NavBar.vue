<template lang="pug">
  nav
    .nav-bar
      delay(:duration=400)
        slide-x-right-transition(appear :duration=300)
          .logo(@click="goHome") concept7
      delay(:duration=750)
        slide-y-up-transition(appear group :duration=400 tag="ul")
            li(key="work")
              router-link(to="/work") Work
            li(key="who")
              router-link(to="/") Who Are We?
            li(key="contact")
              router-link(to="/") Contact

</template>

<script lang="ts">
import Vue from 'vue';
import Delay from '@/components/helpers/Delay.vue';

export default Vue.extend({
  components: {
    Delay,
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./NavBar.scss";
</style>
