<template lang="pug">
  #app
    nav-bar
    slide-x-right-transition
      keep-alive
        router-view
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './components/NavBar/NavBar.vue';

export default Vue.extend({
  components: {
    NavBar,
  },
});
</script>


<style lang="scss">
@import "~@/styles/site.scss";
</style>
