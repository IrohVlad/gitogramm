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
            <xbutton text="follow" hovertext="unfollow"></xbutton>
        </div>
    </div>
</template>

<script>
import { toplineuser } from '../../components/topline-user'
import { button } from '../../components/button'
import { progress } from '../../components/progress'
export default {
  name: 'slide',
  components: {
    toplineuser,
    xbutton: button,
    xprogress: progress
  },
  props: ['active', 'loading', 'data']
}
</script>

<style src="./style.scss" lang="scss">
</style>
