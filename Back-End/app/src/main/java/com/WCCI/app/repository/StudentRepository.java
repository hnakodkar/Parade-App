package com.WCCI.app.repository;

import com.WCCI.app.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student,Long> {
    Student findByName(String name);

}
