package com.dacars.dacars_backend.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class BildHandler {

    private static final Logger log = LoggerFactory.getLogger(BildHandler.class);

    private static final String BILDER_ORDNER = "src/main/resources/static/autobilder";

    static {
        try {
            Path ordnerPath = Paths.get(BILDER_ORDNER);
            if (!Files.exists(ordnerPath)) {
                Files.createDirectories(ordnerPath);
            }
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Erstellen des Bilderverzeichnisses", e);
        }
    }

    public static String speichereBild(MultipartFile file, long autoId, int index) {
        String originalDateiname = StringUtils.cleanPath(file.getOriginalFilename());
        String einzigartigerDateiname = autoId + "_" + index + "_" + originalDateiname;

        try {
            if (file.isEmpty()) {
                throw new IOException("Die Datei ist leer: " + originalDateiname);
            }

            Path zielPfad = Paths.get(BILDER_ORDNER).resolve(einzigartigerDateiname);
            Files.copy(file.getInputStream(), zielPfad, StandardCopyOption.REPLACE_EXISTING);

            return einzigartigerDateiname;
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Speichern der Datei: " + originalDateiname, e);
        }
    }

    public static void loescheBild(String dateiname) {
        log.info(" ===== loescheBild ENTER dateiname={}", dateiname);
        Path bildPfad = Paths.get(BILDER_ORDNER).resolve(dateiname);
        if (Files.exists(bildPfad)) {
            try {
                Files.delete(bildPfad);
                log.info("Bild erfolgreich gelöscht: {}", dateiname);
            } catch (IOException e) {
                log.error("Fehler beim Löschen des Bildes: {}", dateiname, e);
            }
        } else {
            log.warn("Bild nicht gefunden: {}", dateiname);
        }
    }
    
}
