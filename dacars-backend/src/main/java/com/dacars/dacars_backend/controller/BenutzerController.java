package com.dacars.dacars_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dacars.dacars_backend.dto.LoginDto;
import com.dacars.dacars_backend.model.Benutzer;
import com.dacars.dacars_backend.service.BenutzerService;
import com.dacars.dacars_backend.util.PasswordUtil;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/benutzer")
public class BenutzerController {

    private static final Logger log = LoggerFactory.getLogger(BenutzerController.class);
    
    @Autowired
    private BenutzerService benutzerservice;

    @GetMapping({"/register"})
    public Benutzer register(@RequestBody Benutzer benutzer) {
        log.info("===================== register");        
        
        benutzer.setPasswort(PasswordUtil.hashPassword(benutzer.getPasswort()));
        return benutzerservice.save(benutzer);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        log.info("===================== login ENTERED, email: {}", loginDto.getEmail());

        Benutzer benutzer = benutzerservice.findByEmail(loginDto.getEmail());

        if (benutzer != null) {
            if (PasswordUtil.checkPassword(loginDto.getPassword(), benutzer.getPasswort())) {
                log.info("anmelden erfolgreich fuer email: {}", loginDto.getEmail());
                return ResponseEntity.ok("anmelden erfolgreich");
            } else {
                log.error("falscher passwort for email: {}", loginDto.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("falsche passswort");
            }
        } else {
            log.error("User not found for email: {}", loginDto.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("benutzer nicht gefunden");
        }
    }

    @GetMapping({"/deletebyid/{id}"})
    public void deleteById(@PathVariable(value = "id") long id)  {  
        log.info("===================== deleteById  ENTERED ");        
        benutzerservice.deleteById(id);
    }

    @GetMapping({"/findbyemail/{email}"})
    public Benutzer getBenutzer(@PathVariable(value = "email") String email)  {  
        log.info("===================== getbenutzer  ENTERED email{}", email);        
        Benutzer benutzer = benutzerservice.findByEmail(email);
        log.error(" benutzer: {}", benutzer);
        return benutzer;
    }

    @PostMapping("/admin/update-password")
    public ResponseEntity<String> adminUpdatePassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");

        log.info("===== adminUpdatePassword ENTERED email={}", email);

        Benutzer benutzer = benutzerservice.findByEmail(email);

        if (benutzer != null) {
            benutzer.setPasswort(PasswordUtil.hashPassword(newPassword));
            benutzerservice.save(benutzer);

            log.info("Passwort erfolgreich geaendert fuer email: {}", email);
            return ResponseEntity.ok("Passwort erfolgreich geändert");
        } else {
            log.error("Benutzer nicht gefunden für email: {}", email);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Benutzer nicht gefunden");
        }
    }
}
