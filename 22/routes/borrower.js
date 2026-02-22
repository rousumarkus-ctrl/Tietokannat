const express = require('express');
const router = express.Router();
const borrowerController = require('../controllers/borrowerController');

router.get('/', borrowerController.getAllBorrowers);

router.get('/:id', borrowerController.getOneBorrower);

router.post('/', borrowerController.addBorrower);

router.delete('/:id', borrowerController.deleteBorrower);

router.put('/:id', borrowerController.updateBorrower);

module.exports = router;
