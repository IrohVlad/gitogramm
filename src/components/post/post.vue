<template>
    <div class="post">
        <slot name="user"></slot>
        <card :title="title" :disc="disc" :stars="stars" :reposts="reposts" />
        <issues :info="issus"></issues>
        <div class="date">
        </div>
    </div>
</template>

<script>
import { issues } from '../../components/issues'
import { card } from '../../components/card'
export default {
  name: 'post',
  components: { issues, card },
  props: ['title', 'disc', 'stars', 'reposts', 'issus'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style src="./style.scss" lang="scss" >
</style>
