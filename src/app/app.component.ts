import { Component } from '@angular/core';
import { Todos } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todos = {
    current: [
      {
        id: 0,
        text: 'ffffffffffffffffffffffffffffdddd',
      },
      {
        id: 1,
        text: 'sdfsdfsdf',
      },
    ],
    completed: [
      {
        id: 0,
        text: 'sdfsdfsdffddddddddddddd',
      },
    ]
  };
}
