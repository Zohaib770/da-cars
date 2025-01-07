package com.dacars.dacars_backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.dto.KontaktDto;

@Service
public class KontaktService {

    private static final Logger log = LoggerFactory.getLogger(KontaktService.class);
    
    @Autowired
    private JavaMailSender mailSender;

    public void kontaktDatenAnEmpfaengerSenden(KontaktDto kontaktDto) {
        log.info(" ===== kontaktDatenAnEmpfaengerSenden ENTER kontaktDto={}", kontaktDto);

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("noreply@dacars.com");
            message.setTo("kzohaib770@gmail.com");
            /* message.setReplyTo("support@dacars.com"); */
            message.setSubject("Neue Kontaktanfrage von " + kontaktDto.getName());
            message.setText(
                "Name: " + kontaktDto.getName()+ "\n" +
                "E-Mail: " + kontaktDto.getEmail() + "\n\n" +
                "Nachricht:\n" + kontaktDto.getNachricht()
            );

            mailSender.send(message);
            log.info("E-Mail erfolgreich gesendet.");
        } catch (Exception e) {
            log.error("Fehler beim Senden der E-Mail: ", e);
            throw new RuntimeException("Fehler beim Senden der E-Mail", e);
        }
    }
    
}
