import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todos } from 'src/app/types';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  @Input() todos: Todos;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      todoText: new FormControl('', Validators.required)
    })
  }

  submit() {
    const { todoText } = this.form.value;

    this.todos.current.push({
      id: this.todos.current.length + 1,
      text: todoText,
    });

    this.form.reset();
  }
}
