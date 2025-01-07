package com.dacars.dacars_backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dacars.dacars_backend.dto.KontaktDto;
import com.dacars.dacars_backend.service.KontaktService;

@RestController
@RequestMapping("/kontakt")
public class KontaktController {

    private static final Logger log = LoggerFactory.getLogger(KontaktController.class);
    
    @Autowired
    private KontaktService kontaktService;

    @PostMapping("/mailanempfaenger")
    public ResponseEntity<String> kontaktDatenAnEmpfaengerSenden(@RequestBody KontaktDto kontaktDto) {
        log.info("===== kontaktDatenAnEmpfaengerSenden ENTER kontaktDto={}", kontaktDto);
        try {
            kontaktService.kontaktDatenAnEmpfaengerSenden(kontaktDto);
            return ResponseEntity.ok("E-Mail erfolgreich gesendet!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Fehler beim Senden der E-Mail.");
        }
    }
}
