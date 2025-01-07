package com.dacars.dacars_backend.dto;

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
    private int baujahr;
    List<String> bildUrl;

}
