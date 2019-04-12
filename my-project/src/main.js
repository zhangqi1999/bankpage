// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import List from './components/List'
// 1、在main.js中引入axios
import axios from 'axios'
// 2、写成vue的原型属性
Vue.prototype.$http = axios
Vue.use(Vant);
Vue.config.productionTip = false
Vue.component("list-component",List)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
