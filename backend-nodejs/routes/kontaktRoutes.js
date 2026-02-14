const express = require('express');
const router = express.Router();
const kontaktController = require('../controllers/kontaktController');

router.post('/mailanempfaenger', kontaktController.kontaktDatenAnEmpfaengerSenden);

module.exports = router;