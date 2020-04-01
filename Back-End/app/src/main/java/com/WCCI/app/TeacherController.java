package com.WCCI.app;

import com.WCCI.app.repository.StudentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class TeacherController {
    private TeacherRepository teacherRepository;
    private StudentRepository studentRepository;

    public TeacherController(TeacherRepository teacherRepository, StudentRepository studentRepository){
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
    }

    @GetMapping("")
    public Collection<Student> retrieveStudents(){return (Collection<Student>) studentRepository.findAll();}
}
