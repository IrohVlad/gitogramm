<template>
    <div @mouseover="onHover" @mouseout="onHover" :class="hover ? 'button active' : 'button'">
        {{hover ? hovertext : text}}
    </div>
</template>

<script>
export default {
    name: 'button',
    props: ['text', 'hovertext'],
    data () {
        return {
            hover: false
        }
    },
    methods: {
        onHover () {
            this.hover = !this.hover
        }
    }
}
</script>

<style src="./style.scss" lang="scss"></style>