import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() todos: TodoItem[];
}
