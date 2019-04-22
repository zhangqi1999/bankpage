// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
import Mint from 'mint-ui';


Vue.use(Vuex)
Vue.prototype.$http = axios;
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
