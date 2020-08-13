import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import './assets/style/theme/index.css'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import qs from 'qs'


//导入自定义模块
import {
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
  } from './common.js'

Vue.prototype.$getCurDate = getCurDate;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;


axios.defaults.baseURL="http://127.0.0.1:8082/api/v1/";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach(function(to, from, next) {
  let user = sessionStorage.getItem('user');
  let admin = sessionStorage.getItem('admin');
  //除了登陆、注册、首页、商家列表、商家信息之外，都需要判断是否登陆了
  if (!(to.path == '/' || to.path == '/home' || to.path ==
  '/login' || to.path == '/register')) {
  if (user == null&&admin==null) {
  router.push('/home');
  location.reload();
  }
  }
  next();
  });
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
