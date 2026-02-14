const express = require('express');
const router = express.Router();
const profilController = require('../controllers/profilController');

router.post('/send-otp', profilController.sendOTP);
router.post('/validate-otp', profilController.validateOTP);

module.exports = router;