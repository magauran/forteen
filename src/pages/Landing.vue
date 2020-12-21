<template>
  <div>
    <div>
      <div class="landing-top-bar">
        <div class="landing-logo">
          <img src="@/assets/logo.svg">
        </div>
        <div class="landing-social-buttons">
          <social-button class="button">
            <icon-base icon-name="twitter">
              <icon-twitter/>
            </icon-base>
          </social-button>
          <social-button class="button">
            <icon-base icon-name="google">
              <icon-google/>
            </icon-base>
          </social-button>
          <social-button class="button">
            <icon-base icon-name="instagram">
              <icon-instagram/>
            </icon-base>
          </social-button>
          <social-button class="button">
            <icon-base icon-name="vk">
              <icon-vk/>
            </icon-base>
          </social-button>
        </div>
      </div>
      <div>
        First section
      </div>
      <div>
        Second section
      </div>
      <div>
        Third section
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

export default {
  name: 'Landing',
  components: {
    SocialButton,
    IconBase,
    IconTwitter,
    IconInstagram,
    IconGoogle,
    IconVk
  }
}
</script>

<style scoped>
  .landing-top-bar {
    display: flex;
    flex-direction: row;
    background-color: aquamarine;
    justify-content: space-between;
    height: 48pt;
  }
  .landing-logo {
    display: flex;
    background-color: yellow;
    align-items: center;
  }
  .landing-social-buttons {
    display: flex;
    align-items: center;
    align-content: flex-end;
    flex-wrap: nowrap;
    background-color: antiquewhite;
  }
  .landing-social-buttons button:not(:first-of-type) {
    margin-left: 40px;
  }
</style>
