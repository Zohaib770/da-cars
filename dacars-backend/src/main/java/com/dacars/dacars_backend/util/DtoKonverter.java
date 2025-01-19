package com.dacars.dacars_backend.util;

import java.util.List;
import java.util.stream.Collectors;

import com.dacars.dacars_backend.dto.AutoDto;
import com.dacars.dacars_backend.model.Auto;
import com.dacars.dacars_backend.model.AutoBild;

public class DtoKonverter {
    
    public static AutoDto convertAutoAndAutoBildToAutoDto(Auto auto, List<AutoBild> autoBild) {

        List<String> bildUrls = autoBild.stream().map(AutoBild::getBildUrl).collect(Collectors.toList());
        AutoDto autoDto = new AutoDto(auto.getId(), auto.getMarke(), auto.getModell(), 
                                    auto.getBeschreibung(), auto.getBaujahr(), auto.getKmStand(),
                                    auto.getTuev(), auto.getLeistung(), auto.getPreis(),
                                    bildUrls);
        return autoDto;
    }

    public static AutoDto convertAutoAndAutoBildToAutoDtoList(Auto auto, List<AutoBild> autoBild) {

        List<String> bildUrls = autoBild.stream().map(AutoBild::getBildUrl).collect(Collectors.toList());
        AutoDto autoDto = new AutoDto(auto.getId(), auto.getMarke(), auto.getModell(), 
                                    auto.getBeschreibung(), auto.getBaujahr(), auto.getKmStand(),
                                    auto.getTuev(), auto.getLeistung(), auto.getPreis(),
                                    bildUrls);
        return autoDto;
    }

}
