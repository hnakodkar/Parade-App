package com.WCCI.app;

import com.WCCI.app.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Component
public class Pouplator implements CommandLineRunner {

    @Autowired
    StudentRepository studentRepo;
    @Autowired
    TeacherRepository teacherRepo;
    @Autowired
    CourseRepository courseRepo;
    @Autowired
    AssignmentRepository assignmentRepository;
    @Autowired
    ConversationRepository conversationRepository;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());


    @Override
    public void run(String... args) throws Exception {
        Student abdul = new Student("Abdul");
        Student hetal = new Student("Hetal");
        Student innocent= new Student("Innocent");
        studentRepo.save(abdul);
        studentRepo.save(hetal);
        studentRepo.save(innocent);

        Teacher smith= new Teacher("MrSmith");
        Teacher ashley= new Teacher("MissAshley");
        Teacher bob= new Teacher("Bob");
        teacherRepo.save(smith);
        teacherRepo.save(ashley);
        teacherRepo.save(bob);

        Course math= new Course("Math",smith,"11:00", Arrays.asList(abdul,hetal,innocent));
        Course english= new Course("English",ashley, "12:00", Arrays.asList(abdul,hetal,innocent));
        Course biology= new Course("bio",bob,"10:00",Arrays.asList(abdul,hetal,innocent));
        courseRepo.save(math);
        courseRepo.save(biology);
        courseRepo.save(english);

        Assignment mathAssignment= new Assignment("mathAssignment", "homework 2", timestamp.getTime());
        Assignment bioAssignment= new Assignment("bioAssignment", "cells Homework",timestamp.getTime()) ;
        Assignment englishAssignment= new Assignment("englishAssignment","Hamlet reading", timestamp.getTime());
        assignmentRepository.save(mathAssignment);
        assignmentRepository.save(englishAssignment);
        assignmentRepository.save(bioAssignment);

        Conversation message= new Conversation("homework");


    }


}
