package com.WCCI.app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Objects;

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

    public Long getId() {
        return id;
    }

    public Collection<Course> getCourses() {
        return courses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(id, student.id) &&
                Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}


