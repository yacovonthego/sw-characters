<template>
    <div>
      <div v-if="CHARACTERS" class="wrap">
        <character v-for="(char, index) in CHARACTERS" :char-item="CHARACTERS[index]" :char-num="index" :key="char.id"></character>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import character from "./character"

    export default {
        name: "layout",
        computed: {
            ...mapGetters(['CHARACTERS'])
        },
        components: {
            character
        }
    }
</script>

<style scoped lang="sass">
  .wrap
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: wrap

</style>
