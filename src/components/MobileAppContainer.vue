<template>
  <div>
    <v-app-bar color="#fff" dense flat app>
      <img class="icon" src="@/assets/logo.svg" alt="Site logo">
      <v-spacer></v-spacer>
      <button v-if="this.loginButtonVisible" class="link-button" @click="$router.push('/login')">Войти</button>
      <v-app-bar-nav-icon v-on:click="openMenu"></v-app-bar-nav-icon>
    </v-app-bar>
    <menu-overlay :menus="links"></menu-overlay>
    <v-content id="content-container">
      <slot></slot>
    </v-content>
  </div>
</template>

<script>
import Vue from 'vue'
import MenuOverlay from '@/components/MenuOverlay'
import { bus } from '@/main'

export default {
  name: 'MobileAppContainer',
  components: {
    MenuOverlay
  },
  props: {
  },
  data () {
    return {
      menuVisible: false,
      links: [
        { title: 'Главная', path: '/' },
        { title: 'Профиль', path: '/profile' },
        { title: 'Задания', path: '/tasks' },
        { title: 'Магазин', path: '/shop' }
      ],
      bus: new Vue(),
      loginButtonVisible: false
    }
  },
  mounted () {
    this.loginButtonVisible = !this.$store.state.user.loggedIn && !this.$route.meta.forceHideLoginButton
  },
  methods: {
    openMenu () {
      bus.$emit('openMenuEventName')
    }
  }
}
</script>

<style lang="scss" scoped>
img.icon {
  width: 87px;
  height: 28px;
}

.link-button {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $ft-text-primary;

  margin-right: 8px;
}
.link-button:focus {
  outline: 0;
}

#content-container {
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
}
</style>
