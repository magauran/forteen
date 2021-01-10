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
      clipboardItem: 'https://www.forteen.ru'
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

<style lang="scss" scoped src="./Landing.scss">
</style>
