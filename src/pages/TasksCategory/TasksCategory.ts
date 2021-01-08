import Vue from 'vue'
import { Task, TaskType } from '@/models/Task'
import { tasksService } from '@/services/TasksService'
import MobileAppContainer from '@/components/MobileAppContainer.vue'

export default Vue.extend({
  components: {
    MobileAppContainer
  },
  data () {
    return {
      pageTitle: 'Задания',
      tasks: new Array<Task>()
    }
  },
  mounted () {
    const taskType: number = +this.$route.params.taskType as TaskType
    this.pageTitle = this.title(taskType)

    tasksService.fetchTasks(taskType).then(tasks => {
      this.tasks = tasks
    })
  },
  methods: {
    title: (type: TaskType) => {
      switch (type) {
        case TaskType.Home:
          return 'Домашние задания'
        case TaskType.Street:
          return 'Задания на улице'
        case TaskType.Work:
          return 'Задания на работе'
        default:
          return 'Задания'
      }
    }
  }
})
