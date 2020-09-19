package hr.example.todoapp.repo;

import hr.example.todoapp.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
    @Modifying
    @Query("update TodoItem ti set ti.title = :newTitle where ti.id =:id ")
    void updateTodoItem(@Param("id") Long id, @Param("newTitle") String newTitle);

}