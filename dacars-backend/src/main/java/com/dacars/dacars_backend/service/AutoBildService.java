package com.dacars.dacars_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dacars.dacars_backend.model.AutoBild;
import com.dacars.dacars_backend.repository.AutoBildRepository;

@Service
public class AutoBildService {
    
    @Autowired
    AutoBildRepository autoBildRepository;    

    public AutoBild save(AutoBild autoBild) {
        return autoBildRepository.save(autoBild);
    }

    public void deleteById(Long id) {
        autoBildRepository.deleteById(id);
    }

    public void deleteByAutoId(long autoId){
        autoBildRepository.deleteByAutoId(autoId);
    }

    public AutoBild findById(Long id) {
        return autoBildRepository.findById(id).orElse(null);
    }

    public List<AutoBild> findByAutoId(long id){
        return autoBildRepository.findByAutoId(id);
    }
    
    public List<AutoBild> findAll(){
        return autoBildRepository.findAll();
    }
    
}
