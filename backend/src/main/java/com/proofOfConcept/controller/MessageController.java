package com.proofOfConcept.controller;

import com.proofOfConcept.model.Message;
import com.proofOfConcept.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
}
