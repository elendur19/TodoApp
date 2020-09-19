package hr.example.todoapp.service.impl;

import hr.example.todoapp.model.TodoItem;
import hr.example.todoapp.repo.TodoItemRepository;
import hr.example.todoapp.service.AbstractService;
import hr.example.todoapp.service.TodoItemService;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TodoItemServiceImpl extends AbstractService<TodoItem, Long> implements TodoItemService {

    private TodoItemRepository todoRepo;

    public TodoItemServiceImpl(TodoItemRepository todoRepo) {
        super(todoRepo);
        this.todoRepo = todoRepo;
    }

    @Transactional
    @Override
    public void updateTodoItem(TodoItem updatedTodoItem) {
        Long id = updatedTodoItem.getId();
        String newTitle = updatedTodoItem.getTitle();
        this.todoRepo.updateTodoItem(id, newTitle);
    }
}
