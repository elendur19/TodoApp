import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';

import { TodoItemService } from './service/todo-item.service';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemListComponent,
    NewTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
