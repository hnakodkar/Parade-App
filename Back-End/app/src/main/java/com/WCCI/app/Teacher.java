package com.WCCI.app;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Teacher {
    @Id
    @GeneratedValue
    private String name;
    private Long id;



    @OneToMany (mappedBy = "teacher")
    private Collection<Student> students;

   public Teacher() {}
   public Teacher(String name){
       this.name=name;
   }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public Collection<Student> getStudents() {
        return students;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return Objects.equals(name, teacher.name) &&
                Objects.equals(id, teacher.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, id);
    }
}


