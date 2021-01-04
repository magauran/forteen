import LandingStats from '@/components/LandingStats/LandingStats.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'

import Vue from 'vue'
import { bus } from '@/main'

export default Vue.extend({
  components: {
    LandingStats,
    MenuOverlay
  },
  data () {
    return {
      menuVisible: false,
      links: [
        { title: 'Главная', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', target: '_black' },
        { title: 'Профиль', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', target: '_black' },
        { title: 'Задания', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', target: '_black' },
        { title: 'Магазин', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', target: '_black' }
      ],
      bus: new Vue()
    }
  },
  methods: {
    openMenu () {
      bus.$emit('openMenuEventName')
    }
  }
})
