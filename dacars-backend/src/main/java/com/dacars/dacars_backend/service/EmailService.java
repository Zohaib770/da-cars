package com.dacars.dacars_backend.service;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    private static final Logger log = LoggerFactory.getLogger(KontaktService.class);
    
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    OTPService otpService;

    public void sendEmail(SimpleMailMessage message) {
        try {
            mailSender.send(message);
            log.info("Email sent successfully to {}", message);
        } catch (Exception e) {
            log.error("Error while sending email to {}: {}", message.getTo(), e.getMessage());
            throw new RuntimeException("Failed to send email", e);
        }
    }

    public void sendOTPEmail(String email) {
        log.info(" ===== sendOTPEmail ENTER ");
        String otp = otpService.generateOTP(email);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("kzohaib770@gmail.com");
        message.setSubject("Your OTP Code");
        message.setText("Your OTP code is: " + otp);
        mailSender.send(message);
    }
    
}
