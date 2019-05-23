import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../Task";
import { TaskService } from "src/app/task.service";

@Component({
  selector: "task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  _currentPercentage: number;

  constructor(private service: TaskService) {}

  ngOnInit() {}

  delete() {
    this.service.delete(this.task);
  }

  get currentPercentage() {
    const checkedSubtasks = this.task.progress.filter(
      subtask => subtask.checked
    );
    const newPercentage =
      checkedSubtasks.length === 0
        ? 0
        : Math.round((checkedSubtasks.length / this.task.percentage) * 100);

    const originalTasks = this.service.tasks;
    const thisIndex = originalTasks.indexOf(this.task);
    originalTasks[thisIndex] = this.task;
    this.service.updateTasks(originalTasks);

    

    return newPercentage;
  }
}
