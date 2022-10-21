<template>
    <div :class="active ? 'slide-container slide-active' : 'slide-container'">
        <div class="slide-header">
            <xprogress :activ="active"></xprogress>
            <toplineuser nickname="John" :showname="true">
                <template v-slot:img>
                  <img src="../../assets/avatar.svg" alt=""/>
                </template>
            </toplineuser>
        </div>
        <div class="slide-content">
            <slot name="content">
                <div>
                    The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions. For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
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
