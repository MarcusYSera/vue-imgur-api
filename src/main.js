import { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';

import AuthHanlder from './components/AuthHandler';

const app = createApp(App);

//  Vue.use(VueRouter) where does this go

const router = new VueRouter({
  routes: [{ path: '/oauth2/callback', component: AuthHanlder }],
});

app
  .use(store)
  .use(router)
  .mount('#app');
