const express = require('express');
const router = express.Router();
const benutzerController = require('../controllers/benutzerController');

router.post('/register', benutzerController.register);
router.post('/login', benutzerController.login);
router.delete('/deletebyid/:id', benutzerController.deleteById);
router.get('/findbyemail/:email', benutzerController.findByEmail);
router.post('/admin/update-password', benutzerController.adminUpdatePassword);

module.exports = router;