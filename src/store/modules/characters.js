export default {
  actions: {
    async fetchCharacters(ctx) {
      const res = await fetch(
        "https://swapi.co/api/people"
      );
      const characters = await res.json();
      ctx.commit('pushCharacters', characters)
    }
  },
  mutations: {
    pushCharacters(state, characters) {
      state.characters = characters
    }
  },
  state: {
    characters: []
  },
  getters: {
    CHARACTERS(state) {
      return state.characters
    }
  }
}
