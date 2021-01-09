import MobileAppContainer from '@/components/MobileAppContainer.vue'
import Vue from 'vue'
import { Gift } from '@/models/Gift'
import { shopService } from '@/services/ShopService'

export default Vue.extend({
  components: {
    MobileAppContainer
  },
  data () {
    return {
      gifts: new Array<Gift>()
    }
  },
  mounted () {
    shopService.fetchGifts().then(gifts => {
      this.gifts = gifts
    })
  },
  methods: {
    openGift (giftID: string) {
      this.$router.push('/shop/gift/' + giftID)
    }
  }
})
