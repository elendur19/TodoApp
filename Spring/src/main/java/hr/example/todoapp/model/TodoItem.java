package hr.example.todoapp.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "todoitem", schema = "todoapp")
public class TodoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "title")
    private String title;

    @Column(name = "done")
    private boolean done;

    public TodoItem() {

    }
    public TodoItem(Long id, String title) {
        this.id = id;
        this.title = title;

    }


    public TodoItem(Long id, String title, boolean done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
