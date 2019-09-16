<template>
  <div>
    <div class="container">
      <div class="search">
        <input type="text" class="search__input" placeholder="Search by name">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="sass">
  .search
    width: 100%
    display: flex
    justify-content: center
    padding-top: 100px
    padding-bottom: 90px
    &__form
      width: 60%
    &__input
      width: 60%
</style>
