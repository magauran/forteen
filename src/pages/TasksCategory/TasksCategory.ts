import Vue from 'vue'
import * as rm from 'typed-rest-client/RestClient'

interface Task {
  name: string;
}

interface TaskRecord {
  id: string;
  fields: Array<Task>;
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
      const tasks: Array<Task> = response?.result?.records.flatMap(x => x.fields) ?? []
      return tasks
    }
  }
})
