package com.WCCI.app.Controllers;

import com.WCCI.app.Student;
import com.WCCI.app.Teacher;
import com.WCCI.app.repository.*;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class TeacherController {
    private TeacherRepository teacherRepository;
    private StudentRepository studentRepository;
    private CourseRepository courseRepo;
    private ConversationRepository conversationRepo;

    public TeacherController(TeacherRepository teacherRepository, StudentRepository studentRepository, CourseRepository courseRepo, ConversationRepository conversationRepo){
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
        this.conversationRepo =conversationRepo;
        this.courseRepo =courseRepo;
    }

    @GetMapping("/teachers")
    public Collection<Teacher> retrieveTeachers()
    {return (Collection<Teacher>) teacherRepository.findAll();}

    @PostMapping ("/teachers")
    public Teacher addAteacher (@RequestBody Teacher teacherToAdd){
        return teacherRepository.save(teacherToAdd);
    }

    @GetMapping("/teachers/{id}")
    public Teacher retrieveSingleTeacher(@PathVariable Long id
    )
    {
        return teacherRepository.findById(id).get();
    }
}
