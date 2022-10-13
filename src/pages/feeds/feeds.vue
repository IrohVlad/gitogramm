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
      <post v-for="info in postinfo" :title="info.name" :issus="info.issues" :disc="info.description" :stars="info.stargazers_count" :reposts="info.forks_count" :key="info.id">
        <template v-slot:user>
          <toplineuser :showname="true" :nickname="info.owner.login">
            <template v-slot:img >
              <img :src="info.owner.avatar_url" alt=""/>
            </template>
          </toplineuser>
        </template>
      </post>
    </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { toplineuser } from '../../components/topline-user'
import { post } from '../../components/post'
import { getData } from '../../../fetches'

export default {
  name: 'feeds',
  data () {
    return {
      postinfo: []
    }
  },
  components: {
    topline,
    toplineuser,
    post
  },
  async created () {
    try {
      const { data } = await getData()
      this.postinfo = data.items
    } catch (error) {
    }
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
