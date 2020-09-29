import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../model/todo-item';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  
  private todoItemUrl: string;

  constructor(private http: HttpClient,
              private router: Router) {
      this.todoItemUrl = 'http://localhost:8081/todos';
   }

   public findAll(): Observable<TodoItem[]> {
     return this.http.get<TodoItem[]>(this.todoItemUrl);
   }

   public findCompleted(): Observable<TodoItem[]> {
     return this.http.get<TodoItem[]>(this.todoItemUrl + '/completed');
   }

   public findImportant(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoItemUrl + '/important');
  }

   public save(newTodoItem: TodoItem) {
      return this.http.post<TodoItem>(this.todoItemUrl, newTodoItem)
        .subscribe(result => {
          console.log(result);
          this.router.navigate(['/todos']);
        })
  
   }

   public deleteTodoItem(number: string) {
      return this.http.delete<TodoItem>(this.todoItemUrl + '/' + number);
   }
}
