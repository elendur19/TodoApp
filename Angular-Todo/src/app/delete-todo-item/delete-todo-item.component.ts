import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { TodoItemService } from '../service/todo-item.service';
import { TodoItemListComponent } from '../todo-item-list/todo-item-list.component';

@Component({
  selector: 'app-delete-todo-item',
  templateUrl: './delete-todo-item.component.html',
  styleUrls: ['./delete-todo-item.component.css']
})
export class DeleteTodoItemComponent implements ICellRendererAngularComp, OnInit {

  public params: any;

  constructor(private todoItemService: TodoItemService,
              private todoItemListComponent: TodoItemListComponent) {
  }

  refresh(params: any): boolean {
    return false;
  }
  agInit(params: any): void {
    this.params = params;
  }
  

  ngOnInit(): void {
  }

  public delete() {
    this.todoItemListComponent.onSelectionChanged();
    this.todoItemService.deleteTodoItem();
  }

}
