<template>
    <button @click.prevent="onHover" :class="hover ? 'button active' : 'button'">
        {{hover ? hovertext : text}}
    </button>
</template>

<script>
export default {
  name: 'button',
  props: ['text', 'hovertext', 'hover'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
