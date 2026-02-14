const emailService = require('../services/emailService');
const otpService = require('../services/otpService');
const logger = require('../config/logger');

exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.query;
        logger.info('sendOTP ENTER email:', email);
        
        await emailService.sendOTPEmail(email);
        res.json({ message: 'OTP gesendet an ' + email });
    } catch (error) {
        logger.error('Fehler beim Senden des OTP:', error);
        res.status(500).json({ error: 'Fehler beim Senden des OTP' });
    }
};

exports.validateOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        logger.info('validateOTP ENTER email:', email, 'otp:', otp);
        
        if (otpService.validateOTP(email, otp)) {
            res.json({ message: 'OTP ist gültig' });
        } else {
            res.status(400).json({ error: 'Ungültiger OTP' });
        }
    } catch (error) {
        logger.error('Fehler bei der OTP-Validierung:', error);
        res.status(500).json({ error: 'Fehler bei der OTP-Validierung' });
    }
};