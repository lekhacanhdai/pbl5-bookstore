package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@AllArgsConstructor
public class EmailServiceImpl implements EmailService {
    @Autowired
    private final JavaMailSender mailSender;
    @Override
    @Async
    public void send(String to, String message, String subject) {
        try{
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, "utf-8");
            mimeMessageHelper.setText(message, true);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setSubject(subject);
            mailSender.send(mimeMessage);
        }
        catch (MessagingException e){
            throw new IllegalStateException("Failed to send email!");
        }
    }

    @Override
    public boolean emailValidator(String email) {

        // TODO: Validator email

        return true;
    }
}
