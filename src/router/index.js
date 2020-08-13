import Vue from 'vue'
import VueRouter from 'vue-router'


import Register from '../views/User/Register.vue'
import Login from '../views/User/Login.vue'
import Collections from '../views/User/Collections.vue'
import CarDetail from '../views/User/CarDetail.vue'

import manageLogin from '../views/Manage/manageLogin.vue'
import manageUser from '../views/Manage/manageUser.vue'
import manageCar from '../views/Manage/manageCar.vue'
import manageList from '../views/Manage/manageList.vue'

import Home from '../views/User/Home.vue'
import About from '../views/User/About.vue'
import Search from '../views/User/Search.vue'

Vue.use(VueRouter) 
  const routes = [
    {
      path:"/",
      redirect:"/home",
      component:Home,
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component:About,
  },
  // 用户注册
  {
    path:'/register',
    name:'Register',
    component:Register,
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
  //车辆详情页
  {
    path:'/cardetail',
    name:'CarDetail',
    component:CarDetail,
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
  //管理员列表
  {
    path:'/managelist',
    name:'manageList',
    component:manageList,
  },
//  搜索
{
  path:'/search',
  name:'Search',
  component:Search,
}
]

const router = new VueRouter({
  routes
})

export default router
