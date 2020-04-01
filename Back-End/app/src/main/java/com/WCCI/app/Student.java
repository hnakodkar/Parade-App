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
    private String language;
    private String parentPhone;
    private String parentEmail;
    private String schoolId;
    private String parentName;
    @Id
    @GeneratedValue
    private Long id;

    private String  name;

    @ManyToMany
    private Collection<Course> courses;

    public Student(){}
    public Student(String name, Long id){
        this.name = name;
        this.id = id;

    }
    public Student(String name, Long id, String parentName, String schoolId, String parentEmail, String parentPhone, String language){
        this.name = name;
        this.id = id;
        this.parentName = parentName;
        this.schoolId = schoolId;
        this.parentEmail = parentEmail;
        this.parentPhone = parentPhone;
        this.language = language;

    }

    public String getName() {
        return name;
    }

}
