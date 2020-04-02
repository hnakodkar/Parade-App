package com.WCCI.app.Controllers;

import com.WCCI.app.Student;
import com.WCCI.app.Teacher;
import com.WCCI.app.repository.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class TeacherController {
    private TeacherRepository teacherRepository;
    private StudentRepository studentRepository;
    private CourseRepository courseRepo;
    private AssignmentRepository assignmentRepo;
    private ConversationRepository conversationRepo;

    public TeacherController(TeacherRepository teacherRepository, StudentRepository studentRepository, CourseRepository courseRepo, AssignmentRepository assignmentRepo,ConversationRepository conversationRepo){
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
        this.conversationRepo =conversationRepo;
        this.courseRepo =courseRepo;
        this.assignmentRepo =assignmentRepo;
    }

    @GetMapping("/teachers")
    public Collection<Student> retrieveStudents()
    {return (Collection<Student>) studentRepository.findAll();}

    @PostMapping ("/teachers/{id}")
    public Teacher addAteacher (@RequestBody Teacher teacherToAdd){
        return teacherRepository.save(teacherToAdd);
    }
}
