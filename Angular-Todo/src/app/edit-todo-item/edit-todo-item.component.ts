import { Component, OnInit } from '@angular/core';
import { TodoItemService } from '../service/todo-item.service';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent implements OnInit {

  private todoItemId: string;
  public todoItem: TodoItem;
  public done = ['true', 'false'];

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.todoItemId = this.todoItemService.todoItemId;
    //console.log("todo item id --->  " + this.todoItemService.todoItemId);
    this.todoItemService.getTodoItemById(this.todoItemId)
        .subscribe(todoItem => {
          this.todoItem = todoItem;
        })

  }

  public onSubmit() {
    console.log("todoItem -> " + this.todoItem.done);
    this.todoItemService.saveEditedTodoItem(this.todoItem);
  }

}
