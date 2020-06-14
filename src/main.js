import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from "./store"

import axios from 'axios'
Vue.prototype.axios = axios

// Vue.filter("setWH", (url, arg) => {
//   return url.replace(/w\.h/, arg)
// })

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false
import '@/assets/iconfont/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
