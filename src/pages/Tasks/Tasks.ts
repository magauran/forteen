import Vue from 'vue'
import TaskCategoryCard from '../../components/TaskCategoryCard.vue'
import { TaskType } from '@/models/Task'

export default Vue.extend({
  components: {
    TaskCategoryCard
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
