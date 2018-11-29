<template lang="pug">
  nav.page-container
    .nav-bar.container
      delay(:duration=400)
        slide-x-right-transition(appear :duration=300)
          .logo(@click="goHome") concept7
      delay(:duration=750)
        slide-y-up-transition(appear group :duration=400 tag="ul" class="nav-bar__links")
            li.nav-bar__item(key="work")
              router-link.nav-bar__link(to="/work") Work
            li.nav-bar__item(key="who")
              router-link.nav-bar__link(to="/") Who Are We?
            li.nav-bar__item(key="contact")
              router-link.nav-bar__link(to="/") Contact

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
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./NavBar.scss";
</style>
