package hr.example.todoapp.service.impl;

import hr.example.todoapp.model.TodoItem;
import hr.example.todoapp.repo.TodoItemRepository;
import hr.example.todoapp.service.AbstractService;
import hr.example.todoapp.service.TodoItemService;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
public class TodoItemServiceImpl extends AbstractService<TodoItem, Long> implements TodoItemService {

    private TodoItemRepository todoRepo;

    public TodoItemServiceImpl(TodoItemRepository todoRepo) {
        super(todoRepo);
        this.todoRepo = todoRepo;
    }

    @Override
    public TodoItem getTodoItemById(Long id) {
        return this.todoRepo.getTodoItemById(id);
    }

    @Transactional
    @Override
    public void updateTodoItem(TodoItem updatedTodoItem) {
        Long id = updatedTodoItem.getId();
        String newTitle = updatedTodoItem.getTitle();
        String newPriority = updatedTodoItem.getPriority();
        Date newDate = updatedTodoItem.getFinishDate();
        Boolean updatedDone = updatedTodoItem.isDone();
        this.todoRepo.updateTodoItem(id, newTitle, newPriority, newDate, updatedDone);
    }

    @Override
    public List<TodoItem> findCompletedTodoItems() {
        return this.todoRepo.findCompletedTodoItems();
    }

    @Transactional
    @Override
    public void deleteTodoItem(Long id) {
        this.todoRepo.deleteTodoItem(id);
    }

    @Override
    public List<TodoItem> findImportantTodoItems() {
        return this.todoRepo.findImportantTodoItems();
    }
}
