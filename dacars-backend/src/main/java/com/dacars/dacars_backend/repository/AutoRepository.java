package com.dacars.dacars_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dacars.dacars_backend.model.Auto;

@Repository
public interface AutoRepository extends JpaRepository<Auto, Long>{
    
    List<Auto> findAll();
}
