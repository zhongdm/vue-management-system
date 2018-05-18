import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/'
import './assets/less/common.less'

Vue.config.debug = true

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})