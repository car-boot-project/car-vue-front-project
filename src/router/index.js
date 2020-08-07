import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/User/Login.vue'
import Collections from '../views/User/Collections.vue'

import manageLogin from '../views/Manage/manageLogin.vue'
import manageUser from '../views/Manage/manageUser.vue'
import manageCar from '../views/Manage/manageCar.vue'

import Home from '../views/User/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 用户登录
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  // 用户收藏
  {
    path:'/collections',
    name:'Collections',
    component:Collections,
  },

  // 管理员身份登录
  {
    path:'/managelogin',
    name:'manageLogin',
    component:manageLogin,
  },
  //管理用户页面
  {
    path:'/manageuser',
    name:'manageUser',
    component:manageUser,
  },
  //管理汽车页面
  {
    path:'/managecar',
    name:'manageCar',
    component:manageCar,
  },

]

const router = new VueRouter({
  routes
})

export default router
