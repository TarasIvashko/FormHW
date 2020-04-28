import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';

import { CreatorComponent } from './components/creator/creator.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';
import { MyDirectiveDirective } from './directive/my-directive.directive';

const routs: Routes = [
  {path: 'create', component: CreatorComponent},
  {path: 'todo', component: TodoComponent, resolve: {list: TodoService}},


]
@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    TodoComponent,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
