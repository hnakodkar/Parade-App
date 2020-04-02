package com.WCCI.app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Conversation {
    @Id
    @GeneratedValue
    private Long id;

    private String content;

   @ManyToMany
    private Collection<Student>students;
    @ManyToMany
    private Collection<Teacher>teachers;

    public Conversation (String content , Long id){
        this.content = content;
        this.id = id;
    }
    public Conversation (){}


    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
