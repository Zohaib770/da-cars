const kontaktService = require('../services/emailService');
const logger = require('../config/logger');

exports.kontaktDatenAnEmpfaengerSenden = async (req, res) => {
    try {
        logger.info('===== kontaktDatenAnEmpfaengerSenden ENTER', req.body);
        
        const kontaktDto = req.body;
        await kontaktService.kontaktDatenAnEmpfaengerSenden(kontaktDto);
        
        res.json({ message: 'E-Mail erfolgreich gesendet!' });
    } catch (error) {
        logger.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
    }
};