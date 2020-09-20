import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoItemService } from '../service/todo-item.service';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  todoItems: TodoItem[];

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.todoItemService.findAll().subscribe(data => {
      this.todoItems = data;
    })
  }

}
