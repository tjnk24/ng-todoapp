import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  todos: Todo[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.todos = this.dataService.todos.value;

    this.dataService.todos.subscribe((todos) => {
      const uncompletedTodos = todos.filter((todo) => todo.completed !== true);
      this.todos = uncompletedTodos;
    })
  }
}
