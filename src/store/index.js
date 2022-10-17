import { createStore } from 'vuex'

export default createStore({
  state: {
    usersdata: [
    ],
    counter: 0
  },
  mutations: {
    async SET_USERSDATA (state, payload) {
      state.usersdata = payload
    },
    UPDATE_COUNTER (state, payload) {
      setTimeout(() => { this.$store.commit('UPDATE_COUNTER', ++this.$store.state.counter) }, 4000)
      state.counter = payload
      state.usersdata.forEach((item, i) => {
        if (i === payload) {
          item.act = true
        } else {
          item.act = false
        }
      })
    }
  },
  actions: {
  }
})
