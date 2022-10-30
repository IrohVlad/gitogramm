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
            }
            .disc{
                margin-top: 15px;
                font-size: 15px;
            }
}
</style>
