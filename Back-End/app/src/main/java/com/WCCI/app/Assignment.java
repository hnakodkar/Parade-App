package com.WCCI.app;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Assignment {
    private String name;
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Course course;

    public Assignment() {
    }

    public Assignment(String name, Course course) {
        this.name = name;
        this.course= course;

    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public Course getCourse() {
        return course;
    }
}