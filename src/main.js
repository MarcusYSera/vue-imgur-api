import { createApp } from 'vue';
// import VueRouter from 'vue-router';
import App from './App';
import router from './router';
import store from './store';

// import AuthHanlder from './components/AuthHandler';

// const app = createApp(App);

//  Vue.use(VueRouter) where does this go

// const router = new VueRouter({
//   mode: 'history',
//   routes: [{ path: '/oauth2/callback', component: AuthHanlder }],
// });

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
