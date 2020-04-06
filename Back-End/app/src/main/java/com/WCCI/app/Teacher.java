package com.WCCI.app;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Teacher {

    private String phone;
    private String email;
    private String schoolId;
    private String username;
    private String password;

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

    public Teacher (String name, Long id, String schoolId, String email, String phone, String username, String password){
        this.name = name;
        this.id = id;
        this.schoolId = schoolId;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }
}
