<script lang="ts">
import Vue from 'vue';
import Hero from '@/components/Hero/Hero.vue';
import Delay from '@/components/helpers/Delay.vue';

export default Vue.extend({
  components: {
    Delay,
    Hero,
  },
});
</script>

<template lang="pug" src="@/views/Home/Home.pug"></template>
<style scoped lang="scss" src="@/views/Home/Home.scss"></style>
