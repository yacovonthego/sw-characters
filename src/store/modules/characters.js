export default {
  actions: {
    async fetchCharacters(ctx) {
      const res = await fetch(
        "https://swapi.co/api/people"
      )
      const characters = await res.json();
      ctx.commit('pushCharacters', characters)
    }
  },
  mutations: {
    pushCharacters(state, characters) {
      state.characters = characters
    },
    concatChar(state, arr) {
      state.characters.concat(arr)
    }
  },
  state: {
    characters: []
  },
  getters: {
    CHARACTERS(state) {
      return state.characters.results
    }
  }
}


