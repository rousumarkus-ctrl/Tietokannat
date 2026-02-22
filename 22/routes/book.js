const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/', bookController.getAllBooks);

// GET one book by id
router.get('/:id', bookController.getOneBook);

// POST new book
router.post('/', bookController.addBook);

// DELETE book by id
router.delete('/:id', bookController.deleteBook);

// PUT (update) book by id
router.put('/:id', bookController.updateBook);

module.exports = router;
