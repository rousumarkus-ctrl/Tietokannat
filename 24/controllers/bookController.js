const book = require('../models/book_model');

// Get all books
exports.getAllBooks = (request, response) => {
  book.getAll((err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
};

// Get one book by id
exports.getOneBook = (request, response) => {
  book.getOne(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

// Add new book
exports.addBook = (request, response) => {
  book.add(request.body, (err, dbResult) => {
    console.log(err);
    console.log(dbResult);
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

// Delete book by id
exports.deleteBook = (request, response) => {
  book.delete(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

// Update book by id
exports.updateBook = (request, response) => {
  book.update(request.params.id, request.body, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};
