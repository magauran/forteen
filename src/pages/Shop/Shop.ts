import MobileAppContainer from '@/components/MobileAppContainer.vue'
import Vue from 'vue'
import { Gift } from '@/models/Gift'
import { shopService } from '@/services/ShopService'
import { UserData, userService } from '@/services/UserService'

export default Vue.extend({
  components: {
    MobileAppContainer
  },
  data () {
    return {
      gifts: new Array<Gift>(),
      user: null as UserData | null
    }
  },
  mounted () {
    shopService.fetchGifts().then(gifts => {
      this.gifts = gifts
    })

    userService.fetch().then((user) => {
      this.user = user
    })
  },
  methods: {
    openGift (giftID: string) {
      this.$router.push('/shop/gift/' + giftID)
    }
  }
})
