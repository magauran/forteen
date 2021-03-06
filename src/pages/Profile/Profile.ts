import MobileAppContainer from '@/components/MobileAppContainer.vue'
import Vue from 'vue'
import IconTasksHistory from '@/components/Icons/Profile/IconTasksHistory.vue'
import IconPersonalInfo from '@/components/Icons/Profile/IconPersonalInfo.vue'
import IconShop from '@/components/Icons/Profile/IconShop.vue'
import IconBase from '@/components/Icons/IconBase.vue'
import GravatarImage from '@/components/GravatarImage.vue'
import * as firebase from 'firebase'
import { UserData, userService } from '@/services/UserService'

export default Vue.extend({
  components: {
    MobileAppContainer,
    IconBase,
    IconShop,
    IconPersonalInfo,
    IconTasksHistory,
    GravatarImage
  },
  data () {
    return {
      user: null as UserData | null,
      isLoaded: false
    }
  },
  mounted () {
    userService.fetch().then((user) => {
      this.user = user
      this.isLoaded = true
    })
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() =>
        this.$router.replace('/')
      )
    }
  }
})
