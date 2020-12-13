import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() todos: TodoItem[];
  @Input() todoItem: TodoItem = {
    text: '',
    id: null,
  };

  form: FormGroup;
  isEditing: boolean = false;

  ngOnInit() {
    this.form = new FormGroup({
      itemText: new FormControl(this.todoItem.text, Validators.required)
    })
  }

  editAndSubmit() {
    this.isEditing = !this.isEditing;

    if (!this.isEditing) {
      const { itemText } = this.form.value;
      this.todoItem.text = itemText;
    }
  }

  remove() {
    const filteredArray = this.todos.filter((todo) => todo.id !== this.todoItem.id);

    this.todos.splice(filteredArray.length - 1, 1);

    filteredArray.forEach((item, index) => {
      this.todos[index] = item;
    })
  }

  complete() {
    console.log('complete', this.todoItem.id);
    // this.todoItem.completed = true;
  }
}
