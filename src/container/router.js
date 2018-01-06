import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Common from '../pages/tools/toolcommon.vue';
import Ganyinhua from '../pages/tools/toolganyinhua.vue';
import Yunfu from '../pages/tools/toolyunfu.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/common',
    name: 'common',
    component: Common
  }, {
    path: '/ganyinhua',
    name: 'toolganyinhua',
    component: Ganyinhua
  }, {
    path: '/yunfu',
    name: 'toolyunfu',
    component: Yunfu
  }
];

export default function Router(Vue) {
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}
