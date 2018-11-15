<template lang="pug">
  fade-transition(appear :duration="500")
    #app
      nav-bar(key="nav-bar")
      fade-transition(key="router" mode="out-in")
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
