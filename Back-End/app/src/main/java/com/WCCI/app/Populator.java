package com.WCCI.app;

import com.WCCI.app.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    StudentRepository studentRepo;
    @Autowired
    TeacherRepository teacherRepo;
    @Autowired
    CourseRepository courseRepo;
    @Autowired
    ConversationRepository conversationRepository;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());


    @Override
    public void run(String... args) throws Exception {
        Student abdul = new Student("Abdul", "AbdulParent", "123", "abdul123@yahoo.com", "911", "fr", "abdul123", "abdul");
        Student hetal = new Student("Hetal","hetal Parent","123","hetal123@yahoo.com","224","gu","hetal123","hetal");
        Student innocent= new Student("Innocent","innocent Prent","123","innocent@gmail.com","65148789","es","innocent123","innocent");
        studentRepo.save(abdul);
        studentRepo.save(hetal);
        studentRepo.save(innocent);

        Teacher smith= new Teacher("Mr Smith", "123","smith@school.com","614883838","smith123","smith");
        Teacher ashley= new Teacher("Ms Ashley","123","ashley@hotmail.com","2148956325","ashley123", "ashley");
        Teacher bob= new Teacher("Mr Bob","123","bob@gmail.com","5641235874","bob123","bob");
        teacherRepo.save(smith);
        teacherRepo.save(ashley);
        teacherRepo.save(bob);

        Course math= new Course("Math",smith,"11:00", Arrays.asList(abdul,hetal,innocent));
        Course english= new Course("English",ashley, "12:00", Arrays.asList(abdul,hetal,innocent));
        Course biology= new Course("bio",bob,"10:00",Arrays.asList(abdul,hetal,innocent));

        Assignment mathAssignment= new Assignment("mathAssignment", "homework 2", timestamp.getTime());
        Assignment bioAssignment= new Assignment("bioAssignment", "cells Homework",timestamp.getTime()) ;
        Assignment englishAssignment= new Assignment("englishAssignment","Hamlet reading", timestamp.getTime());
        math.addAssignment(mathAssignment);
        english.addAssignment(englishAssignment);
        biology.addAssignment(bioAssignment);
        courseRepo.save(math);
        courseRepo.save(biology);
        courseRepo.save(english);

        Conversation message1= new Conversation(Collections.singletonList(""),smith,hetal);
        Conversation message2= new Conversation(Collections.singletonList(""),smith,abdul);
        Conversation message3= new Conversation(Collections.singletonList(""),smith,innocent);
        Conversation message4= new Conversation(Collections.singletonList(""),ashley,hetal);
        Conversation message5= new Conversation(Collections.singletonList(""),ashley,abdul);
        Conversation message6= new Conversation(Collections.singletonList(""),ashley,innocent);
        Conversation message7= new Conversation(Collections.singletonList(""),bob,hetal);
        Conversation message8= new Conversation(Collections.singletonList(""),bob,abdul);
        Conversation message9= new Conversation(Collections.singletonList(""),bob,innocent);

        conversationRepository.save(message1);
        conversationRepository.save(message2);
        conversationRepository.save(message3);
        conversationRepository.save(message4);
        conversationRepository.save(message5);
        conversationRepository.save(message6);
        conversationRepository.save(message7);
        conversationRepository.save(message8);
        conversationRepository.save(message9);


    }


}
