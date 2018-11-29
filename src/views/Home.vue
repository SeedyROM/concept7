<template lang="pug">
  .home
    .first-panel
      delay(:duration="1000")
        fade-transition
          hero
    .page-container
      .second-panel.container
        .card
          img(src="~@/assets/images/icons/noun_skills.svg")
          .card__title Innovation
          .card__copy 
            | Innovative designs and development practices to keep up with not only current trends
            | but up and coming technologies & services.
        .card
          img(src="~@/assets/images/icons/noun_respectful.svg")
          .card__title Collaboration
          .card__copy 
            | Our team will work with you one on one to create the best website for your needs,
            | while also keeping your budget. Our in house designers and developers are personable
            | and are always willing to go above and beyond to meet your style.
        .card
          img(src="~@/assets/images/icons/noun_runes.svg")
          .card__title Future Proof
          .card__copy 
            | Staying ahead of the curve in 2018 is no easy task,
            | luckily we've been building user experiences for half a decade.
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
  @import '~@/styles/_typography.scss';

  .home {
    background: $brand-color-purple;
    min-height: 100vh;
  }

  .first-panel, .second-panel {
    min-height: 50vh;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .first-panel {
    color: $brand-color-white;
    
    background: $brand-color-purple;
    // background: linear-gradient(lighten($brand-color-purple, 5%), $brand-color-purple);
    // background: linear-gradient($brand-color-orange, lighten($brand-color-orange, 3%));
    background: linear-gradient(#FA8768, #0002);

    *::selection { color: blue !important; }
    *::-moz-selection { color: blue !important; }

    @media only screen and (max-width: $mobile-size) {
      min-height: 115vw;
    }
  }

  .second-panel {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 2rem;
    padding: 2rem 0;

    @media only screen and (max-width: $tablet-size) {
      grid-gap: 0;
    }

    @media only screen and (max-width: $mobile-size) {
      display: block;
      padding: 3rem 0;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: white;

    padding: 2rem;
    height: 100%;

    img {
      width: 60%;
      fill: white;
      max-width: 154px;

      @media only screen and (max-width: $mobile-size) {  

      }
      @media only screen and (max-width: $mobile-size) {  
        width: 40%;
      }
    }

    &__title {
      font-weight: bold;
      letter-spacing: 1px;
      padding-bottom: 2px;

      border-bottom: 2px solid white;
      font-family: "Now", sans-serif;
      text-transform: uppercase;

      
      margin-bottom: 2rem;
    }

    &__copy {
      text-align: center;
      letter-spacing: 0.25px;
      line-height: 1.25;

      @include fluid-type(13px, 16px);
      // font-family: "Now", sans-serif;
    }

    @media only screen and (max-width: $mobile-size) {
      height: inherit;
      margin-bottom: 2rem;
    }
  }
</style>

