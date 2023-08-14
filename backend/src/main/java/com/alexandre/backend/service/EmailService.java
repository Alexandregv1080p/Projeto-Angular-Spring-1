package com.alexandre.backend.service;

import javax.mail.MessagingException;

import com.alexandre.backend.model.EmailRequest;

public interface EmailService {

    public void sendSimpleEmail(EmailRequest emailRequest) throws MessagingException;
}
