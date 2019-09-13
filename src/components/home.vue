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
  .container
    width: 1440px
    margin-right: auto
    margin-left: auto
</style>
