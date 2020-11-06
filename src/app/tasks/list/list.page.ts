import { Component, OnInit } from '@angular/core';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';
import CustomStore from 'devextreme/data/custom_store';
import { LoadOptions } from 'devextreme/data/load_options';
import { map, tap } from 'rxjs/operators';
import { queryBuilder } from 'src/app/core/utils';
import { Task, TasksQuery, TasksService } from '../state';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  tasks: CustomStore;
  tasks$ = this.taskQuery.selectAll();
  loaders = this.loader.loadersFor('tasks');

  constructor(
    private taskQuery: TasksQuery,
    private taskService: TasksService,
    private loader: NgEntityServiceLoader
  ) {}

  ngOnInit(): void {
    this.tasks = new CustomStore({
      key: 'id',
      useDefaultSearch: true,
      load: async (loadOptions: LoadOptions) => {
        const params = queryBuilder(loadOptions);

        return await this.taskService
          .get({ params })
          .pipe(
            tap((res) => console.log(res)),
            map((res: any) => ({ data: res.data, totalCount: res.meta.count }))
          )
          .toPromise();
      },

      insert: async (data: Task): Promise<any> =>
        await this.taskService.add(data).toPromise(),

      update: async (id: string, data: Task): Promise<any> =>
        await this.taskService.update(id, data).toPromise(),

      remove: async (id: string): Promise<any> =>
        await this.taskService.delete(id).toPromise(),
    });
  }
}
