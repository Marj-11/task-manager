import { Component, OnInit } from "@angular/core";
import { Task, Subtask } from "./Task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.scss"]
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  _unfinished: Task[];
  _finished: Task[];
  newTask: string;
  progress: string;

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.tasks = this.service.tasks;
  }

  get unfinished() {
    return this.tasks.length > 0
      ? this.tasks.filter(task => task.progress.length > 0)
      : [];
  }
  get finished() {
    return this.tasks.length > 0
      ? this.tasks.filter(task => task.progress.length === 0)
      : [];
  }

  getProgress() {
    return this.progress.length > 0
      ? this.progress.split(",").map(txt => new Subtask(txt.trim(), false))
      : [];
  }

  addTask() {
    const progress = this.getProgress();
    this.service.add({
      name: this.newTask,
      progress: progress,
      percentage: progress.length,
      completed: false
    });
    this.newTask = "";
    this.progress = "";
  }
}
