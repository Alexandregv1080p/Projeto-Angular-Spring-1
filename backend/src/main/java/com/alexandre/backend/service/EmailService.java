package com.alexandre.backend.service;

import com.alexandre.backend.model.EmailRequest;

public interface EmailService {
    public void sendEmailWithAttachments(EmailRequest mail);

    public Long sendMail(EmailRequest mail);
}
