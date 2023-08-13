package com.alexandre.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandre.backend.model.EmailRequest;

public interface MailRepository extends JpaRepository<EmailRequest, Long> {
    
}
