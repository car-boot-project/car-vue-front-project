import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/User/Login.vue'
import Collections from '../views/User/Collections.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

]

const router = new VueRouter({
  routes
})

export default router
