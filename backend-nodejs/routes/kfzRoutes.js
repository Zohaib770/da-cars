const express = require('express');
const router = express.Router();
const kfzController = require('../controllers/kfzController');

router.get('/findall', kfzController.findAll);
router.post('/save', kfzController.save);
router.delete('/deletebyid/:id', kfzController.deleteById);

module.exports = router;