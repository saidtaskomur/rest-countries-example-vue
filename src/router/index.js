import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const originalPush = Router.prototype.push;
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => { });
};

export default router;
