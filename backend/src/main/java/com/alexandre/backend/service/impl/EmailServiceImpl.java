package com.alexandre.backend.service.impl;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import com.alexandre.backend.model.EmailRequest;
import com.alexandre.backend.service.EmailService;

@Component
@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendSimpleEmail(EmailRequest emailRequest) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        message.setFrom(emailRequest.getEmail());
        helper.setFrom(emailRequest.getEmail());
        helper.setTo("alexandregv1999@gmail.com");
        helper.setSubject(emailRequest.getSubject());
        helper.setText(
            emailRequest.getDescription() + "\n"+"\nEste email foi enviado por: " +
            emailRequest.getEmail() + "\nNome da pessoa: " + 
            emailRequest.getName() + "\nTelefone da pessoa: " +
            emailRequest.getTelephone()

            );
        
        javaMailSender.send(message);
    }

    
}