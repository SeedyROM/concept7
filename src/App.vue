<template lang="pug">
  fade-transition(:duration="500")
    #app(v-if="showing")
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
  data: () => ({
      showing: false,
  }),
  mounted() {
    setTimeout(() => {
      this.showing = true;
    }, 300);
  },
});
</script>


<style lang="scss">
@import "~@/styles/site.scss";
</style>
