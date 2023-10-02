export default {
  actions: {
    async fetchUsers({ commit }, url) {
      const res = await fetch(url);
      const users = await res.json();
      commit('updateUsers', users);
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
};
