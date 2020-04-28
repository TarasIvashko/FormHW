import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../../services/todo.service';
import validate = WebAssembly.validate;
import {validateAndRewriteCoreSymbol} from '@angular/compiler-cli/src/ngtsc/imports';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent {

  form: FormGroup;

  constructor(private todoService: TodoService) {
      this.form = new FormGroup({
      time: new FormControl('', Validators.required),
      tipe: new FormControl('', Validators.required)
    });

  }


  createTask(form: FormGroup) {
    //console.log(form);
    this.todoService .listToDo.push({time: form.controls.time.value, tipe: form.controls.tipe.value});
    form.reset();

  }
}
