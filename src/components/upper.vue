<template>
  <div>
    <div class="container">
      <header class="header">
        <img src="../assets/images/header__bg.png" alt="bg-image is not loaded" class="header__bg-image">
        <div class="header__center">
          <img src="../assets/images/text-image.png" alt="text image is not loaded" class="header__text">
        </div>
      </header>
    </div>
  </div>
</template>

<script>

  export default {
      name: "upper"
  }
</script>

<style scoped lang="sass">
  .header
    width: 100%
    position: relative
    &__bg-image
      width: 100%
      height: auto
    &__center
      width: 28.2%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
    &__text
      width: 100%
      height: auto
  /*@media (max-width: 576px)*/
  @media (max-width: 768px)
    .header
      height: 240px
      display: flex
      justify-content: center
      &__center
        width: 212px
        height: 125px
  /*@media (max-width: 992px)*/
  /*@media (max-width: 1200px)*/
  /*@media (min-width: 1200px)*/

  /*@media (max-width: 576px)*/
  /*@media (min-width: 576px)*/
  /*@media (min-width: 768px)*/
  /*@media (min-width: 992px)*/
  /*@media (min-width: 1200px)*/
</style>
