import Vue from 'vue'
import * as rm from 'typed-rest-client/RestClient'
import { Task, TaskInterface, TaskType } from '@/models/Task'

interface TaskRecord {
  id: string;
  fields: Array<TaskInterface>;
}

interface TaskList {
  records: Array<TaskRecord>;
}

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

    this.fetchTasks(taskType).then(tasks => {
      this.tasks = tasks
    })
  },
  methods: {
    fetchTasks: async (type: TaskType) => {
      const rest: rm.RestClient = new rm.RestClient('rest', 'https://api.airtable.com/v0/appL06XW0QrDbpxxT/')
      const response: rm.IRestResponse<TaskList> = await rest.get<TaskList>(`Tasks?api_key=keyUHl2tkCf4DEGqC&filterByFormula=%28%7Btype%7D%20%3D%20%27${type}%27%29`)
      const abstractTasks: Array<TaskInterface> = response?.result?.records.flatMap(x => x.fields) ?? []
      const tasks: Array<Task> = abstractTasks
        .map(x => new Task(x))
        .filter(x => {
          return Object.entries(x)
            .filter(([, v]) => {
              return v !== null && v !== undefined
            }).length === Object.entries(x).length
        })
      return tasks
    },
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
