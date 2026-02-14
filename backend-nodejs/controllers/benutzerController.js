const Benutzer = require('../models/Benutzer');
const passwordUtil = require('../utils/passwordUtil');
const logger = require('../config/logger');

exports.register = async (req, res) => {
    try {
        logger.info('===================== register ENTERED');
        
        const { email, passwort, role } = req.body;
        
        // Prüfen ob Benutzer existiert
        const existingUser = await Benutzer.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Benutzer existiert bereits' });
        }
        
        // Passwort hashen
        const hashedPassword = passwordUtil.hashPassword(passwort);
        
        // Neuen Benutzer erstellen
        const benutzer = new Benutzer({
            email,
            passwort: hashedPassword,
            role: role || 'USER'
        });
        
        const savedBenutzer = await benutzer.save();
        
        // Passwort aus Response entfernen
        savedBenutzer.passwort = undefined;
        
        res.status(201).json(savedBenutzer);
    } catch (error) {
        logger.error('Fehler bei der Registrierung:', error);
        res.status(500).json({ error: 'Fehler bei der Registrierung' });
    }
};

exports.login = async (req, res) => {
    try {
        logger.info('===================== login ENTERED headers', req.headers);
        logger.info('===================== login ENTERED req body', req.body);
        
        const { email, password } = req.body;
        
        const benutzer = await Benutzer.findOne({ email });
        
        if (!benutzer) {
            logger.error('Benutzer nicht gefunden für email:', email);
            return res.status(404).json({ error: 'Benutzer nicht gefunden' });
        }
        
        if (!passwordUtil.checkPassword(password, benutzer.passwort)) {
            logger.error('Falsches Passwort für email:', email);
            return res.status(401).json({ error: 'Falsches Passwort' });
        }
        
        logger.info('Anmeldung erfolgreich für email:', email);
        
        // Passwort aus Response entfernen
        benutzer.passwort = undefined;
        
        res.json({
            message: 'Anmeldung erfolgreich',
            benutzer
        });
    } catch (error) {
        logger.error('Fehler beim Login:', error);
        res.status(500).json({ error: 'Fehler beim Login' });
    }
};

exports.deleteById = async (req, res) => {
    try {
        logger.info('===================== deleteById ENTERED');
        const { id } = req.params;
        
        await Benutzer.findByIdAndDelete(id);
        
        res.json({ message: 'Benutzer erfolgreich gelöscht' });
    } catch (error) {
        logger.error('Fehler beim Löschen des Benutzers:', error);
        res.status(500).json({ error: 'Fehler beim Löschen des Benutzers' });
    }
};

exports.findByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        logger.info('===================== getBenutzer ENTERED email:', email);
        
        const benutzer = await Benutzer.findOne({ email });
        if (!benutzer) {
            return res.status(404).json({ error: 'Benutzer nicht gefunden' });
        }
        
        // Passwort aus Response entfernen
        benutzer.passwort = undefined;
        
        res.json(benutzer);
    } catch (error) {
        logger.error('Fehler beim Finden des Benutzers:', error);
        res.status(500).json({ error: 'Fehler beim Finden des Benutzers' });
    }
};

exports.adminUpdatePassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        logger.info('===== adminUpdatePassword ENTERED email:', email);
        
        const benutzer = await Benutzer.findOne({ email });
        if (!benutzer) {
            logger.error('Benutzer nicht gefunden für email:', email);
            return res.status(404).json({ error: 'Benutzer nicht gefunden' });
        }
        
        // Neues Passwort hashen
        benutzer.passwort = passwordUtil.hashPassword(newPassword);
        await benutzer.save();
        
        logger.info('Passwort erfolgreich geändert für email:', email);
        res.json({ message: 'Passwort erfolgreich geändert' });
    } catch (error) {
        logger.error('Fehler beim Ändern des Passworts:', error);
        res.status(500).json({ error: 'Fehler beim Ändern des Passworts' });
    }
};