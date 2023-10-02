export default {
  actions: {},
  mutations: {
    updateCountry(state, country) {
      state.filter.selectedCountry = country;
    },

    updateScores(state, scores) {
      state.filter.selectedScores = scores;
    },
  },
  state: {
    filter: {
      selectedCountry: '',
      selectedScores: '',
    },
  },
  getters: {
    usersFilter(state) {
      return state.filter;
    },
  },
};
