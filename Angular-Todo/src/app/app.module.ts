import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';

import { TodoItemService } from './service/todo-item.service';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { DeleteTodoItemComponent } from './delete-todo-item/delete-todo-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditTodoItemComponent } from './edit-todo-item/edit-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemListComponent,
    NewTodoItemComponent,
    DeleteTodoItemComponent,
    EditTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    AgGridModule.withComponents([DeleteTodoItemComponent])
  ],
  providers: [TodoItemService, GridApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
