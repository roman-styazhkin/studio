import Vue from 'vue';
import Vuex from 'vuex';
import filter from './modules/filter';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { users, filter },
});
