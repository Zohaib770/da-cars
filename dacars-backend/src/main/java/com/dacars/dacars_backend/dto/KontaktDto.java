package com.dacars.dacars_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class KontaktDto {

    private String name;
    private String email;
    private String telefon;
    private String nachricht;
    
}
