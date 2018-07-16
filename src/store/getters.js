const getters = {
  getListByName: (state) => (name) => {
    return state.userList.find(list => list.name === name )
  },
  getCurrentUser: state => state.currentUser
}

export default getters