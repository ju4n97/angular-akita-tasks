import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { ListPage } from './list/list.page';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [ListPage],
  imports: [CommonModule, TasksRoutingModule, DxDataGridModule],
})
export class TasksModule {}
