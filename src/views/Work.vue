<template lang="pug">
  .work
    .page-container
      .container(v-scroll-reveal)
        h1 Development
        .display
          div.example a
          div.example b
          div.example c
          div.example d

    .page-container(v-scroll-reveal)
      .container
        h1 Design
        .display
          div.example a
          div.example b
          div.example c
          div.example d
    .page-container(v-scroll-reveal)
      .container
        h1 Consultation
        .display
          div.example a
          div.example b
          div.example c
          div.example d
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
  @import '~@/styles/_globals.scss';

  .container {
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 2.5rem;
  }

  .work {
    padding: 1rem;
  }

  .display {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: start;

    grid-gap: 1.5rem;
  }

  .display > * {
    width: 100%;
  }

  .display > *:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: calc(100% / 2);
}

  h1 {
    color: blue;
    text-transform: uppercase;
    width: 100%;
    font-weight: 800;
    padding-bottom: 0.25rem;
    border-bottom: 0.1333rem solid blue;
  }

  .example {
    display: flex;
    border: 2px solid blue;
    padding: 1rem;
    box-sizing: border-box;

    background-image: url('~@/assets/images/qburt.svg');
  }
</style>
