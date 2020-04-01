package com.WCCI.app;

import javax.persistence.*;
import java.util.Collection;
@Entity
public class Course {
    @ManyToOne
    private Teacher teacher;
    private String classTime;
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
    public Course(String name, Long id, Teacher teacher, String classTime){
        this.name = name;
        this.id = id;
        this.classTime = classTime;
        this.teacher = teacher;
    }

}
