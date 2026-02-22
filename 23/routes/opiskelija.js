const express = require('express');
const router = express.Router();
const opiskelijaController = require('../controllers/opiskelijaController');

router.get('/', opiskelijaController.getAllOpiskelijas);

router.get('/:id', opiskelijaController.getOneOpiskelija);

router.post('/', opiskelijaController.addOpiskelija);

router.delete('/:id', opiskelijaController.deleteOpiskelija);

router.put('/:id', opiskelijaController.updateOpiskelija);

module.exports = router;
