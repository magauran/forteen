import Vue from 'vue'
import { Task, TaskType } from '@/models/Task'
import { tasksService } from '@/services/TasksService'

export default Vue.extend({
  components: {
  },
  data () {
    return {
      pageTitle: 'Задания',
      tasks: new Array<Task>()
    }
  },
  mounted () {
    const taskType = this.$route.params.taskType as unknown as TaskType

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
      }
    }
  }
})
