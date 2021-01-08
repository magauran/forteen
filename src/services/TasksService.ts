import { Task, TaskInterface, TaskType } from '@/models/Task'
import * as rm from 'typed-rest-client'

interface TaskRecord {
  id: string;
  fields: Array<TaskInterface>;
}

export interface TaskList {
  records: Array<TaskRecord>;
}

const baseURL = 'https://api.airtable.com/v0/appL06XW0QrDbpxxT/'
const apiKey = 'keyUHl2tkCf4DEGqC' // It's a study project and the keys in the code are not a vulnerability.

class TasksService {
  async fetchTasks (type: TaskType) {
    const rest: rm.RestClient = new rm.RestClient('rest', baseURL)
    const response: rm.IRestResponse<TaskList> = await rest.get<TaskList>(`Tasks?api_key=${apiKey}&filterByFormula=({type} = ${type})`)
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

export const tasksService = new TasksService()
