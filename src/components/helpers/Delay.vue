<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    duration: {
      type: Number,
    },
    placeholderHeight: {
      type: String,
      default: '0px',
    },
  },
  mounted() {
    setTimeout(() => {
      this.showing = true;
    }, this.duration);
  },
  data() {
    return {
      showing: false,
    };
  },
});
</script>

<template lang="pug">
.placeholder(v-if="!showing" :style="{height: placeholderHeight}")
div(v-else)
  slot
</template>

<style lang="scss" scoped>
.hide {
  opacity: 0;
}
</style>
