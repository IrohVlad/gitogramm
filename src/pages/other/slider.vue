<template>
    <div class="slider-page">
        <div class="slider-topline x-container">
        <div class="topline-title">Gitogram/</div>
        <div class="topline-close"><img src="../../assets/close.svg" alt=""></div>
        </div>
        <div class="slider-container">
          <div class="slides">
            <div class="slide" v-for="info in $store.state.usersdata" :key="info.id">
              <div class="button-move"></div>
              <slide active="true">
              {{info}}
              </slide>
              <div class="button-move"></div>
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
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>
