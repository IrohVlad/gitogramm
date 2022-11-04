import { createStore } from 'vuex'
import { getReadme } from '../../fetches'

export default createStore({
  state: {
    usersdata: [{}
    ],
    user: {},
    counter: 100
  },
  mutations: {
    async SET_USERSDATA (state, payload) {
      state.usersdata = payload
    },
    async SET_USER (state, payload) {
      state.user = payload
    },
    async SET_ISSUES (state, payload) {
      state.usersdata[payload.number].issues = payload.issue
    },
    async UPDATE_COUNTER (state, payload) {
      let realCount
      if (payload > 9) {
        realCount = 0
        state.counter = realCount
      } else if (payload < 0) {
        realCount = 0
        state.counter = realCount
      } else {
        realCount = payload
        state.counter = realCount
      }
      if (!state.usersdata[realCount].readme) {
        try {
          const { data } = await getReadme(state.usersdata[realCount].owner.login, state.usersdata[realCount].name)
          state.usersdata[realCount].readme = data
        } catch (error) {
          console.log(error)
        }
      }
      state.usersdata.forEach((item, i) => {
        if (i === realCount) {
          item.act = false
          setTimeout(() => { item.act = true }, 0)
        } else {
          item.act = false
        }
      })
    }
  },
  actions: {
  }
})
