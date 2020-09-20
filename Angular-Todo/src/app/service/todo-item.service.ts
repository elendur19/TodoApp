import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../model/todo-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  
  private todoItemUrl: string;

  constructor(private http: HttpClient) {
    this.todoItemUrl = 'http://localhost:8081/todos';
   }

   public findAll(): Observable<TodoItem[]> {
     return this.http.get<TodoItem[]>(this.todoItemUrl);
   }
}
