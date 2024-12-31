package com.dacars.dacars_backend.util;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class BildHandler {

    private static final String BILDER_ORDNER = "src/main/resources/static/autobilder";

    // Initialisiert das Bilderverzeichnis, falls es nicht existiert
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

    // Lädt ein Bild aus dem Verzeichnis
    public byte[] ladeBild(String dateiname) {
        try {
            Path bildPfad = Paths.get(BILDER_ORDNER).resolve(dateiname);
            if (!Files.exists(bildPfad)) {
                throw new IOException("Bild nicht gefunden: " + dateiname);
            }
            return Files.readAllBytes(bildPfad);
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Laden des Bildes: " + dateiname, e);
        }
    }

    // Löscht ein Bild aus dem Verzeichnis
    public void loescheBild(String dateiname) {
        try {
            Path bildPfad = Paths.get(BILDER_ORDNER).resolve(dateiname);
            if (Files.exists(bildPfad)) {
                Files.delete(bildPfad);
            } else {
                throw new IOException("Bild nicht gefunden: " + dateiname);
            }
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Löschen des Bildes: " + dateiname, e);
        }
    }
}
