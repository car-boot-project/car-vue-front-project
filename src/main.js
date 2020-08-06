import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import './assets/style/theme/index.css'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL="http://127.0.0.1:8082/";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
