import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FinishedComponent } from './finished/finished.component';
import { TaskManagerComponent } from './task-manager.component';
import { TaskComponent } from './task/task.component';
import { UnfinishedComponent } from './unfinished/unfinished.component';

@NgModule({
    declarations: [TaskManagerComponent, TaskComponent, UnfinishedComponent, FinishedComponent],
    imports: [ CommonModule, FormsModule, FontAwesomeModule ],
    exports: [],
    providers: [],
})
export class TaskManagerModule {
    constructor() {
        library.add({
          faCheckCircle,
          faTrashAlt,
        });
      }
}