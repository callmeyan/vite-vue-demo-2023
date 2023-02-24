import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import HomeView from '../views/HomeView.vue';

// 创建路由对象 需要参数
const router = createRouter({
  // 参数1： hash history
  // hash模式 /#/about
  // history模式 /about
  // 两种模式在开发阶段没有任何区别，只是部署是，history需要设置伪静态，将所有的请求指向 index.html
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由地址及相应组件的配置
  routes: [
    {
      // 当前组件的的访问路径
      path: '/',
      name: 'home',
      // 对应的组件对象
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/child',
      name: 'child1',
      component: () => import('../views/Child.vue'),
    },
    {
      path: '/father',
      name: 'father',
      component: () => import('../views/Father.vue'),
      children: [
        {
          path: 'child', // 子路由的路径前面不要写 /
          name: 'child',
          component: () => import('../views/Child.vue'),
        },
      ],
    },
  ],
});

export default router;
