<template>
    <div>
      <div class="wrap">
        <div class="wrap__block">
          <div class="wrap__title">
            N
          </div>
          <div class="wrap__name">
            name
          </div>
          <div class="wrap__specie">
            species
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped lang="sass">
  .wrap
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: wrap
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
