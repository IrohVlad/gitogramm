<template>
<div class="card">
    <div class="title">
      <div class="grad"></div>{{title}}</div>
    <div class="disc">
        {{disc}}
    </div>
    <btns :stars="stars" :reposts="reposts" />
</div>
</template>

<script>
import { btns } from '../../components/btns'
export default {
  name: 'card',
  components: {
    btns
  },
  props: ['title', 'disc', 'stars', 'reposts']
}
</script>

<style lang="scss">
.card{
            margin-top: 15px;
            padding: 24px;
            background: #FFFFFF;
            border: 1px solid #F1F1F1;
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            .title{
                font-weight: 700;
                font-size: 26px;
                // background-color:#D9D9D9;
                // height: 26px;
                // width: fit-content;
                // min-width: 200px;
            }
            .disc{
                margin-top: 15px;
                font-size: 15px;
                // background-color:#D9D9D9;
                // height: 15px;
                // width: fit-content;
                // min-width: 300px;
            }
//             .grad{
//             background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.48%, rgba(255, 255, 255, 0) 100%);
//             height: 100%;
//             width: 20px;
//             animation: waves 4s ease infinite normal 0s forwards;
//             position: absolute;
//             }
// }
// @keyframes waves{
//     0%{
//         left: -10px;
//     }
//     60% {
//         left: 100%;
//     } 
//     100%{
//         left: 100%;
//     }
}
</style>
