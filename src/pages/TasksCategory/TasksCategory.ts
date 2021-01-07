import Vue from 'vue'
import * as rm from 'typed-rest-client/RestClient'

interface TaskAttachment {
  id: string;
  url: string;
}

interface TaskInterface {
  name: string;
  description: string;
  attachments: Array<TaskAttachment>;
  image: string;
}

class Task implements TaskInterface {
  name: string;
  description: string;
  attachments: Array<TaskAttachment>;

  constructor (task: TaskInterface) {
    this.name = task.name
    this.description = task.description
    this.attachments = task.attachments
  }

  get image (): string {
    return this.attachments[0].url
  }
}

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
      tasks: new Array<Task>()
    }
  },
  mounted () {
    this.fetchTasks().then(tasks => {
      this.tasks = tasks
    })
  },
  methods: {
    fetchTasks: async () => {
      const rest: rm.RestClient = new rm.RestClient('rest', 'https://api.airtable.com/v0/appL06XW0QrDbpxxT/')
      const response: rm.IRestResponse<TaskList> = await rest.get<TaskList>('Tasks?api_key=keyUHl2tkCf4DEGqC')
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
    }
  }
})
