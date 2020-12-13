import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  @Input() todos: TodoItem[];

  ngOnInit() {
    // this.todos = this.todos.completed.filter((todo) => todo.completed === true);
  }
}
