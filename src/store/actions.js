const actions = {
  increment({ commit }, n){
    commit('increment', n)
  },
  setLoginUserToken({ commit }, name){
    commit('setLoginUserToken', name ? name : sessionStorage.username)
  }
}

export default actions