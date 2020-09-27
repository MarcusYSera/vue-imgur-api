import api from '../../api/imgur';
import router from '../../router';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const res = await api.fetchImages(token);
    commit('setImages', res.data.data);
  },
  async uploadImages({ rootState }, images) {
    // get access token
    const { token } = rootState.auth;
    // Call API module to do the upload
    await api.upload(images, token);
    // Redirect user to Image List component
    router.push('/');
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
