package com.dacars.dacars_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.model.Auto;
import com.dacars.dacars_backend.repository.AutoRepository;

@Service
public class AutoService {
    
    @Autowired
    private final AutoRepository autoRepository;
    
    public AutoService(AutoRepository autoRepository) { 
        this.autoRepository = autoRepository;
    }

    public Auto save(Auto auto) {
        return autoRepository.save(auto);
    }

    public Auto findById(Long id) {
        return autoRepository.findById(id).orElse(null);
    }

    public List<Auto> findAll() {
        return autoRepository.findAll();
    }

    public void deleteById(Long id) {
        autoRepository.deleteById(id);
    }
}
