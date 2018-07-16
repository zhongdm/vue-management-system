const mutations = {
  increment(state, n){
    state.activeMenuId = n
  },
  setLoginUserToken(state, name){
    state.currentUser = name
  }
}

export default mutations