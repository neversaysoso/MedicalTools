import VueRouter from 'vue-router';
import { setTitle } from '../util/index.js'
import Home from '../pages/home/index.vue';
import Common from '../pages/tools/toolcommon.vue';
import Ganyinhua from '../pages/tools/toolganyinhua.vue';
import Yunfu from '../pages/tools/toolyunfu.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '小企钉'
    }
  }, {
    path: '/common',
    name: 'common',
    component: Common,
    meta: {
      title: '通用模板'
    }
  }, {
    path: '/ganyinhua',
    name: 'toolganyinhua',
    component: Ganyinhua,
    meta: {
      title: '肝硬化死亡率Child-Pugh评分'
    }
  }, {
    path: '/yunfu',
    name: 'toolyunfu',
    component: Yunfu,
    meta: {
      title: '孕妇增加体重'
    }
  }
];



export default function Router(Vue) {
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  router.afterEach(route => {
    setTitle(route.meta.title)
  })
  return {
    router
  }
}
