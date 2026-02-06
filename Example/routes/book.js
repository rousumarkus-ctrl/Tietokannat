var express = require('express');
const book = require('../book');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(book.getAllBooks());
});

router.get('/:id', (req, res, next) => {
  const toReturn = book.getOneBook(req.params.id);
  if (toReturn) {
    res.json(book.getOneBook(req.params.id));
  } else {
    res.status(404).end();
  }
});

router.get('/:id/:name', (req, res, next) => {
  res.send(req.params.name);
});

router.post('/', (req, res, next) => {
  const { id_book, name, author, isbn } = req.body;
  res.json(book.addBook(id_book, name, author, isbn));
});

module.exports = router;
