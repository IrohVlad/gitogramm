<template>
  <router-view/>
</template>

<script>
import { getData } from '../fetches'
export default {
  name: 'App',
  components: {
  },
  async created () {
    try {
      const { data } = await getData()
      const dat = data.items
      dat.forEach((element, i) => {
        if (i === 0) {
          element.act = true
        } else {
          element.act = false
        }
      })
      this.$store.commit('SET_USERSDATA', dat)
      await console.log(this.$store.state.usersdata)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./global.scss" lang="scss">

</style>
