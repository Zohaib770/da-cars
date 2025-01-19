package com.dacars.dacars_backend.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auto")
public class Auto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "marke")
    private String marke;

    @Column(name = "modell")
    private String modell;

    @Column(name = "beschreibung")
    private String beschreibung;

    @Column(name = "baujahr")
    private int baujahr;

    @Column(name = "km_stand")
    private int kmStand;

    @Column(name = "tuev")
    private LocalDate tuev;

    @Column(name = "leistung")
    private int leistung;//ps

    @Column(name = "preis")
    private BigDecimal preis;

}
