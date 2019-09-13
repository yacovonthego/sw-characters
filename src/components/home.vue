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
    width: 1140px
    height: auto
    margin-right: auto
    margin-left: auto
</style>
