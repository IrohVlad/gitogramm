<template>
  <router-view/>
</template>

<script>
import { getData, getUser } from '../fetches'
import { clientId, clientSecret } from '../env'
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
      })
      this.$store.commit('SET_USERSDATA', dat)
    } catch (error) {
      console.log(error)
    }
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId, code, clientSecret
          })
        })
        const { token } = await response.json()
        localStorage.setItem('token', token)
        console.log(token)
      } catch (e) {
        console.log(e)
      }
    }
    try {
      const data = await getUser().then(item => item.json())
      this.$store.commit('SET_USER', data)
      console.log(this.$store.state.user)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style src="./global.scss" lang="scss">

</style>
