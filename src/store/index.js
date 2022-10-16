import { createStore } from 'vuex'

export default createStore({
  state: {
    usersdata: [
    ]
  },
  mutations: {
    async SET_USERSDATA (state, payload) {
      state.usersdata = payload
    }
  },
  actions: {
  }
})
