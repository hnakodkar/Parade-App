package com.WCCI.app;

import javax.persistence.*;

@Entity
public class Assignment {
    private String name;
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Course course;


    public Assignment (String name){
        this.name = name;
    }

    public Assignment (){}

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
