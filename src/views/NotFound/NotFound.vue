<template lang="pug">
.not-found.page-container
  .container
    img.not-found__image(src="~@/assets/images/icons/noun_question.svg")
    h2.not-found__title 
      span Nothing to see here
      fade-transition.not-found__ellipses(
        group
        tag="span"
        @leave="leave"
      )
        .dot(key="1" v-if="t >= 1")
        .dot(key="2" v-if="t >= 2")
        .dot(key="3" v-if="t >= 3")
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    t: 0,
  }),
  created() {
    setInterval(() => {
      this.t = (this.t + 1) % 4;
    }, 800);
  },
  methods: {
    leave(el: HTMLElement) {
      el.style.position = 'absolute';
      el.style.left = el.clientWidth * 3 + 'px';
    },
  },
});
</script>

<style scoped lang="scss" src="@/views/NotFound/NotFound.scss" />
