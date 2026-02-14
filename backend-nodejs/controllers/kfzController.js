const KfzAufbereitungPreise = require('../models/KfzAufbereitungPreise');

exports.findAll = async (req, res) => {
    try {
        //const preise = await KfzAufbereitungPreise.find();
        //res.json(preise);
        const prices = await KfzAufbereitungPreise.find().sort({ id: 1 });
    
        // Transform Decimal128 objects to numbers
        const transformedPrices = prices.map(price => ({
        ...price.toObject(),
        pkwPreis: price.pkwPreis ? parseFloat(price.pkwPreis.toString()) : 0,
        vanSuvPreis: price.vanSuvPreis ? parseFloat(price.vanSuvPreis.toString()) : 0,
        kleinbusPreis: price.kleinbusPreis ? parseFloat(price.kleinbusPreis.toString()) : 0
    }));
    
    res.json(transformedPrices);


    } catch (error) {
        console.error(error);  
        res.status(500).json({ error: error.message });
    }
};

/*
exports.save = async (req, res) => {
    try {
        const kfzPreise = new KfzAufbereitungPreise(req.body);
        const saved = await kfzPreise.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Speichern' });
    }
};
*/

exports.save = async (req, res) => {
    try {
        const { id, autopflege, pkwPreis, vanSuvPreis, kleinbusPreis } = req.body;
        
        console.log('Updating entry with id:', id);
        
        // Versuche zuerst, einen bestehenden Eintrag zu aktualisieren
        let updated = await KfzAufbereitungPreise.findOneAndUpdate(
            { id: id }, // Suche nach der numerischen ID
            {
                autopflege: autopflege,
                pkwPreis: pkwPreis,
                vanSuvPreis: vanSuvPreis,
                kleinbusPreis: kleinbusPreis
            },
            { 
                new: true, // Gib das aktualisierte Dokument zurück
                upsert: false // Erstelle KEINEN neuen Eintrag wenn nicht gefunden
            }
        );
        
        // Wenn kein Eintrag mit dieser ID gefunden wurde
        if (!updated) {
            return res.status(404).json({ error: 'Eintrag mit dieser ID nicht gefunden' });
        }
        
        res.status(200).json(updated);
        
    } catch (error) {
        console.error('Fehler beim Speichern:', error);
        res.status(500).json({ error: 'Fehler beim Speichern: ' + error.message });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await KfzAufbereitungPreise.findByIdAndDelete(id);
        res.json({ message: 'Erfolgreich gelöscht' });
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Löschen' });
    }
};