import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoItemService } from '../service/todo-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  public dones = ['true', 'false'];

  private submitted = false;
  public todoItem = new TodoItem();

  constructor(private todoItemService: TodoItemService,
              private router: Router) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.todoItemService.save(this.todoItem)
    this.goToTodoList();
  }

  public goToTodoList() {
    this.router.navigate(['/todos']);
  }

}
