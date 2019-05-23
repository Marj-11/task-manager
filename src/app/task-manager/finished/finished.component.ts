import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'tasks-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
