// task.model.ts

export interface Task {
    _id: string; 
    title: string;
    description: string;
    dueDate: Date;
    status: boolean;
  }
  