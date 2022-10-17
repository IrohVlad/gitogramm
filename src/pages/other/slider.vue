<template>
    <div class="slider-page">
        <div class="slider-topline x-container">
        <div class="topline-title">Gitogram/</div>
        <div class="topline-close">
          <router-link to="/"><img src="../../assets/close.svg" alt=""/></router-link>
        </div>
        </div>
        <div class="slider-container">
          <div class="slides">
            <div class="slide" :style="`transform: scale(0.8) translateX(${-622 * this.$store.state.counter}px)`" v-for="info in $store.state.usersdata" :key="info.id">
              <div v-if="this.$store.state.counter != 0" :style="info.act ? 'display: flex' : 'display: none'" class="button-move" @click="slideDec">
                <img src="../../assets/Shape.svg" />
              </div>
              <slide :active="info.act">
              {{info}}
              </slide>
              <div v-if="this.$store.state.counter != 9" :style="info.act ? 'display: flex' : 'display: none'" class="button-move" @click="slideInc">
                <img src="../../assets/Shape1.svg" />
              </div>
            </div>
          </div>
        </div>
        </div>
</template>

<script>
import { slide } from '../../components/slide'
export default {
  name: 'slider',
  components: {
    slide
  },
  methods: {
    slideInc () {
      this.$store.commit('UPDATE_COUNTER', ++this.$store.state.counter)
      console.log(this.$store.state.counter)
    },
    slideDec () {
      this.$store.commit('UPDATE_COUNTER', --this.$store.state.counter)
      console.log(this.$store.state.counter)
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>
