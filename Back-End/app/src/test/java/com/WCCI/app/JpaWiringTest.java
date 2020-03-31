package com.WCCI.app;

import com.WCCI.app.repository.CourseRepository;
import com.WCCI.app.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class JpaWiringTest {

    @Autowired
    private StudentRepository studentRepo;
    @Autowired
    private CourseRepository courseRepo;
    @Autowired
    private EntityManager entityManager;

    @Test
    public void studentsShouldHaveName(){
        Student student = new Student("testName");
        studentRepo.save(student);

        entityManager.flush();
        entityManager.clear();
        Student result = studentRepo.findByName("testName");
        assertEquals(result, student);
    }
//    @Test
//    public void studentsShouldHaveMultipleSubjects(){
//        Course course = new Course("Math");
//        Course course2 = new Course();
//        Student student = new Student("testName");
//        course.addStudent()
//
//    }
}
