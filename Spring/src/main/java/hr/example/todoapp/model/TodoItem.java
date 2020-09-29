package hr.example.todoapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "todoitem", schema = "todoapp")
public class TodoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "priority")
    private String priority;

    @NotNull
    @JsonFormat(pattern="dd.MM.yyyy", timezone = "Europe/Zagreb")
    @Column(name = "finishdate")
    private Date finishDate;

    @Column(name = "done")
    private boolean done;

    public TodoItem() {

    }
    public TodoItem(Long id, String title) {
        this.id = id;
        this.title = title;

    }


    public TodoItem(Long id, String title, boolean done, String priority, Date finishDate) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.priority = priority;
        this.finishDate = finishDate;
    }

    public Long getId() {
        return id;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
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
