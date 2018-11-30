<template lang="pug">
  .home
    .first-panel
      delay(:duration="1000")
        fade-transition
          hero
    .page-container
      .second-panel.container(v-scroll-reveal)
        .card
          img(src="~@/assets/images/icons/noun_skills.svg")
          .card__title Innovation
          .card__copy.left
            | We specialize in innovative designs and development practices. 
            | Designed to keep up with up and coming technologies.
        .card.card--center
          img(src="~@/assets/images/icons/noun_respectful.svg")
          .card__title Collaboration
          .card__copy
            | Our team will work with you one on one to create the best website for your needs.
            | Your budget is always our priority, and our in house designers and developers are
            | there to help everystep of the way.
        .card
          img(src="~@/assets/images/icons/noun_runes.svg")
          .card__title Future Proof
          .card__copy.right
            | Staying ahead of the curve in 2018 is no easy task,
            | luckily we've been building user experiences for almost a decade.
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

  .first-panel {
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
    // border-bottom: 10px dashed #222;

    background: linear-gradient(#FA8768, #0002);
    // box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 30px 100px rgba(255, 255, 255, 0.1);
    z-index: 2;

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
    padding: 2rem;
    min-height: 0;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 3rem;


    // background-image: url('~@/assets/images/texture.svg');
    // background-size: 400%;
    // background-position: -20% auto;
    // background-repeat: repeat-x;

    @media only screen and (max-width: $tablet-size) {
      padding: 2rem 1rem;
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
    // justify-content: center;
    align-items: center;

    color: white;

    padding: 2rem;
    height: 100%;

    img {
      width: 60%;
      fill: white;
      max-height: 154px;

      @media only screen and (max-width: $mobile-size) {  
        width: 40%;
      }
    }

    &--center {
      // padding-left: 4rem !important;
      // padding-right: 4rem !important;

      img {
        max-height: calc(154px + 2rem);
        @media only screen and (max-width: $mobile-size) {
          max-height: inherit;
          width: 33%;
        }
      }
    }

    &__title {
      font-weight: bold;
      letter-spacing: 1px;
      padding-bottom: 2px;

      border-bottom: 2px solid white;
      font-family: "Now", sans-serif;
      text-transform: uppercase;

      
      margin-bottom: 1.5rem;
    }

    &__copy {
      text-align: center;
      letter-spacing: 0.25px;
      line-height: 1.4;

      @include fluid-type(13px, 15px);
      // font-family: "Now", sans-serif;

      @media only screen and (max-width: $tablet-size) {
        font-size: 15px;
        line-height: 1.3;
      }

      @media only screen and (max-width: $mobile-size) {
        &, &.left, &.right{
          text-align: center;
        }
      }
    }

    @media only screen and (min-width: $desktop-size) {
      padding-left: 0;
      padding-right: 0;
    }
    
    @media only screen and (max-width: $tablet-size) {
      padding: 1.5rem;
    }

    @media only screen and (max-width: $mobile-size) {
      height: inherit;
      margin-bottom: 2rem;
    }
  }
</style>

