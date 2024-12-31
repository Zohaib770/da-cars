package com.dacars.dacars_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dacars.dacars_backend.model.AutoBild;

public interface AutoBildRepository extends JpaRepository<AutoBild, Long>{
    
    public List<AutoBild> findByAutoId(Long autoId);
    public void deleteByAutoId(Long autoId);

}
