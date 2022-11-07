<template>
    <section class="auth-section">
        <div class="auth-content">
            <div class="auth">
                <div class="auth-title">Gitogram/</div>
                <div class="auth-text">More than just one repository. This is our digital world.</div>
                <div class="auth-button" @click="code()">
                    <div class="button-text">Authorize with github</div>
                    <div class="button-icon">
                        <img src="../../assets/gitIcon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="auth-img">
                <img src="../../assets/auth-img.png" alt="">
            </div>
        </div>
        <div class="auth-footer">
            <div class="auth-footer-text">© Gitogram from Loftschool</div>
        </div>
    </section>
</template>

<script>
import { clientId, clientSecret } from '../../../env'
import { getCode } from '../../../fetches'
export default {
  name: 'auth',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    code () {
      getCode()
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId, code, clientSecret
          })
        })
        const { token } = await response.json()
        localStorage.setItem('token', token)
        window.location = '/'
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-section{
    height: 100vh;
    display: flex;
    align-items:center;
    flex-direction: column;
    .auth-content{
        width: 100%;
        flex: 1 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40% 60%;
        .auth{
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            .auth-title{
                text-align: center;
                font-size: 40px;
                font-weight: 700;
                width: 260px;
                margin-bottom: 12px;
            }
            .auth-text{
                text-align: center;
                width: 260px;
                font-weight: 400;
                font-size: 18px;
                line-height: 28px;
                color: #6F6F6F;
                margin-bottom: 50px;
            }
            .auth-button{
                cursor: pointer;
                box-sizing:border-box;
                padding: 12px 24px;
                width: 260px;
                display: flex;
                align-items:center;
                justify-content: space-around;
                border-radius: 5px;
                background-color: #31AE54;
                color: white;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                letter-spacing: -0.15px;
            }
        }
        .auth-img{
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            img{
                max-height: 100%;
                max-width: 100%;
                object-position: center;
            }
        }
    }
    .auth-footer{
        box-shadow: 0px -0.33px 0px rgba(60, 60, 67, 0.29);
        width: 100%;
        height: 85px;
        color: rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
}
</style>
