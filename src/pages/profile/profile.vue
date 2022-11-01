<template>
    <div class="profile">
        <div class="topline">
            <topline :toplinedata="postinfo"  >
                <template v-slot:headline>
                    Gitogram/
                </template>
                <template v-slot:content>
                <img v-if="this.$store.state.user.id" class="icon" src="../../assets/Home.svg" alt=""/>
                <toplineuser :showname="false" >
                    <template v-slot:img>
                    <img v-if="this.$store.state.user.id" :src="this.$store.state.user.avatar_url" alt=""/>
                    <img v-else @click="code()" src="../../assets/avatar.svg" alt=""/>
                    </template>
                </toplineuser>
                <img class="icon" v-if="this.$store.state.user.id" src="../../assets/out.svg" alt=""/>
                </template>
            </topline>
        </div>
        <div class="profile__container x-container">
            <div class="user__column">
                <div class="column__title">My profile</div>
                <div class="user__info">
                    <div class="user__icon">
                        <img src="../../assets/avatar.svg" alt="">
                    </div>
                    <div class="user__lines">
                        <div class="user__name">joshua_l</div>
                        <div class="user_counts">
                            <div class="reposts">
                                <div class="reposts__count">50</div>
                                <div class="reposts__text">reposts</div>
                            </div>
                            <div class="watchers">
                                <div class="watchers__count">500</div>
                                <div class="watchers_title">watchers</div>
                            </div>
                        </div>
                        <div class="user__subname">Jacob West</div>
                    </div>
                </div>
            </div>
            <div class="subscribers__column">
                <div class="subscribers__topline">
                    <div class="column__title">Repositories</div>
                    <div class="column__counter">6</div>
                </div>
                <card/>
                <card/>
                <card/>
            </div>
        </div>
    </div>
</template>

<script>
import { topline } from '@/components/topline'
import { toplineuser } from '@/components/topline-user'
import { card } from '@/components/card'
export default {
  name: 'profile',
  components: {
    topline,
    toplineuser,
    card
  }
}
</script>

<style src="./style.scss" lang="scss">
</style>
