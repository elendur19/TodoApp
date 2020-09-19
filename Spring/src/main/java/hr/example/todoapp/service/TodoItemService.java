package hr.example.todoapp.service;

import hr.example.todoapp.model.TodoItem;

public interface TodoItemService extends CRUDService<TodoItem, Long> {
    void updateTodoItem(TodoItem updatedTodoItem);

}
