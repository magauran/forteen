<template>
  <div>
    <div class="side-menu-overlay" style="width: 0; opacity: 0;" @click.prevent="openMenu"></div>
    <div class="side-menu-wrapper">
      <ul>
        <li v-for="(menu) in menus" v-bind:key="(menu.title)">
          <div @click="onTap(menu.path)">
            <i v-if="menu.material" class="material-icons">{{ menu.material }}</i>
            <i :class="menu.icon" v-else></i>
            {{ menu.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bus } from '@/main'

export default {
  name: 'menu-overlay',
  props: {
    menus: { type: Array },
    label: { default: 'Open Menu' },
    icon: { default: String },
    material: { default: String }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    openMenu () {
      this.open = !this.open
      const slideBar = document.querySelector('.side-menu-wrapper')
      const overlay = document.querySelector('.side-menu-overlay')
      if (this.open) {
        slideBar.style.right = '0'
        overlay.style.opacity = 1
        overlay.style.width = '100%'
      } else {
        slideBar.style.right = '-100%'
        overlay.style.opacity = 0
        overlay.style.width = 0
      }
    },
    onTap (path) {
      if (this.$router.currentRoute.path === path) {
        this.openMenu()
      } else {
        this.$router.push(path)
      }
    }
  },
  mounted () {
    bus.$on('openMenuEventName', this.openMenu)
  }
}
</script>

<style lang="scss" scoped>
.side-menu-wrapper {
  display: flex;
  overflow: hidden;
  background: $ft-background;
  position: fixed;
  right: -100%;
  height: 100%;
  z-index: 2;
  transition: 0.5s;
  width: 100%;
  align-items: center;
}
.side-menu-wrapper > ul {
  list-style:none;
  padding:0;
  margin:0;
  overflow-y: auto;
  width:100%;
}
.side-menu-wrapper > ul > li > div {
  display: block;
  transition: 0.3s;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: $ft-text-accent1;
  padding-top: 16px;
  padding-bottom: 16px;
}
.side-menu-overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $ft-dimming-slideover;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  opacity: 0;
  transition: opacity 1s;
}
</style>
