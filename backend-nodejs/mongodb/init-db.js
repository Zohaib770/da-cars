require('dotenv').config();
const mongoose = require('mongoose');

const initDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Initialdaten für Admin-Benutzer
        const Benutzer = require('./models/Benutzer');
        const passwordUtil = require('./utils/passwordUtil');
        
        const adminExists = await Benutzer.findOne({ email: 'admin@gmail.com' });
        if (!adminExists) {
            const admin = new Benutzer({
                email: 'admin@gmail.com',
                passwort: passwordUtil.hashPassword('admin123'),
                role: 'ADMIN'
            });
            await admin.save();
            console.log('Admin-Benutzer erstellt');
        }
        
        // Initialdaten für Kfz-Aufbereitungspreise
        const KfzAufbereitungPreise = require('./models/KfzAufbereitungPreise');
        
        const preiseData = [
            // Hier die Preisdaten aus deiner SQL-Datei einfügen
        ];
        
        for (const preis of preiseData) {
            const exists = await KfzAufbereitungPreise.findOne({ autopflege: preis.autopflege });
            if (!exists) {
                await KfzAufbereitungPreise.create(preis);
            }
        }
        
        console.log('Datenbank-Initialisierung abgeschlossen');
        process.exit(0);
    } catch (error) {
        console.error('Fehler bei der Datenbank-Initialisierung:', error);
        process.exit(1);
    }
};

initDB();