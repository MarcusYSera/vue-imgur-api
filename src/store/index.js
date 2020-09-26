import { createStore } from 'vuex';
import auth from './modules/auth';

export default createStore({
  // state() {
  //   return {
  //     count: 1,
  //   };
  // },
  // mutations: {},
  // actions: {},
  modules: { auth },
});
