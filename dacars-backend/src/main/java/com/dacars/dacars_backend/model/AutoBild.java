package com.dacars.dacars_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AutoBild {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long autoId;
    private String bildUrl;

    public AutoBild(Long autoId, String bildUrl) {
        this.autoId = autoId;
        this.bildUrl = bildUrl;
    }
}
