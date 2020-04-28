import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../../models/todo-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent   {
 todoList: TodoModel[] ;
  constructor(private activatedRoute: ActivatedRoute) {
   // this.todoList  = this.activatedRoute.snapshot.data.list;
     this.activatedRoute.data.subscribe(value => this.todoList = value.list);
  }



}
