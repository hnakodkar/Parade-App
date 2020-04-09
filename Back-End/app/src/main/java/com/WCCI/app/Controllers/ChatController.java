package com.WCCI.app.Controllers;


import com.WCCI.app.Conversation;
import com.WCCI.app.Student;
import com.WCCI.app.Teacher;
import com.WCCI.app.repository.ConversationRepository;
import com.WCCI.app.repository.CourseRepository;
import com.WCCI.app.repository.StudentRepository;
import com.WCCI.app.repository.TeacherRepository;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.AbstractDocument;
import java.util.Collection;

@RestController
public class ChatController {
    private StudentRepository studentRepo;
    private TeacherRepository teacherRepo;
    private CourseRepository courseRepo;
    private ConversationRepository conversationRepo;

    public ChatController(StudentRepository studentRepo, TeacherRepository teacherRepo, CourseRepository courseRepo, ConversationRepository conversationRepo) {
        this.studentRepo = studentRepo;
        this.courseRepo = courseRepo;
        this.teacherRepo = teacherRepo;
        this.conversationRepo = conversationRepo;
    }

    @PostMapping("/conversations")
    public Conversation createConversation(@RequestBody Conversation conversation) {
        System.out.println(conversation);
        Teacher retrievedTeacher = teacherRepo.findById(conversation.getTeacher().getId()).get();
        Student retrievedStudent = studentRepo.findById(conversation.getStudent().getId()).get();

        Conversation newConversation = new Conversation(conversation.getContent(), retrievedTeacher, retrievedStudent);
        Conversation retrievedConversation = conversationRepo.save(newConversation);
        return retrievedConversation;
    }

    @GetMapping("/conversations")
    public Collection<Conversation> getAllConversations (){
        return (Collection<Conversation>) conversationRepo.findAll();
    }

    @PatchMapping("/conversations/{id}")
    public Conversation updateMessage(@PathVariable Long id, @RequestBody String contentToAdd){
        Conversation conversation = conversationRepo.findById(id).get();
        Collection<String>conversationToUpdate = conversation.getContent();
        conversationToUpdate.add(contentToAdd);
        conversationRepo.save(conversation);
        return conversation;
    }
}
