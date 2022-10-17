<template>
    <div class="progress-container">
        <div :class="activ ? 'progress-active': 'progress'"></div>
    </div>
</template>

<script>
export default {
  name: 'progress',
  data () {
    return {
    }
  },
  methods: {
  },
  props: ['activ']
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
            transition: all;
            transition-duration: 4s;
        }
        .progress-active{
            height: 100%;
            width: 100%;
            background-color: #31AE54;
            transition: all;
            transition-duration: 4s;
        }
    }
</style>
