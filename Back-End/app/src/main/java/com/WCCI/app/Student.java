package com.WCCI.app;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;

@Entity
public class Student {
    @ManyToMany(mappedBy = "students")
    private Collection<Conversation> conversations;
    @ManyToMany
    private Collection<Course>courses;
    private String language;
    private String parentPhone;
    private String parentEmail;
    private String schoolId;
    private String parentName;
    @Id
    @GeneratedValue
    private Long id;

    private String  name;
   // private HashMap < Course,int> grades;

    public Student(){}
    public Student(String name){
        this.name = name;

    }
    public Student(String name,  String parentName, String schoolId, String parentEmail, String parentPhone, String language){
        this.name = name;
        this.parentName = parentName;
        this.schoolId = schoolId;
        this.parentEmail = parentEmail;
        this.parentPhone = parentPhone;
        this.language = language;

    }

    public String getName() {
        return name;
    }

    public String getLanguage() {
        return language;
    }

    public String getParentPhone() {
        return parentPhone;
    }

    public String getParentEmail() {
        return parentEmail;
    }

    public String getSchoolId() {
        return schoolId;
    }

    public String getParentName() {
        return parentName;
    }

    public Long getId() {
        return id;
    }
}
