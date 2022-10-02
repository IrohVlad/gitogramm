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
  props: ['icon', 'nickname', 'showname'],
  data () {
    return {
    }
  }
}
</script>
