<template>
  <div class="home">
    <delay :duration="1000">
      <fade-transition>
        <hero />
      </fade-transition>
    </delay>
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
