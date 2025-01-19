package com.dacars.dacars_backend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AutoDto {

    private Long autoId;
    private String marke;
    private String modell;
    private String beschreibung;
    private int baujahr;
    private int kmStand;
    private LocalDate tuev;
    private int leistung;//ps
    private BigDecimal preis;
    List<String> bildUrl;

}
