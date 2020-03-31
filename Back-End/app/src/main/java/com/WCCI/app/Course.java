package com.WCCI.app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
@Entity
public class Course {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "courses")
    private Collection<Student> students;

    public Course(){}
    public Course(String name){
        this.name = name;
    }
    public void addStudent() {

    }
}
