package com.dacars.dacars_backend.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dacars.dacars_backend.service.EmailService;
import com.dacars.dacars_backend.service.OTPService;

@RestController
@RequestMapping("/profil")
public class ProfilController {
    
    private static final Logger log = LoggerFactory.getLogger(ProfilController.class);
    @Autowired
    EmailService emailService;

    @Autowired
    OTPService otpService;

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOTP(@RequestParam String email) {
        log.info(" sendOTP ENTER email={}", email);
        emailService.sendOTPEmail(email);
        return ResponseEntity.ok("OTP sent to " + email);
    }

    @PostMapping("/validate-otp")
    public ResponseEntity<String> validateOTP(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");
        log.info(" validateOTP ENTER email={} otp={}", email, otp);

        if (otpService.validateOTP(email, otp)) {
            return ResponseEntity.ok("OTP is valid");
        } else {
            return ResponseEntity.badRequest().body("Invalid OTP");
        }
    }

}
