<template>
  <div>
    <div class="container">
      <div class="search">
        <form class="search__form">
          <input autofocus maxlength="70" type="text" class="search__input" placeholder="Search by name">
        </form>
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
      width: 70%
      border-bottom: 1px solid #808080
    &__input
      width: 100%
      height: 30px
      background-color: transparent
      color: #808080
      border: none
      font-family: 'Roboto', sans-serif
      font-size: 18px
      font-weight: 500
      transition: 0.2s
      background-image: url('../assets/images/search.png')
      background-repeat: no-repeat
      background-position: 98% 0
      &::placeholder
        opacity: 1
      &:focus
        padding-bottom: 5px
        transition: 0.2s
  @media (max-width: 768px)
    .search__form
      width: 85%
</style>
