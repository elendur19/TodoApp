import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoItemListComponent  },
  { path: 'addTodoItem', component: NewTodoItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
