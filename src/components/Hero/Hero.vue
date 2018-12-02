<script lang="ts">
import Vue from 'vue';
import Delay from '@/components/helpers/Delay.vue';

export default Vue.extend({
  components: {
    Delay,
  },
});
</script>

<template lang="pug">
.hero
  zoom-x-transition(:duration=600 appear)
    .hero__heading Minimalist Design
  delay(:duration=700 placeholderHeight="3em")
    slide-x-left-transition(:duration=700 appear)
      .hero__message Creating simplistic and feature rich web applications for the 22nd Century
</template>

<style scoped lang="scss" src="@/components/Hero/Hero.scss"></style>
