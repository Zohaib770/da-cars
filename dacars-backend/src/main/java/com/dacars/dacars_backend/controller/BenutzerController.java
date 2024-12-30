package com.dacars.dacars_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dacars.dacars_backend.model.Benutzer;
import com.dacars.dacars_backend.service.BenutzerService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
  
        return benutzerservice.save(benutzer);
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
}
