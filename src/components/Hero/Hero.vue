<template lang="pug">
    .hero
      zoom-x-transition(:duration=600 appear)
        .heading Minimalist Design
      delay(:duration=700 placeholderHeight="3rem")
        slide-x-left-transition(:duration=700 appear)
          .message Creating simplistic and feature rich web applications for the 22nd Century
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
@import "./Hero.scss";
</style>

