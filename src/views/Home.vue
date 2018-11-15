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
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero/Hero.vue';
import Delay from '@/components/helpers/Delay.vue';

@Component({
  components: {
    Hero,
    Delay
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_globals.scss';
  
  .first-panel {
    color: $brand-color-white;
    background: $brand-color-purple;
    min-height: 50vh;
    justify-content: center;
    align-items: center;
    display: flex;

    border-bottom: 10px solid $brand-color-orange;
  }

  .home {
    height: 200vh;
  }


</style>

