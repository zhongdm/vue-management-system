import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index'
import './assets/less/common.less'
import axios from 'axios'

Vue.config.debug = true
Vue.prototype.$http = axios

var vm = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
console.log(vm);
// ======vue.js  ssr ======
// import Vue from 'vue'
// import App from './App.vue'

// // 导出一个工厂函数，用于创建新的
// // 应用程序、router 和 store 实例
// export function createApp () {
//   const app = new Vue({
//     // 根实例简单的渲染应用程序组件。
//     render: h => h(App)
//   })
//   return { app }
// }
