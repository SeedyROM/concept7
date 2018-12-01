import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './views/NotFound/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home/Home.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "about" */ './views/Work/Work.vue'),
    },
    {
      path: '/*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});
