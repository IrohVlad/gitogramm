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
      this.$store.commit('SET_USERSDATA', data.items)
    } catch (error) {
    }
  }
}
</script>

<style src="./global.scss" lang="scss">

</style>
