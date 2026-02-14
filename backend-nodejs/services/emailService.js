const nodemailer = require('nodemailer');
const otpService = require('./otpService');
const logger = require('../config/logger');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendEmail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        logger.info('E-Mail erfolgreich gesendet an:', mailOptions.to);
    } catch (error) {
        logger.error('Fehler beim Senden der E-Mail:', error);
        throw new Error('Fehler beim Senden der E-Mail');
    }
};

exports.sendOTPEmail = async (email) => {
    try {
        logger.info('===== sendOTPEmail ENTER');
        const otp = otpService.generateOTP(email);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Ihr OTP-Code',
            text: `Ihr OTP-Code lautet: ${otp}`
        };
        
        await this.sendEmail(mailOptions);
    } catch (error) {
        logger.error('Fehler beim Senden des OTP:', error);
        throw error;
    }
};

exports.kontaktDatenAnEmpfaengerSenden = async (kontaktDto) => {
    try {
        logger.info('===== kontaktDatenAnEmpfaengerSenden ENTER', kontaktDto);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMPFAENGER_MAIL,
            subject: `Da Cars: Neue Kontaktanfrage von ${kontaktDto.name}`,
            text: `Guten Tag,\n\n
Sie haben eine neue Kontaktanfrage erhalten. Hier sind die Details:\n\n
Name: ${kontaktDto.name}\n
E-Mail: ${kontaktDto.email}\n
Telefon: ${kontaktDto.telefon}\n
Nachricht:\n${kontaktDto.nachricht}\n\n
Vielen Dank.\n
Ihr dacars Team`
        };
        
        await this.sendEmail(mailOptions);
    } catch (error) {
        logger.error('Fehler beim Senden der Kontakt-E-Mail:', error);
        throw error;
    }
};