<template>
    <div class="user">
        <div class="img">
            <slot name="img"></slot>
        </div>
        <div v-if="showname" class="name">
            {{nickname}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'toplineuser',
  props: ['nickname', 'showname'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.img{
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(52, 52, 57, 0.29);
}
</style>
