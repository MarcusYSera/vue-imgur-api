import { createWebHistory, createRouter } from 'vue-router';
import AuthHandler from '../components/AuthHandler';
import ImageList from '../components/ImageList';
import UploadForm from '../components/UploadForm';

const routes = [
  {
    path: '/',
    name: 'ImageList',
    component: ImageList,
  },
  {
    path: '/upload',
    name: 'UploadForm',
    component: UploadForm,
  },
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
