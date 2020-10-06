package hr.example.todoapp.repo;

import hr.example.todoapp.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
    @Modifying
    @Query("update TodoItem ti set ti.title = :newTitle, ti.priority = :newPriority, ti.finishDate = :newDate, ti.done = :updatedDone where ti.id =:id ")
    void updateTodoItem(@Param("id") Long id,
                        @Param("newTitle") String newTitle,
                        @Param("newPriority") String newPriority,
                        @Param("newDate") Date newDate,
                        @Param("updatedDone")boolean updatedDone);

    @Query("select ti from TodoItem ti where ti.done = true")
    List<TodoItem> findCompletedTodoItems();

    @Modifying
    @Query("delete from TodoItem ti where ti.id =:id")
    void deleteTodoItem(@Param("id") Long id);

    @Query("select ti from TodoItem ti where ti.priority like 'high'")
    List<TodoItem> findImportantTodoItems();

    @Query("select ti from TodoItem ti where ti.id =:id")
    TodoItem getTodoItemById(@Param("id") Long id);
}