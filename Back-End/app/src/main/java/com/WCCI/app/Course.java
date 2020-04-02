package com.WCCI.app;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.HashMap;

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
    @OneToMany(mappedBy = "course")
    private Collection<Assignment>assignments;

    private HashMap<Timestamp, String> annoucements;

    public Course(){}
    public Course(String name){
        this.name = name;
    }
    public Course(String name, Teacher teacher, String classTime,Collection<Student>students){
        this.name = name;
        this.classTime = classTime;
        this.teacher = teacher;
    }


    public Teacher getTeacher() {
        return teacher;
    }

    public String getClassTime() {
        return classTime;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
