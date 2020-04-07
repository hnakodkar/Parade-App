package com.WCCI.app.Controllers;


import com.WCCI.app.Conversation;
import com.WCCI.app.Student;
import com.WCCI.app.Teacher;
import com.WCCI.app.repository.ConversationRepository;
import com.WCCI.app.repository.CourseRepository;
import com.WCCI.app.repository.StudentRepository;
import com.WCCI.app.repository.TeacherRepository;
import org.springframework.web.bind.annotation.*;

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
        Teacher retrieveTeacher = teacherRepo.findById(conversation.getTeacher().getId()).get();
        Student retrieveStudent = studentRepo.findById(conversation.getStudent().getId()).get();

        Conversation newConversation = new Conversation(conversation.getContent(), retrieveTeacher, retrieveStudent);
        Conversation retrieveConversation = conversationRepo.save(newConversation);
        return retrieveConversation;

    }


    @PatchMapping("/conversations/{id}/message")
    public Conversation updatingMessage(@RequestBody Conversation conversation) {

    }


}