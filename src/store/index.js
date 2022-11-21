import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const res = await axios.get(process.env.VUE_APP_API_URL);
        const data = res.data.results;
        commit('setCharacters', data)
        commit('setCharactersFilter', data)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    },
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    }
  },
  modules: {
  }
})
