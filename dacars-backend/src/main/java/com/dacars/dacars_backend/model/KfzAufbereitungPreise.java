package com.dacars.dacars_backend.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "kfzaufbereitungpreise")
public class KfzAufbereitungPreise {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "autopflege", unique = true, nullable = false)
    private String autopflege;

    @Column(name = "pkw_preis")
    private BigDecimal pkwPreis;

    @Column(name = "van_suv_preis")
    private BigDecimal vanSuvPreis;

    @Column(name = "kleinbus_preis")
    private BigDecimal kleinbusPreis;
}
