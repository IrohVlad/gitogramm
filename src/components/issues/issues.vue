<template>
    <div class="issues">
        <div class="text" @click="issuetoggle" @click.once="fetchIssues(index)">{{issue ? 'View issues' : 'Hide issues'}}<img :style="issue ? '' : 'transform: rotate(180deg)'" src="../../assets/vector-bottom.svg" class="star-img" alt=""/></div>
        <div v-if="this.$store.state.usersdata[index].issues == ''" class="skelet" :style="issue ? issueactive : ''">
          <div class="lines">
            <div class="longline">
              <div class="grad">
            </div>
            </div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
        </div>
        <ul v-else class="issues-items" :style="issue ? issueactive : ''">
            <li class="issue" v-for="issu in this.$store.state.usersdata[index].issues" :key="issu.name">
                <div class="issue-nick">{{issu.user.login}}</div>
                <div class="issue-text">{{issu.title}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getIssues } from '../../../fetches'
export default {
  name: 'issuesbool',
  props: ['index'],
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
          .then(response => response.data)
        this.$store.commit('SET_ISSUES', { number: index, issue: issues })
        console.log(this.$store.state.usersdata[index])
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
.skelet{
    margin-top: 10px;
    width: 300px;
    height: fit-content;
    position: relative;
    display: flex;
    gap: 10px;
    .lines{
        .grad{
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.48%, rgba(255, 255, 255, 0) 100%);
          height: 100%;
          width: 20px;
          animation: waves 2s ease infinite normal 0s forwards;
          position: absolute;
        }
        display: flex;
        flex-direction: column;
        gap: 10px;
        .longline{
          height: 15px;
          width: 300px;
          background-color: #D9D9D9;
        }
        .line{
            height: 15px;
            width: 150px;
            background-color: #D9D9D9;
        }
    }
}
@keyframes waves{
    0%{
        left: -10px;
    }
    60% {
        left: 100%;
    }
    100%{
        left: 100%;
    }
}
</style>
