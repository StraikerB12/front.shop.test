import Vue from 'vue';
import Router from 'vue-router';

import store from '~/store';

import middlewarePipeline from './middlewarePipeline';
import auth from './middleware/auth';
import guest from './middleware/guest';


Vue.use(Router);

// Массив с роутами отделен для легкого доступа
export const routers = [
  // {
  //   path: '/',
  //   name: 'MainPage',
  //   component: () => import('~/components/MainPage'),
  //   meta: {
  //     visible: false
  //   }
  // },


  // {
  //   path: '/articles',
  //   name: 'ArticlesPage',
  //   component: () => import('~/components/ArticlesPage/ArticlesPage'),
  //   props: true,
  //   meta: {
  //     middleware: [auth],
  //     title: "Статьи",
  //     visible: true,
  //     rights: [],
  //     type: 'sub',
  //     access: ['redactor','administrator']
  //   },
  // },
  // {
  //   path: '/articles/:id',
  //   name: 'ArticlePage',
  //   component: () => import('~/components/ArticlesPage/ArticlePage'),
  //   props: true,
  //   meta: {
  //     middleware: [auth],
  //     title: "Статья",
  //     visible: false,
  //     rights: [],
  //     type: 'sub'
  //   },
  // },
  


  // {
  //   path: '/*',
  //   name: 'Error',
  //   component: () => import('~/components/CompositeBlocks/Error404Page'),
  //   props: true,
  //   meta: {
  //     // middleware: [auth],
  //     title: "Ошибка 404",
  //     visible: false,
  //     rights: []
  //   }
  // }
  
]

export const router = new Router({
  mode: 'history',
  base: '/',
  hashbang: false,
  routes: routers
});

// Выполнение промежуточного ПО
router.beforeEach((to, from, next) => {
  // console.log(to.path);
  store.commit('setRoute', to.path);
  if(!to.meta.middleware){ return next()} // Проверка на наличие Middleware
  const middleware = to.meta.middleware; // Выборка Middleware
  const context = {to, from, next, store}; // Установка нового context
  return middleware[0]({ ...context, next: middlewarePipeline(context, middleware, 1) }); // Передача на конвеер
});




