package com.alexandre.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.alexandre.backend.model.EmailRequest;
import com.alexandre.backend.service.EmailService;

@Component
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender emailSender;

    @Override
    public void sendEmailWithAttachments(EmailRequest mail) {
    }

    @Override
    public Long sendMail(EmailRequest mail) {
        System.out.println("send email...");
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(mail.getName());
        msg.setFrom("alexandregv1999@gmail.com");
        msg.setSubject(mail.);
    }

    
}