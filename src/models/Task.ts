import { format } from 'ts-date/locale/ru'

export enum TaskType {
  Street = 1,
  Home,
  Work
}

interface TaskAttachment {
  id: string;
  url: string;
}

export interface TaskInterface {
  name: string;
  description: string;
  date: string;
  price: number;
  attachments: Array<TaskAttachment>;
  image: string;
  dateDescription: string;
}

export class Task implements TaskInterface {
  name: string;
  description: string;
  date: string;
  price: number;
  attachments: Array<TaskAttachment>;

  constructor (task: TaskInterface) {
    this.name = task.name
    this.description = task.description
    this.date = task.date
    this.price = task.price
    this.attachments = task.attachments
  }

  get image (): string {
    return this.attachments[0].url
  }

  get dateDescription (): string {
    const date = new Date(this.date)
    const result = format(date, 'D MMMM до hh:mm')
    return result ?? 'без срока'
  }
}
