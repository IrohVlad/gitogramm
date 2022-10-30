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
        element.act = false
        element.readme = ''
      })
      this.$store.commit('SET_USERSDATA', dat)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./global.scss" lang="scss">

</style>
