package com.WCCI.app;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Teacher {
    private String phone;
    private String email;
    private String schoolId;
    @OneToMany(mappedBy = "teacher")
    private Collection<Course> courses;
    @ManyToMany(mappedBy = "teachers")
    private Collection<Conversation>conversations;
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

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getSchoolId() {
        return schoolId;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
