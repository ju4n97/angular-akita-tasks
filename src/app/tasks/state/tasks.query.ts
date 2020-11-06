import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TasksState, TasksStore } from './tasks.store';

@Injectable({ providedIn: 'root' })
export class TasksQuery extends QueryEntity<TasksState> {
  constructor(protected store: TasksStore) {
    super(store);
  }
}
