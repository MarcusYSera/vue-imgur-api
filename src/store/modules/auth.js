import api from '../../api/imgur';
import qs from 'qs';
import router from '../../router';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: state => !!state.token,
};

// Try to keep all intricate methods/computations in actions. Keep State, getters, and mutations lean
const actions = {
  // first argument will always be some type of value
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
};

const mutations = {
  // first  argument will always be state
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
