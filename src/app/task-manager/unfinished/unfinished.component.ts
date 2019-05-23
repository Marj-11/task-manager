import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'tasks-unfinished',
  templateUrl: './unfinished.component.html',
  styleUrls: ['./unfinished.component.scss']
})
export class UnfinishedComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
