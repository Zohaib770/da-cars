package com.dacars.dacars_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.model.Benutzer;
import com.dacars.dacars_backend.repository.BenutzerRepository;

@Service
public class BenutzerService {
    
    @Autowired
    private final BenutzerRepository benutzerRepository;

    public BenutzerService(BenutzerRepository benutzerRepository) { 
        this.benutzerRepository = benutzerRepository;
    }

    public Benutzer save(Benutzer benutzer) {
        return benutzerRepository.save(benutzer);
    }

    public Benutzer findByEmail(String email)  {
        return benutzerRepository.findByEmail(email);
    }

    public void deleteById(Long id) {
        benutzerRepository.deleteById(id);
    }
}
