const express = require('express');
const router = express.Router();
const arviointiController = require('../controllers/arviointiController');

router.get('/', arviointiController.getAllArviointis);

router.get('/:id', arviointiController.getOneArviointi);

router.post('/', arviointiController.addArviointi);

router.delete('/:id', arviointiController.deleteArviointi);

router.put('/:id', arviointiController.updateArviointi);

module.exports = router;
