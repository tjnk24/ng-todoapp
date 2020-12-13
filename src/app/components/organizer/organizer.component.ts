import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  form: FormGroup;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.form = new FormGroup({
      todoText: new FormControl('', Validators.required)
    })
  }

  submit() {
    const { todoText } = this.form.value;

    this.dataService.add({
        id: this.dataService.todos.value.length + 1,
        text: todoText,
        completed: false,
      })

    this.form.reset();
  }
}
