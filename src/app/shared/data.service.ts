import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../types';

const initialTodos = [
  {
    id: 0,
    text: 'ffffffffffffffffffffffffffffdddd',
    completed: false,
  },
  {
    id: 1,
    text: 'sdfsdfsdf',
    completed: false,
  },
]

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: BehaviorSubject<Todo[]> = new BehaviorSubject(initialTodos);

  add(todo: Todo) {
    const { value } = this.todos;

    this.todos.next([ ...value, todo ]);
  }

  remove(id: number) {
    const { value } = this.todos;
    const newTodo = value.filter((todo) => todo.id !== id);

    this.todos.next(newTodo);
  }

  setCompleted(id: number) {
    const { value } = this.todos;
    const newTodo = value.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: true,
        }
      }
      return todo;
    });

    this.todos.next(newTodo);
  }
}