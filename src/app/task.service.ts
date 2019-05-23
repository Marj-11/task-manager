import { Injectable } from "@angular/core";
import { Task } from "./task-manager/Task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasks: Task[] = !JSON.parse(localStorage.getItem("tasks"))
    ? []
    : JSON.parse(localStorage.getItem("tasks"));

  constructor() {}

  updateTasks(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  add(task: Task) {
    this.tasks.push(task);
    this.updateTasks(this.tasks);
  }

  delete(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.updateTasks(this.tasks);
  }
}
