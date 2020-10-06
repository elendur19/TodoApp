package hr.example.todoapp.controller;

import com.sun.istack.NotNull;
import hr.example.todoapp.model.TodoItem;
import hr.example.todoapp.repo.TodoItemRepository;
import hr.example.todoapp.service.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    private TodoItemService todoItemService;

    @Autowired
    private TodoItemRepository todoRepo;

    public TodoController(TodoItemService todoItemService) {
        this.todoItemService = todoItemService;
    }

    @GetMapping
    public List<TodoItem> findAll() {
        return todoRepo.findAll();
    }

    @GetMapping("/{id}")
    public TodoItem getTodoItemById(@PathVariable Long id) {
        return this.todoItemService.getTodoItemById(id);
    }

    @GetMapping("/completed")
    public List<TodoItem> findCompletedTodoItems() {
        return todoItemService.findCompletedTodoItems();
    }

    @GetMapping("/important")
    public List<TodoItem> findImportantTodoItems() {
        return todoItemService.findImportantTodoItems();
    }

    @PostMapping
    public TodoItem save(@RequestBody TodoItem todoItem) {
        return todoRepo.save(todoItem);
    }

    @PutMapping()
    public void updateTodoItem(@RequestBody TodoItem todoItem) {
        todoItemService.updateTodoItem(todoItem);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoItem(@PathVariable Long id) {
        this.todoItemService.deleteTodoItem(id);
    }
}
