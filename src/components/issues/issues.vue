<template>
    <div class="issues">
        <div class="text" @click="issuetoggle" @click.once="fetchIssues(index)">{{issue ? 'View issues' : 'Hide issues'}}<img :style="issue ? '' : 'transform: rotate(180deg)'" src="../../assets/vector-bottom.svg" class="star-img" alt=""/></div>
        <ul class="issues-items" :style="issue ? issueactive : ''">
            <li class="issue" v-for="issu in info" :key="issu.name">
                <div class="issue-nick">{{issu.name}}</div>
                <div class="issue-text">{{issu.text}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getIssues } from '../../../fetches'
export default {
  name: 'issuesbool',
  props: ['info', 'index'],
  data () {
    return {
      issue: true,
      issueactive: {
        display: 'none'
      }
    }
  },
  methods: {
    issuetoggle () {
      this.issue = !this.issue
    },
    async fetchIssues (index) {
      try {
        const issues = await getIssues(this.$store.state.usersdata[index].owner.login, this.$store.state.usersdata[index].name)
        this.$store.commit('SET_ISSUES', { number: index, issue: issues })
        console.log(issues)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style src="" lang="scss">
    .issues{
            margin-top: 12px;
            .text{
                width: fit-content;
                cursor:pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    margin-left: 5px;
                }
            }
            .issues-items{
                margin-top: 10px;
                .issue{
                    display: flex;
                    .issue-text{
                        font-size: 14px;
                    }
                    .issue-nick{
                        margin-right: 10px;
                        font-size: 14px;
                        font-weight: 700;
                    }
                    &:not(:first-child){
                        margin-top: 6px;
                    }
                }
            }
        }
</style>
