import MobileAppContainer from '@/components/MobileAppContainer.vue'
import Vue from 'vue'
import { Gift } from '@/models/Gift'
import { shopService } from '@/services/ShopService'

export default Vue.extend({
  components: {
    MobileAppContainer
  },
  data (): {
    gift: Gift | null;
    } {
    return {
      gift: null
    }
  },
  mounted () {
    const giftID: string = this.$route.params.giftID
    shopService.fetchGift(giftID).then(gift => {
      this.gift = gift
    })
  },
  methods: {
    cancel () {
      this.$router.back()
    }
  }
})
