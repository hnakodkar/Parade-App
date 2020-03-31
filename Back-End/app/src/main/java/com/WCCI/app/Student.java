package com.WCCI.app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

@Entity
public class Student {
    @Id
    @GeneratedValue
    private Long id;

    private String  name;

    @ManyToMany
    private Collection<Course> courses;

    public Student(){}
    public Student(String name){
        this.name = name;

    }

    public String getName() {
        return name;
    }

}
