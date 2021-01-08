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
  attachments: Array<TaskAttachment>;
  image: string;
}

export class Task implements TaskInterface {
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
