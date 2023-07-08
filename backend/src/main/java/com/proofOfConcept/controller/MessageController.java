package com.proofOfConcept.controller;

import com.proofOfConcept.model.Message;
import com.proofOfConcept.payload.MessageRequest;
import com.proofOfConcept.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping("/api/message")
    public List<Message> getMessages(){
        return messageService.getMessages();
    }

    @PostMapping("/api/message")
    public String sendMessage(@RequestBody MessageRequest messageRequest){
        Message message = new Message(messageRequest.getContent(), messageRequest.getAuthor());
        messageService.sendMessage(message);
        return "Message sent";
    }
}
