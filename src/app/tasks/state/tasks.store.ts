import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Task } from './task.model';

export interface TasksState extends EntityState<Task, string> {}

export function createInitialState(): TasksState {
  return {
    // tasks: [],
  };
}

@StoreConfig({
  name: 'tasks',
})
@Injectable({ providedIn: 'root' })
export class TasksStore extends EntityStore<TasksState> {
  constructor() {
    super(createInitialState());
  }

  resetTasks(): void {
    this.update(createInitialState());
  }
}
