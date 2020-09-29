import { Component, OnInit } from '@angular/core';
import { DeleteTodoItemComponent } from '../delete-todo-item/delete-todo-item.component';
import { TodoItem } from '../model/todo-item';
import { TodoItemService } from '../service/todo-item.service';
import { GridApi } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  todoItems: TodoItem[];

  public dropDownAction: string[] = ["all", "important", "done"];
  public action: string;

  columnDefs = [
    { headerName: 'Delete', cellRenderer: 'deleteTodoItemComponent', cellRendererParams :{
      color: 'guinnessBlack'
  } },
    { headerName: '#', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Priority', field: 'priority' },
    { headerName: 'Done', field: 'done', filter: true },
    { headerName: 'FinishDate', field: 'finishDate' }
   
  ]

  public gridOptions: any = {};
  public rowData: TodoItem[];
  private gridColumnApi;
  public rowSelection;

  public frameworkComponents = {
    deleteTodoItemComponent: DeleteTodoItemComponent
  };

  constructor(private todoItemService: TodoItemService,
              private gridApi: GridApi,
              private router: Router) {
    this.rowSelection = 'single';
  }


  ngOnInit(): void {
    this.gridOptions.rowHeight = 30;
    this.getAll();
   // console.log(document.getElementById("table"));
  }

  public getAll(){
    this.todoItemService.findAll().subscribe(data => {
      this.todoItems = data;
      this.rowData = data;
      this.initializeNullValues();
    })
  }

   deleteRow(todoItemId: string) {
      //console.log(todoItemId);
      this.todoItemService.deleteTodoItem(todoItemId).subscribe( data => {
        this.getAll();
      })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
}

  onSelectionChanged() {
    var selectedRow = this.gridApi.getSelectedRows();
   // console.log("nesta : " + selectedRow[0].title);
    
    /* var todoItem = JSON.stringify(selectedRow);
    for(var value in selectedRow) {
      console.log(value, selectedRow[value]);  
    }
    var stringify = JSON.parse(todoItem);
    var todoItemNumberToDelete;
    for(var i in stringify) {
      todoItemNumberToDelete = stringify[i]['id'];
    } */
    

    console.log("number to delete " + selectedRow[0].id);

    this.todoItemService.deleteTodoItem(selectedRow[0].id);

    //this.gridApi.setRowData(this.rowData);

  /*    this.todoItemService.findAll().subscribe(data => {
      this.todoItems = data;
      this.rowData = data;
      this.initializeNullValues();
      this.gridApi.setRowData(this.rowData);
    }) */
 
  }

  public initializeNullValues() {
    this.todoItems.forEach(todoItem => {
      if(todoItem.priority == '') {
        todoItem.priority = '-';
      }
    })
  }

  public deleteTodoItem(todoItemId: string){
    this.todoItemService.deleteTodoItem(todoItemId).subscribe(a=> {this.getAll();})
  }

  public changeAction() {
    console.log(this.action);
    
    if(this.action == "all" || this.action == null) {
      this.todoItemService.findAll()
        .subscribe(allTodoItems => {
          this.rowData = allTodoItems;
          this.todoItems = allTodoItems;
          this.initializeNullValues();
        })
    } else if (this.action == "important") {
      this.todoItemService.findImportant()
        .subscribe(importantTodoItems => {
          this.rowData = importantTodoItems;
          this.todoItems = importantTodoItems;
          this.initializeNullValues();
        })
    } else {
       this.todoItemService.findCompleted()
          .subscribe(completedTodoItems => {
            this.rowData = completedTodoItems;
            this.todoItems = completedTodoItems;
            this.initializeNullValues();
          })
    }
  }



}
