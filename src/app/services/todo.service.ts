import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TodoModel} from '../models/todo-model';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TodoService implements Resolve<TodoModel[]>{
listToDo: TodoModel[] = [] ;
  constructor() { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodoModel[]> | Promise<TodoModel[]> | TodoModel[] {
    return this.listToDo;
  }

}
