import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: Todo = {
    id: null,
    text: '',
    completed: false,
  };

  form: FormGroup;
  isEditing: boolean = false;

  constructor(public dataService: DataService) {}

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
    this.dataService.remove(this.todoItem.id);
  }

  complete() {
    this.dataService.setCompleted(this.todoItem.id);
  }
}
