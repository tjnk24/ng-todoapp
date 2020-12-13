import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  completedTodos: Todo[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.todos.subscribe((todos) => {
      this.completedTodos = todos.filter((todo) => todo.completed === true);
    })
  }

  remove(id: number) {
    this.dataService.remove(id);
  }
}
