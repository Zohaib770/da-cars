const fs = require('fs').promises;
const path = require('path');

class BildHandler {
    constructor() {
        this.BILDER_ORDNER = process.env.UPLOAD_DIR || './uploads/bilder';
        this.init();
    }

    async init() {
        try {
            await fs.mkdir(this.BILDER_ORDNER, { recursive: true });
            console.log(`📁 Upload-Verzeichnis erstellt: ${this.BILDER_ORDNER}`);
        } catch (error) {
            console.error('❌ Fehler beim Erstellen des Bilderverzeichnisses:', error.message);
        }
    }

    async speichereBild(file, autoId, index) {
        try {
            if (!file || !file.buffer) {
                throw new Error('Ungültige Datei');
            }

            const originalDateiname = file.originalname || `bild_${Date.now()}.jpg`;
            const extension = path.extname(originalDateiname) || '.jpg';
            const einzigartigerDateiname = `${autoId}_${index}_${Date.now()}${extension}`;
            
            const zielPfad = path.join(this.BILDER_ORDNER, einzigartigerDateiname);
            await fs.writeFile(zielPfad, file.buffer);
            
            console.log(`✅ Bild gespeichert: ${einzigartigerDateiname}`);
            return einzigartigerDateiname;
        } catch (error) {
            console.error('❌ Fehler beim Speichern des Bildes:', error.message);
            throw error;
        }
    }

    async loescheBild(dateiname) {
        console.log(`🗑️  Lösche Bild: ${dateiname}`);
        const bildPfad = path.join(this.BILDER_ORDNER, dateiname);
        
        try {
            await fs.access(bildPfad);
            await fs.unlink(bildPfad);
            console.log(`✅ Bild gelöscht: ${dateiname}`);
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.warn(`⚠️  Bild nicht gefunden: ${dateiname}`);
            } else {
                console.error(`❌ Fehler beim Löschen des Bildes ${dateiname}:`, error.message);
            }
        }
    }
}

module.exports = new BildHandler();