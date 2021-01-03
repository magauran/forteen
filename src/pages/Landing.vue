<template>
  <div>
    <div class="landing-content">
      <div class="landing-header">
        <div class="landing-header-content">
          <div class="landing-bar">
            <div class="landing-logo">
              <img src="@/assets/logo.svg" alt="Site logo">
            </div>
            <div class="landing-social-buttons">
              <social-button class="button" v-on:click.native="twitter">
                <icon-base icon-name="twitter">
                  <icon-twitter/>
                </icon-base>
              </social-button>
              <social-button class="button" v-on:click.native="google">
                <icon-base icon-name="google">
                  <icon-google/>
                </icon-base>
              </social-button>
              <social-button class="button" v-on:click.native="instagram">
                <icon-base icon-name="instagram">
                  <icon-instagram/>
                </icon-base>
              </social-button>
              <social-button class="button" v-on:click.native="vk">
                <icon-base icon-name="vk">
                  <icon-vk/>
                </icon-base>
              </social-button>
            </div>
          </div>
        </div>
      </div>
      <div class="first-section">
        <div class="section-content">
          <div class="first-section-content">
            <div class="first-section-text">
              <h1>Подарки<br/>за задания!</h1>
              <p>Тысячи людей ежедневно не успевают справится с домашней рутиной и забывают сделать небольшие дела. Помоги им! Выполняй их поручения за баллы и обменивай их на подарки в магазине сервиса.</p>
            </div>
            <div class="first-section-img">
              <img src="@/assets/landing_section1_img.svg" alt="Girl with gifts">
            </div>
          </div>
        </div>
      </div>
      <div class="second-section">
        <div class="section-content">
          <div class="second-section-content">
            <div class="second-section-text">
              <h2>Сканируйте<br/>QR-код</h2>
              <p>Отсканировав код, ты попадешь на страницу сервиса в мобильном браузере. Там ты сможешь зарегистрироваться и начать выполнять задания!</p>
            </div>
            <div class="second-section-img">
              <img src="@/assets/landing_section2_img.svg" alt="People with an iPhone">
              <button class="plain-button"
                      v-clipboard="clipboardItem"
                      v-clipboard:success="clipboardSuccessHandler"
                      v-clipboard:error="clipboardErrorHandler">
                Скопировать
              </button>
              <v-snackbar
                v-model="snackbar"
                :timeout="snackbarTimeout"
                color="#7480FF"
                outlined
              >
                {{ snackbarText }}
              </v-snackbar>
            </div>
          </div>
        </div>
      </div>
      <div class="third-section">
        <div class="section-content">
          <div class="third-section-content">
            <h2>ForTeen в цифрах</h2>
            <landing-stats/>
          </div>
        </div>
      </div>
    </div>
    <div class="landing-footer">
      <div class="landing-footer-content">
        <div class="landing-company-info">
          <p><a href="mailto:info@ForTeen.ru">info@ForTeen.ru</a></p>
          <p>ИНН 465476587908</p>
          <p>БИК 345466879809</p>
          <p>Все права защищены</p>
        </div>
        <div class="landing-bar">
          <div class="landing-logo">
            <img src="@/assets/logo-white.svg" alt="Site logo">
          </div>
          <div class="landing-social-buttons">
            <social-button class="button" v-on:click.native="twitter">
              <icon-base icon-name="twitter">
                <icon-twitter/>
              </icon-base>
            </social-button>
            <social-button class="button" v-on:click.native="google">
              <icon-base icon-name="google">
                <icon-google/>
              </icon-base>
            </social-button>
            <social-button class="button" v-on:click.native="instagram">
              <icon-base icon-name="instagram">
                <icon-instagram/>
              </icon-base>
            </social-button>
            <social-button class="button" v-on:click.native="vk">
              <icon-base icon-name="vk">
                <icon-vk/>
              </icon-base>
            </social-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/Icons/IconBase'
import SocialButton from '@/components/buttons/SocialButton'
import IconTwitter from '@/components/Icons/IconTwitter'
import IconInstagram from '@/components/Icons/IconInstagram'
import IconGoogle from '@/components/Icons/IconGoogle'
import IconVk from '@/components/Icons/IconVK'

import LandingStats from '@/components/LandingStats/LandingStats'

export default {
  name: 'Landing',
  components: {
    LandingStats,
    SocialButton,
    IconBase,
    IconTwitter,
    IconInstagram,
    IconGoogle,
    IconVk
  },
  data () {
    return {
      snackbar: false,
      snackbarTimeout: 2000,
      snackbarText: 'Ссылка на сайт скопирована',
      clipboardItem: 'ForTeen.ru'
    }
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    setInterval(function () {
      that.performers += 1
    }, 7000)
    setInterval(function () {
      that.gifts += 1
    }, 3000)
    setInterval(function () {
      that.customers += 1
    }, 11000)
  },
  methods: {
    twitter: function () {
      window.open('https://twitter.com', '_blank')
    },
    google: function () {
      window.open('https://google.com', '_blank')
    },
    instagram: function () {
      window.open('https://instagram.com', '_blank')
    },
    vk: function () {
      window.open('https://vk.com', '_blank')
    },
    clipboardSuccessHandler ({ value }) {
      console.log('success', value)
      this.snackbar = true
    },
    clipboardErrorHandler ({ value }) {
      console.log('error', value)
    }
  }
}
</script>

<style scoped>
  .landing-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #FFFFFF;
  }
  .landing-header-content {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    max-width: 1280px;
    margin-top: 32px;
    margin-left: 32px;
    margin-right: 32px;
  }
  .landing-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 48px;
    max-width: 1280px;
  }
  .landing-logo {
    display: flex;
    align-items: center;
  }
  .landing-social-buttons {
    display: flex;
    align-items: center;
    align-content: flex-end;
    flex-wrap: nowrap;
  }
  .landing-social-buttons button:not(:first-of-type) {
    margin-left: 20px;
  }
  .section-content {
    max-width: 1280px;
    min-width: 560px;
    height: 100%;
    display: flex;
  }
  .first-section {
    min-height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .first-section-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
    align-items: center;
    justify-content: center;
  }
  .first-section-img {
    display: flex;
    flex-basis: 300px;
    margin-bottom: 50px;
  }
  .first-section-text {
    display: flex;
    flex-basis: 560px;
    flex-direction: column;
  }
  .second-section {
    min-height: 720px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .second-section-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-content: space-between;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .second-section-img {
    flex-basis: 686px;
    position: relative;
  }
  .second-section-img>button {
    display: inline-block;
    position: absolute;
    bottom: 80px;
    left: 240px;
    width: 120px;
    height: 32px;
    background-color: #7480FF;
    box-shadow: 0 0 1px rgba(117, 131, 142, 0.04), 0 2px 4px rgba(52, 60, 68, 0.16);
    border-radius: 8px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FBFBFB;
  }
  .second-section-img>button:hover {
    background-color: #545FDB;
  }
  .second-section-img>button:active {
    background-color: #3A43B7;
  }
  .second-section-img>button:focus {
    outline: 0;
  }
  .second-section-text {
    display: flex;
    flex-basis: 550px;
    flex-direction: column;
  }
  .third-section {
    height: 520px;
    display: flex;
    justify-content: center;
  }
  .third-section-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 100px;
    text-align: left;
    color: #7480FF;
    margin-bottom: 40px;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 73px;
    text-align: left;
    color: #7480FF;
    margin-bottom: 11px;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: left;
    color: #000000;
  }
  .landing-company-info {
    margin-bottom: 42px;
  }
  .landing-company-info>p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: left;
    color: #FFFFFF;
  }
  .landing-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 280px;
    background-color: #828282;
  }
  .landing-footer-content {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    max-width: 1280px;
    margin-left: 32px;
    margin-right: 32px;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #49C0B8;
    text-decoration: none;
  }
  .landing-content {
    background-color: white;
    min-height: calc(100vh - 350px);
  }
  .third-section-content>h2 {
    margin-bottom: 32px;
  }
</style>
