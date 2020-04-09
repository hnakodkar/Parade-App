package com.WCCI.app;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Teacher {

    private String phone;
    private String email;
    private String schoolId;
    private String username;
    private String password;

    @OneToMany(mappedBy = "teacher")
    private Collection<Course> courses =  new ArrayList<>();


    @JsonIgnore
    @OneToMany(mappedBy = "teacher")
    private Collection<Conversation> conversations =  new ArrayList<>();

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Teacher(String name){
        this.name = name;
       }

    public Teacher (String name, String schoolId, String email, String phone, String username, String password){
        this.name = name;
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
    public Collection<Conversation> getConversations() {
        return conversations;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return Objects.equals(phone, teacher.phone) &&
                Objects.equals(email, teacher.email) &&
                Objects.equals(schoolId, teacher.schoolId) &&
                Objects.equals(username, teacher.username) &&
                Objects.equals(password, teacher.password) &&
                Objects.equals(id, teacher.id) &&
                Objects.equals(name, teacher.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(phone, email, schoolId, username, password, id, name);
    }
}
