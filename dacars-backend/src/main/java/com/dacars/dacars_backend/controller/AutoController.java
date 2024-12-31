package com.dacars.dacars_backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dacars.dacars_backend.dto.AutoDto;
import com.dacars.dacars_backend.model.Auto;
import com.dacars.dacars_backend.model.AutoBild;
import com.dacars.dacars_backend.service.AutoBildService;
import com.dacars.dacars_backend.service.AutoService;
import com.dacars.dacars_backend.util.BildHandler;
import com.dacars.dacars_backend.util.DtoKonverter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/auto")
public class AutoController {
    
    private static final Logger log = LoggerFactory.getLogger(AutoController.class);

    @Autowired
    AutoService autoService;

    @Autowired
    AutoBildService autoBildService;

    @PostMapping("save")
    public Auto save(
                    @RequestParam("marke") String marke,
                    @RequestParam("modell") String modell,
                    @RequestParam("baujahr") int baujahr,
                    @RequestParam("dateien") List<MultipartFile> dateien) {
        log.info("===================== save ENTERED");

        Auto auto = new Auto(marke, modell, baujahr);
        Auto autosaved =  autoService.save(auto);
        long autoId = autosaved.getId();

        for (int i = 0; i < dateien.size(); i++) {
            MultipartFile file = dateien.get(i);
            String bildUrl = BildHandler.speichereBild(file, autoId, i);
            AutoBild autoBild = new AutoBild(autoId, bildUrl);
            autoBildService.save(autoBild);
        }

        return autosaved;
    }
    
    @GetMapping("findById")
    public AutoDto findById(long id) {
        log.info("===================== findById ENTERED");

        Auto auto = autoService.findById(id);
        List<AutoBild> autoBild = autoBildService.findByAutoId(id);
        AutoDto autoDto = DtoKonverter.convertAutoAndAutoBildToAutoDto(auto, autoBild);

        return autoDto;
    }

    @GetMapping("findAll")
    public List<AutoDto> findAll() {
        log.info("===================== findAll ENTERED");

        List<AutoDto> autoDtos = new ArrayList<>();
        List<Auto> auto = autoService.findAll();
        for(Auto a:auto){
            Auto aut = autoService.findById(a.getId());
            List<AutoBild> autoBild = autoBildService.findByAutoId(a.getId());
            AutoDto autoDto = DtoKonverter.convertAutoAndAutoBildToAutoDto(aut, autoBild);
            autoDtos.add(autoDto);
        }
        
        return autoDtos;
    }

}
