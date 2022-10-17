<template>
    <div class="topline">
        <topline :toplinedata="postinfo"  >
            <template v-slot:headline>
                Gitogram/
            </template>
            <template v-slot:content>
              <img class="icon" src="../../assets/Home.svg" alt=""/>
              <toplineuser :showname="false" >
                <template v-slot:img>
                  <img src="../../assets/avatar.svg" alt=""/>
                </template>
              </toplineuser>
              <img class="icon" src="../../assets/out.svg" alt=""/>
            </template>
        </topline>
    </div>
    <div class="x-container">
      <div class="posts">
      <post v-for="(info, i) in $store.state.usersdata" :title="info.name" :issus="info.issues" :disc="info.description" :stars="info.stargazers_count" :reposts="info.forks_count" :key="info.id">
        <template v-slot:user>
          <router-link @click="this.$store.commit('SET_COUNTER', i)" to="/slider">
            <toplineuser :showname="true" :nickname="info.owner.login">
            <template v-slot:img >
              <img :src="info.owner.avatar_url" alt=""/>
            </template>
            </toplineuser>
          </router-link>
        </template>
      </post>
    </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { toplineuser } from '../../components/topline-user'
import { post } from '../../components/post'

export default {
  name: 'feeds',
  data () {
    return {
      postinfo: [
        {
          ava: '../../assets/avatar.svg',
          nick: 'VaniaStalker',
          title: 'BestFramework',
          disc: 'JavaScript framework for building interactive web applications ⚡',
          stars: '999k',
          reposts: '66',
          issues: [
            { name: 'joshua_l', text: 'Enable performance measuring in production, at the users request' },
            { name: 'joshua_l', text: 'Enable performance measuring in production, at the users request' }
          ]
        },
        {
          ava: '../../assets/avatar.svg',
          nick: 'Vlad121',
          title: 'SuperFramework',
          disc: 'JavaScript framework for building interactive web applications ⚡',
          stars: '156k',
          reposts: '4',
          issues: [
            { name: 'joshua_l', text: 'Enable performance measuring in production, at the users request' },
            { name: 'Marselle', text: 'transition-group with flex parent causes removed items to fly' },
            { name: 'Camille', text: 'transition-group with flex parent causes removed items to fly' },
            { name: 'joshua_l', text: 'Enable performance measuring in production, at the users request' },
            { name: 'Marselle', text: 'transition-group with flex parent causes removed items to fly' }
          ]
        }
      ]
    }
  },
  components: {
    topline,
    toplineuser,
    post
  }
}
</script>

<style lang="scss" scoped>
  .icon{
    color: black;
    height: 25px;
    &:not(:last-child){
        margin-right: 20px;
    }
  }
  .user{
    height: 38px;
    width: 38px;
    margin-right: 20px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
