package com.proofOfConcept.service;

import com.proofOfConcept.entity.Message;
import com.proofOfConcept.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;
    public List<Message> getMessages() {
        return messageRepository.findAll();
    }

    public void sendMessage(Message message) {
        messageRepository.save(message);
    }
}
