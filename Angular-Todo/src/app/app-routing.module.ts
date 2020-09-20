import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';

const routes: Routes = [
  { path: 'todos', component: TodoItemListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
