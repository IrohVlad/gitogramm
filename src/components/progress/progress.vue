<template>
    <div :class={active} :key="1" class="progress-container">
        <div ref="indicator" class="progress"></div>
    </div>
</template>

<script>
export default {
  name: 'progress',
  props: ['active'],
  data () {
    return {}
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitionend', () => { this.$store.commit('UPDATE_COUNTER', ++this.$store.state.counter) })
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', () => { this.$store.commit('UPDATE_COUNTER', ++this.$store.state.counter) })
  }
}
</script>

<style lang="scss">
    .progress-container {
        height: 2px;
        width: 100%;
        background-color: #31AE544D;
        border-radius: 1px;
        overflow: hidden;
        .progress{
            height: 100%;
            width: 0px;
            background-color: #31AE54;
        }
        &.active {
            .progress{
                width: 100%;
                transition: 5s;
            }
        }
    }
</style>
