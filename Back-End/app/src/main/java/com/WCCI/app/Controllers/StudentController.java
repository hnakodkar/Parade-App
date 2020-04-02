package com.WCCI.app.Controllers;


import com.WCCI.app.Student;
import com.WCCI.app.repository.AssignmentRepository;
import com.WCCI.app.repository.CourseRepository;
import com.WCCI.app.repository.StudentRepository;
import com.WCCI.app.repository.TeacherRepository;
import org.springframework.web.bind.annotation.*;

import javax.naming.ldap.PagedResultsControl;
import java.util.Collection;

@RestController
public class StudentController {
    private StudentRepository studentRepo;
    private TeacherRepository teacherRepo;
    private CourseRepository courseRepo;
    private AssignmentRepository assignmentRepo;

    public StudentController (StudentRepository studentRepo, TeacherRepository teacherRepo,CourseRepository courseRepo,AssignmentRepository assignmentRepo){
        this.studentRepo =studentRepo;
        this.teacherRepo = teacherRepo;
        this.courseRepo = courseRepo;
        this.assignmentRepo =assignmentRepo;
    }

    @GetMapping ("/students")
    public Collection<Student> retrieveStudents()
    {return (Collection<Student>) studentRepo.findAll();}

    @GetMapping ("/students/{id}")

    public Student retrieveSingleStudent (@PathVariable Long id){
        Student retrievedStudent =studentRepo.findById(id).get();
        return retrievedStudent;
    }

    @PostMapping ("/students/{id}")
    public Student addStudent(@RequestBody Student studentToAdd){
        return studentRepo.save(studentToAdd);
    }

}
