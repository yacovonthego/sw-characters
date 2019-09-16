<template>
  <div>
    <upper></upper>
  </div>
</template>

<script>
  import upper from './upper'
  export default {
      name: "home",
      components: {
          upper
      }
  }
</script>

<style lang="sass">
  @import "../norlmalize/norlmalize"

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
