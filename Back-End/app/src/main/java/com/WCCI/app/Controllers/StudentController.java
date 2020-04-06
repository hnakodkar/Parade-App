package com.WCCI.app.Controllers;


import com.WCCI.app.Student;
import com.WCCI.app.repository.CourseRepository;
import com.WCCI.app.repository.StudentRepository;
import com.WCCI.app.repository.TeacherRepository;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class StudentController {
    private StudentRepository studentRepo;
    private TeacherRepository teacherRepo;
    private CourseRepository courseRepo;

    public StudentController (StudentRepository studentRepo, TeacherRepository teacherRepo, CourseRepository courseRepo){
        this.studentRepo =studentRepo;
        this.teacherRepo = teacherRepo;
        this.courseRepo = courseRepo;
    }

    @GetMapping ("/students")
    public Collection<Student> retrieveStudents(){
        return (Collection<Student>) studentRepo.findAll();
    }

    @GetMapping ("/students/{id}")
    public Student retrieveSingleStudent (@PathVariable Long id){
        Student retrievedStudent =studentRepo.findById(id).get();
        return retrievedStudent;
    }

    @PostMapping ("/students")
    public Student addStudent(@RequestBody Student studentToAdd){
        return studentRepo.save(studentToAdd);
    }

    @PostMapping("/login/student")
    public Student findStudentLogin(@RequestBody Student credentials){
        Student chosenStudent = new Student();
        for(Student student: studentRepo.findAll()){
            System.out.println(student);
            if((student.getUsername() != null) && (student.getUsername().equals(credentials.getUsername())) && student.getPassword().equals(credentials.getPassword())) {
                return student;
            }
        } return chosenStudent;
    }
}


