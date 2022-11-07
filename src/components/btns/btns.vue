<template>
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
</template>

<script>
export default {
  name: 'btns',
  props: ['stars', 'reposts', 'index'],
  data () {
    return {
      star: true,
      staractive: {
        color: 'green'
      }
    }
  },
  methods: {
    startoggle () {
      this.star = !this.star
    }
  }
}
</script>

<style lang="scss">
                .buttons{
                display: flex;
                margin-top: 32px;
                height: 28px;
                width: fit-content;
                background: #FAFBFC;
                border: 1px solid rgba(27, 31, 35, 0.15);
                border-radius: 6px;
                .star{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor:pointer;
                    img{
                        margin-right: 5px;
                    }
                }
                .repost{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor:pointer;
                    img{
                        margin-right: 5px;
                    }
                }
                div{
                    border-left: 1px solid rgba(27, 31, 35, 0.15);
                    border-right: 1px solid rgba(27, 31, 35, 0.15);
                    padding: 5px 12px;
                }
            }
</style>
