<template>
  <div>
    <upper></upper>
    <search></search>
  </div>
</template>

<script>
  import upper from './upper'
  import search from "./search"

  export default {
      name: "home",
      components: {
          upper,
          search
      }
  }
</script>

<style lang="sass">
  @import "../assets/sass/norlmalize"

  body
    background-color: #333333
  .container
    height: auto
    margin-right: auto
    margin-left: auto
  @media (max-width: 576px)
    .container
      width: 100%
  @media (min-width: 576px)
    .container
      width: 100%
  @media (min-width: 768px)
    .container
      width: 720px
  @media (min-width: 992px)
    .container
      width: 960px
  @media (min-width: 1200px)
    .container
      width: 1140px

</style>
