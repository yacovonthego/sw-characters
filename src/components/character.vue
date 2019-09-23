<template>
    <div>
      <div class="wrap__block">
        <div class="wrap__title">
          {{ CHARACTERS[charId].name.charAt(0) }}
        </div>
        <div class="wrap__name">
          {{ CHARACTERS[charId].name }}
        </div>
        <div class="wrap__specie">
          species
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "character",
        data() {
          return {
              charId: this.charNum
          }
        },
        computed: {
            ...mapGetters(['CHARACTERS'])
        },
        props: ['charNum']
    }
</script>

<style scoped lang="sass">
@import "../assets/sass/colours"
.wrap
  &__block
    width: 550px
    height: 320px
    border-radius: 8px
    background-color: #1a1a1a
    margin-bottom: 40px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    font-family: 'Roboto', sans-serif
    color: #ffffff
    &:hover
      cursor: pointer
      box-shadow: 0 7px 30px rgba(19, 119, 150, 0.42)
  &__title
    display: flex
    align-items: center
    justify-content: center
    font-size: 48px
    font-weight: 500
    text-transform: uppercase
    width: 80px
    height: 80px
    background-color: #bb86fc
    border-radius: 50%
    margin-bottom: 9px
  &__name
    font-size: 18px
    font-weight: 700
    margin-bottom: 9px
  &__specie
    color: #808080
    font-size: 13px
    font-weight: 400
    margin-bottom: 9px
</style>
