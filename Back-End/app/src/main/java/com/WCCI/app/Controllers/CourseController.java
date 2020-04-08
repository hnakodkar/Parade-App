package com.WCCI.app.Controllers;

import com.WCCI.app.Announcement;
import com.WCCI.app.Assignment;
import com.WCCI.app.Course;
import com.WCCI.app.repository.*;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;

@RestController
public class CourseController {
    private StudentRepository studentRepo;
    private TeacherRepository teacherRepo;
    private CourseRepository courseRepo;

    public CourseController(StudentRepository studentRepo, TeacherRepository teacherRepo,  CourseRepository courseRepo) {
        this.studentRepo = studentRepo;
        this.teacherRepo = teacherRepo;
        this.courseRepo = courseRepo;
    }

    @GetMapping("/courses")
    public Collection<Course> retrieveAllCourses() {
        return (Collection<Course>) courseRepo.findAll();
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course courseToAdd) {
        return courseRepo.save(courseToAdd);
    }

    @GetMapping("/courses/{id}")
    public Course retrieveSingleCourse(@PathVariable Long id) {
        return courseRepo.findById(id).get();
    }

    @GetMapping("/courses/{id}/assignments")
    public Collection<Assignment> retrieveAssignmentByCourse(@PathVariable Long id){
        Course retrievedCourse = courseRepo.findById(id).get();
        return retrievedCourse.getAssignments();
    }

    @PatchMapping("/courses/{id}")
    public Course addAssignmentToCourse (@PathVariable Long id, @RequestBody Assignment assignment){
        Course retrievedCourse = courseRepo.findById(id).get();
        retrievedCourse.addAssignment(assignment);
        return retrievedCourse;
    }

    @GetMapping("/courses/{id}/announcement")
    public Map<Announcement> getAnnouncements(@PathVariable Long id ){
        Course retrievedCourse = courseRepo.findById(id).get();
        return retrievedCourse.getAnnouncements();
    }

    @PatchMapping("/courses/{id}/announcements")
    public Course addAnnoucementToCourse(@PathVariable Long id, @RequestBody  Announcement announcement){
        Course retrievedCourse= courseRepo.findById(id).get();
        retrievedCourse.getAnnouncements().put(announcement.getTimestamp(), announcement.getContent());
        courseRepo.save(retrievedCourse);
        return retrievedCourse;
    }
}






