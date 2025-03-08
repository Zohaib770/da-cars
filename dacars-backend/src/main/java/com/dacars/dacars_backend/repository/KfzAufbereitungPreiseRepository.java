package com.dacars.dacars_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dacars.dacars_backend.model.KfzAufbereitungPreise;

@Repository
public interface KfzAufbereitungPreiseRepository extends JpaRepository<KfzAufbereitungPreise, Long>{
    
}
