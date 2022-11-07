<template>
    <div :class="active ? 'slide-container slide-active' : 'slide-container'">
        <div class="slide-header">
            <xprogress :active="active"></xprogress>
            <toplineuser :nickname="data.name" :showname="true">
                <template v-slot:img>
                  <img :src="data.avatar" alt=""/>
                </template>
            </toplineuser>
        </div>
        <div class="slide-content">
            <slot name="content">
                <div class="content" v-html="data.readme" v-if="data.readme">
                </div>
                <div class="skeleton" v-else>
                    <div class="grad"></div>
                    <div class="thickline"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="halfline"></div>
                </div>
            </slot>
        </div>
        <div class="slide-button">
            <xbutton @click="buttonStar(data.name, data.repo, this.$store.state.usersdata[index].like)" :hover="this.$store.state.usersdata[index].like" text="follow" hovertext="unfollow"></xbutton>
        </div>
    </div>
</template>

<script>
import { toplineuser } from '../../components/topline-user'
import { button } from '../../components/button'
import { progress } from '../../components/progress'
import { setStar } from '../../../fetches'
export default {
  name: 'slide',
  components: {
    toplineuser,
    xbutton: button,
    xprogress: progress
  },
  props: ['active', 'loading', 'data', 'index'],
  methods: {
    async buttonStar (login, repos, fol) {
      try {
        await setStar(login, repos, fol)
        this.$store.state.usersdata[this.index].like = !this.$store.state.usersdata[this.index].like
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss">
</style>
