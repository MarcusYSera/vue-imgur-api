import api from '../../api/imgur';

const state = {
  token: null,
};

const getters = {
  isLoggedIn: state => {
    return !!state.token;
  },
};

// Try to keep all intricate methods/computations in actions. Keep State, getters, and mutations lean
const actions = {
  // first argument will always be some type of value
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  login: () => {
    api.login();
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
