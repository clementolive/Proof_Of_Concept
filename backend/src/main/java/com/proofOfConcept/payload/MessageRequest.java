package com.proofOfConcept.payload;

import lombok.Data;

@Data
public class MessageRequest {
    private String content;
    private String author;
}
