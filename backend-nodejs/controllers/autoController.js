const Auto = require('../models/Auto');
const AutoBild = require('../models/AutoBild');
const bildHandler = require('../utils/bildHandler');
const dtoKonverter = require('../utils/dtoKonverter');
const logger = require('../config/logger');

exports.saveAuto = async (req, res) => {
    try {
        logger.info('===================== save ENTERED');
        
        const autoData = req.body;
        const files = req.files;
        
        const auto = new Auto(autoData);
        const autosaved = await auto.save();
        const autoId = autosaved._id;

        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const bildUrl = await bildHandler.speichereBild(file, autoId, i);
                
                const autoBild = new AutoBild({
                    autoId: autoId,
                    bildUrl: bildUrl
                });
                await autoBild.save();
            }
        }

        res.status(201).json(autosaved);
    } catch (error) {
        logger.error('Fehler beim Speichern des Autos:', error);
        res.status(500).json({ error: 'Fehler beim Speichern des Autos' });
    }
};

exports.findById = async (req, res) => {
    try {
        logger.info('===================== findById ENTERED');
        const { id } = req.params;
        
        const auto = await Auto.findById(id);
        if (!auto) {
            return res.status(404).json({ error: 'Auto nicht gefunden' });
        }

        const autoBilder = await AutoBild.find({ autoId: id });
        const autoDto = dtoKonverter.convertAutoAndAutoBildToAutoDto(auto, autoBilder);
        
        res.json(autoDto);
    } catch (error) {
        logger.error('Fehler beim Finden des Autos:', error);
        res.status(500).json({ error: 'Fehler beim Finden des Autos' });
    }
};

exports.findAll = async (req, res) => {
    try {
        logger.info('===================== findAll ENTERED');
        
        const autos = await Auto.find();
        const autoDtos = [];
        
        for (const auto of autos) {
            const autoBilder = await AutoBild.find({ autoId: auto._id });
            const autoDto = dtoKonverter.convertAutoAndAutoBildToAutoDto(auto, autoBilder);
            autoDtos.push(autoDto);
        }
        
        res.json(autoDtos);
    } catch (error) {
        logger.error('Fehler beim Abrufen aller Autos:', error);
        res.status(500).json({ error: 'Fehler beim Abrufen aller Autos' });
    }
};

exports.deleteById = async (req, res) => {
    try {
        logger.info('===================== deleteById ENTERED');
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: 'ID ist erforderlich' });
        }
        // Bilder löschen
        const autoBilder = await AutoBild.find({ autoId: id });
        for (const bild of autoBilder) {
            await bildHandler.loescheBild(bild.bildUrl);
        }
        
        // AutoBilder aus DB löschen
        await AutoBild.deleteMany({ autoId: id });
        
        // Auto löschen
        await Auto.findByIdAndDelete(id);
        
        res.json({ message: 'Auto erfolgreich gelöscht' });
    } catch (error) {
        logger.error('Fehler beim Löschen des Autos:', error);
        res.status(500).json({ error: 'Fehler beim Löschen des Autos' });
    }
};