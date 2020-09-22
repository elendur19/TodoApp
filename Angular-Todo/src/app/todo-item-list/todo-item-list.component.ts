import { Component, OnInit } from '@angular/core';
import { DeleteTodoItemComponent } from '../delete-todo-item/delete-todo-item.component';
import { TodoItem } from '../model/todo-item';
import { TodoItemService } from '../service/todo-item.service';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  todoItems: TodoItem[];

  columnDefs = [
    { headerName: 'Delete', cellRenderer: 'deleteTodoItemComponent' },
    { headerName: '#', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Priority', field: 'priority' },
    { headerName: 'Done', field: 'done', filter: true },
    { headerName: 'FinishDate', field: 'finishDate' }
   
  ]

  public gridOptions: any = {};

  private gridColumnApi;
  public rowSelection;

  public frameworkComponents = {
    deleteTodoItemComponent: DeleteTodoItemComponent
  };
  
  rowData: TodoItem[];

  constructor(private todoItemService: TodoItemService,
              private gridApi: GridApi) {
    this.rowSelection = 'single';
  }


  ngOnInit(): void {
    this.gridOptions.rowHeight = 30;

    this.todoItemService.findAll().subscribe(data => {
      this.todoItems = data;
      this.rowData = data;
      this.initializeNullValues();
    })

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
}

  onSelectionChanged() {
    var selectedRow = this.gridApi.getSelectedRows();
    var todoItem = JSON.stringify(selectedRow);
    for(var value in selectedRow) {
      console.log(value, selectedRow[value]);  
    }
    var stringify = JSON.parse(todoItem);
    var todoItemNumberToDelete;
    for(var i in stringify) {
      todoItemNumberToDelete = stringify[i]['id'];
    }
    this.todoItemService.setNumber(todoItemNumberToDelete);

    console.log("number to delete " + todoItemNumberToDelete);
  }

  public initializeNullValues() {
    this.todoItems.forEach(todoItem => {
      if(todoItem.priority == null) {
        todoItem.priority = '/';
      }
    })
  }



}
