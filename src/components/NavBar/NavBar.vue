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
  computed: {
    navBarColor(): string {
      switch (this.$route.name) {
        case 'home':
          return 'dark';
        case 'not-found':
          return 'orange';
        default:
          return 'blue';
      }
    },
  },
});
</script>

<template lang="pug" src="@/components/NavBar/NavBar.pug"></template>
<style scoped lang="scss" src="@/components/NavBar/NavBar.scss"></style>
