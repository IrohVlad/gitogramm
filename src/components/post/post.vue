<template>
    <div class="post">
        <slot name="user"></slot>
        <div class="card">
            <div class="title">{{title}}</div>
            <div class="disc">
                {{disc}}
            </div>
            <div class="buttons">
                <div class="star" @click="startoggle" :style="star ? staractive : ''">
                    <img src="../../assets/stargreen.svg" class="star-img" alt=""/>
                    Star
                </div>
                <div class="star-count">
                    {{stars}}
                </div>
                <div class="repost">
                    <img src="../../assets/branch.svg" alt=""/>
                    Fork
                </div>
                <div class="repost-count">{{reposts}}</div>

            </div>
        </div>
        <div class="issues">
            <div class="text" @click="issuetoggle">{{issue ? 'View issues' : 'Hide issues'}}<img :style="issue ? '' : 'transform: rotate(180deg)'" src="../../assets/vector-bottom.svg" class="star-img" alt=""/></div>
            <ul class="issues-items" :style="issue ? issueactive : ''">
                <li class="issue" v-for="issu in issus" :key="issu.name">
                    <div class="issue-nick">{{issu.name}}</div>
                    <div class="issue-text">{{issu.text}}</div>
                </li>
            </ul>
        </div>
        <div class="date">
        </div>
    </div>
</template>

<script>
export default {
  name: 'post',
  props: ['title', 'disc', 'stars', 'reposts', 'issus'],
  data () {
    return {
      star: true,
      issue: true,
      staractive: {
        color: 'green'
      },
      issueactive: {
        display: 'none'
      }
    }
  },
  methods: {
    issuetoggle () {
      this.issue = !this.issue
    },
    startoggle () {
      this.star = !this.star
    }
  }
}
</script>

<style src="./style.scss" lang="scss" >
</style>
