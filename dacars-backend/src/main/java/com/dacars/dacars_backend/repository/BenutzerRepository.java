package com.dacars.dacars_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dacars.dacars_backend.model.Benutzer;

@Repository
public interface BenutzerRepository extends JpaRepository<Benutzer, Long> {

    Benutzer findByEmail(String email);
}