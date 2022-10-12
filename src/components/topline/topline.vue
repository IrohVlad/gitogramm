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
                <toplineuser v-for="user in toplinedata" :showname="true" :key="user" :nickname="user.owner.login">
                    <template v-slot:img>
                        <img :src="user.owner.avatar_url" alt=""/>
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
    }
  },
  props: {
    toplinedata: {
      type: Object
    }
  },
  components: {
    toplineuser
  }
}
</script>

<style src="./style.scss" lang="scss">

</style>
