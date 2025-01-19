package com.dacars.dacars_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.model.KfzAufbereitungPreise;
import com.dacars.dacars_backend.repository.KfzAufbereitungPreiseRepository;

@Service
public class KfzAufbereitungPreiseService {
    
    @Autowired
    private KfzAufbereitungPreiseRepository kfzAufbereitungPreiseRepository;

    public List<KfzAufbereitungPreise> findAll(){
        return kfzAufbereitungPreiseRepository.findAll();
    }  

    public KfzAufbereitungPreise save(KfzAufbereitungPreise kfzAufbereitungPreise) {
        return kfzAufbereitungPreiseRepository.save(kfzAufbereitungPreise);
    }

    public void deleteById(long id) {
        kfzAufbereitungPreiseRepository.deleteById(id);
    }  

}
