package com.WCCI.app;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity

public class Conversation {

    @Id
    @GeneratedValue
    private Long id;
    @ElementCollection
    private Collection<String> content = new ArrayList<>();

    @JsonIgnore
    @ManyToOne
    private Student student;

    @ManyToOne
    private Teacher teacher;

    public Conversation  (Collection<String> content,Teacher teacher, Student student) {
        this.content= content;
        this.student= student;
        this.teacher=teacher;
    }

    public Conversation(){}

    public Long getId() {
        return id;
    }

    public Collection <String> getContent() {
        return content;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public Student getStudent() {
        return student;
    }
}
