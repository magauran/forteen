import Vue from 'vue'
import TaskCategoryCard from '../../components/TaskCategoryCard.vue'
import { TaskType } from '@/models/Task'
import MobileAppContainer from '@/components/MobileAppContainer.vue'

export default Vue.extend({
  components: {
    TaskCategoryCard,
    MobileAppContainer
  },
  data () {
    return {
    }
  },
  methods: {
    select: function (type: TaskType) {
      this.$router.push({ name: 'TasksCategory', params: { taskType: (type as unknown as string) } })
    }
  }
})
