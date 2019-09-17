<template>
  <div>
    <div class="container">
      <div class="search">
        <form class="search__form">
          <input autofocus maxlength="70" type="text" class="search__input" placeholder="Search by name">
        </form>
      </div>

      <layout></layout>
    </div>
  </div>
</template>

<script>
  import layout from "./layout"
  import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "search",
        methods: {
            ...mapActions(['fetchCharacters'])
        },
        components: {
            layout
        },
        computed: {
            ...mapGetters(['CHARACTERS'])
        },
        async beforeMount() {
          await this.fetchCharacters()
        }
    }
</script>

<style scoped lang="sass">
  .search
    width: 100%
    height: 200px
    display: flex
    justify-content: center
    align-items: center
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
