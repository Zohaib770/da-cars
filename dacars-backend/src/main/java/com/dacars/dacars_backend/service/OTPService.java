package com.dacars.dacars_backend.service;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@Service
public class OTPService {

    private final Map<String, String> otpStorage = new ConcurrentHashMap<>();

    public String generateOTP(String email) {
        String otp = String.format("%06d", (int) (Math.random() * 1000000));
        otpStorage.put(email, otp);
        // Ablaufzeit von 5 Minuten setzen
        Executors.newSingleThreadScheduledExecutor().schedule(() -> otpStorage.remove(email), 5, TimeUnit.MINUTES);

        return otp;
    }

    public boolean validateOTP(String email, String otp) {
        return otpStorage.containsKey(email) && otpStorage.get(email).equals(otp);
    }
}

