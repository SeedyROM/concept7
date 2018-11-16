<template>
  <div class="home">
    <div class="first-panel">
      <delay :duration="1000">
        <fade-transition>
          <hero />
        </fade-transition>
      </delay>
    </div>
    <div class="second-panel">

    </div>
  </div>
</template>

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

<style lang="scss" scoped>
  @import '~@/styles/_globals.scss';

  .first-panel {
    color: $brand-color-white;
    
    background: $brand-color-purple;
    // background: linear-gradient(lighten($brand-color-purple, 5%), $brand-color-purple);
    background: linear-gradient($brand-color-orange, lighten($brand-color-orange, 3%));

    *::selection { color: blue !important; }
    *::-moz-selection { color: blue !important; }


    min-height: 50vh;
    justify-content: center;
    align-items: center;
    display: flex;



    @media only screen and (max-width: $mobile-size) {
      min-height: 115vw;
    }
  }
</style>

