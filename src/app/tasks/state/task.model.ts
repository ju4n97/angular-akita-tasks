import { ID } from '@datorama/akita';

export interface Task {
  id: ID;
  name: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
