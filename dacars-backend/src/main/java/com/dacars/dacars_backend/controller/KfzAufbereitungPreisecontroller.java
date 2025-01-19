package com.dacars.dacars_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dacars.dacars_backend.model.KfzAufbereitungPreise;
import com.dacars.dacars_backend.service.KfzAufbereitungPreiseService;


@RestController
@RequestMapping("/Kfzaufbereitungpreise")
public class KfzAufbereitungPreisecontroller {
    
    @Autowired
    private KfzAufbereitungPreiseService kfzAufbereitungPreiseService;

    @GetMapping("/findall")
    public List<KfzAufbereitungPreise> findAll(){
        return kfzAufbereitungPreiseService.findAll();
    }

    @PostMapping("/save")
    public KfzAufbereitungPreise save(@RequestBody KfzAufbereitungPreise kfzAufbereitungPreise){
        return kfzAufbereitungPreiseService.save(kfzAufbereitungPreise);
    }

    @DeleteMapping("/deletebyid")
    public void deleteByid(@RequestParam Long id){
        kfzAufbereitungPreiseService.deleteById(id);
    }
}

