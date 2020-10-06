package hr.example.todoapp.service;

import hr.example.todoapp.model.TodoItem;

import java.util.List;

public interface TodoItemService extends CRUDService<TodoItem, Long> {
    void updateTodoItem(TodoItem updatedTodoItem);
    List<TodoItem> findCompletedTodoItems();
    void deleteTodoItem(Long id);
    List<TodoItem> findImportantTodoItems();
    TodoItem getTodoItemById(Long id);
}
