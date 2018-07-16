import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: "meimei",
    userList: [
      {name:'admin'},
      {name:'meimei'}
    ],
    currentUser: "",
    // 激活的菜单id
    activeMenuId: 1 
  },
  getters,
  actions,
  mutations
})

export default store