import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './../pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
