const express = require('express');
const router = express.Router();
const opintojaksoController = require('../controllers/opintojaksoController');

router.get('/', opintojaksoController.getAllOpintojaksos);

router.get('/:id', opintojaksoController.getOneOpintojakso);

router.post('/', opintojaksoController.addOpintojakso);

router.delete('/:id', opintojaksoController.deleteOpintojakso);

router.put('/:id', opintojaksoController.updateOpintojakso);

module.exports = router;
