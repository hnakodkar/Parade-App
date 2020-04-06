package com.WCCI.app;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
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

    @ElementCollection
    private Collection<Assignment> assignments = new ArrayList<>();

//    private HashMap<Timestamp, String> announcements;

    public Course(){}
    public Course(String name){
        this.name = name;
    }

    public Course(String name, Teacher teacher, String classTime, Collection<Student>students){
        this.name = name;
        this.classTime = classTime;
        this.teacher = teacher;
    }

    public void addAssignment(Assignment assignment){
        assignments.add(assignment);
    }

    public Collection<Assignment> getAssignments() {
        return assignments;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Course)) return false;

        Course course = (Course) o;

        if (getTeacher() != null ? !getTeacher().equals(course.getTeacher()) : course.getTeacher() != null)
            return false;
        if (getClassTime() != null ? !getClassTime().equals(course.getClassTime()) : course.getClassTime() != null)
            return false;
        if (getId() != null ? !getId().equals(course.getId()) : course.getId() != null) return false;
        return getName() != null ? getName().equals(course.getName()) : course.getName() == null;
    }

    @Override
    public int hashCode() {
        int result = getTeacher() != null ? getTeacher().hashCode() : 0;
        result = 31 * result + (getClassTime() != null ? getClassTime().hashCode() : 0);
        result = 31 * result + (getId() != null ? getId().hashCode() : 0);
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Course{" +
                "teacher=" + teacher +
                ", classTime='" + classTime + '\'' +
                ", id=" + id +
                ", name='" + name + '\'' +
                ", students=" + students +
                ", assignments=" + assignments +
                '}';
    }
}

