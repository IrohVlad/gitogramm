<template>
  <router-view/>
</template>

<script>
import { getData, getUser, getStarres } from '../fetches'
export default {
  name: 'App',
  components: {
  },
  async created () {
    try {
      const { data } = await getData()
      const dat = data.items
      dat.forEach((element, i) => {
        element.act = false
        element.readme = ''
        element.issues = []
        element.like = false
      })
      this.$store.commit('SET_USERSDATA', dat)
    } catch (error) {
      console.log(error)
    }
    try {
      const data = await getUser().then(item => item.json())
      this.$store.commit('SET_USER', data)
      console.log(this.$store.state.user)
    } catch (e) {
      console.log(e)
    }
    try {
      const data = await getStarres(this.$store.state.user.login).then(item => item.data)
      this.$store.commit('GET_STARRED', data)
      console.log(this.$store.state.starred)
    } catch (e) {
      console.log(e)
    }
    try {
      this.$store.state.starred.forEach(starred => {
        this.$store.state.usersdata.forEach((repo, i) => {
          if (repo.name === starred.name && repo.owner.login === starred.owner.login) {
            this.$store.commit('SET_STARRED', { number: i, star: true })
          }
        })
      })
    } catch (e) {
      console.log(e)
    }
    console.log(this.$store.state.usersdata)
  }
}
</script>

<style src="./global.scss" lang="scss">

</style>
