const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoController');
const upload = require('../middleware/upload');

router.post('/save', upload.array('dateien', 10), autoController.saveAuto);
router.get('/findById/:id', autoController.findById);
router.get('/findAll', autoController.findAll);
router.delete('/deletebyid/', autoController.deleteById);

module.exports = router;