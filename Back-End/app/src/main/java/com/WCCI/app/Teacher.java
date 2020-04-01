package com.WCCI.app;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Teacher {
    private String phone;
    private String email;
    private String schoolId;
    @OneToMany(mappedBy = "teacher")
    private Collection<Course> courses;
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    public Teacher(String name){
        this.name = name;
    }
    public Teacher (String name, Long id, String schoolId, String email, String phone){
        this.name = name;
        this.id = id;
        this.schoolId = schoolId;
        this.email = email;
        this.phone = phone;
    }
    public Teacher(){}
}
