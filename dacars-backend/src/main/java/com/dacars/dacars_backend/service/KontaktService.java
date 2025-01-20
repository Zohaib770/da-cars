package com.dacars.dacars_backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.dto.KontaktDto;

@Service
public class KontaktService {

    private static final Logger log = LoggerFactory.getLogger(KontaktService.class);

    @Autowired
    private EmailService emailService;
    
    public void kontaktDatenAnEmpfaengerSenden(KontaktDto kontaktDto) {
        log.info(" ===== kontaktDatenAnEmpfaengerSenden ENTER kontaktDto={}", kontaktDto);

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("noreply@dacars.com");
            message.setTo("kzohaib770@gmail.com");
            /* message.setReplyTo("support@dacars.com"); */
            message.setSubject("Da Cars: Neue Kontaktanfrage von " + kontaktDto.getName());
            
            StringBuilder emailText = new StringBuilder();
            emailText.append("Guten Tag,\n\n")
                 .append("Sie haben eine neue Kontaktanfrage erhalten. Hier sind die Details:\n\n")
                 .append("Name: ").append(kontaktDto.getName()).append("\n")
                 .append("E-Mail: ").append(kontaktDto.getEmail()).append("\n")
                 .append("Nachricht:\n")
                 .append(kontaktDto.getNachricht()).append("\n\n")
                 .append("Vielen Dank.\n")
                 .append("Ihr dacars Team");
            
            message.setText(emailText.toString());

            emailService.sendEmail(message);
            log.info("E-Mail erfolgreich gesendet.");
        } catch (Exception e) {
            log.error("Fehler beim Senden der E-Mail: ", e);
            throw new RuntimeException("Fehler beim Senden der E-Mail", e);
        }
    }

}
