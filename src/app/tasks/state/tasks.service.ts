import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { TasksState, TasksStore } from './tasks.store';

@NgEntityServiceConfig({
  resourceName: 'tasks',
})
@Injectable({ providedIn: 'root' })
export class TasksService extends NgEntityService<TasksState> {
  constructor(protected store: TasksStore) {
    super(store);
  }
}
