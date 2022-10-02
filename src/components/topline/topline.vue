<template>
    <div class="c-topline">
        <div class="x-container">
            <div class="topline-content">
                <div class="headline">
                    <slot name="headline"></slot>
                </div>
                <div class="content" v-if="$slots.content">
                    <slot name="content"></slot>
                </div>
            </div>
            <div class="topline-users">
                <toplineuser v-for="user in users" :showname="true" :key="user" :nickname="user.name">
                    <template v-slot:img>
                        <img src="../../assets/avatar.svg" alt=""/>
                    </template>
                </toplineuser>
            </div>
        </div>
    </div>
</template>

<script>
import { toplineuser } from '../topline-user'
export default {
  name: 'topline',
  data () {
    return {
      users: [
        { name: 'Josh', icon: '../../assets/avatar.svg' },
        { name: 'Josh', icon: 'home.svg' },
        { name: 'Josh', icon: 'home.svg' },
        { name: 'Josh', icon: '../../assets/avatar.svg' },
        { name: 'Josh', icon: 'home.svg' },
        { name: 'Josh', icon: 'home.svg' },
        { name: 'Josh', icon: '../../assets/avatar.svg' },
        { name: 'Josh', icon: 'home.svg' },
        { name: 'Josh', icon: 'home.svg' }
      ]

    }
  },
  components: {
    toplineuser
  }
}
</script>

<style src="./style.scss" lang="scss">

</style>
