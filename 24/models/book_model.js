const db = require('../database').default;

const book = {
  getAll: (callback) => db.query('select * from book', callback),
  getOne: (id, callback) =>
    db.query('select * from book where id_book=?', [id], callback),
  add: (book, callback) =>
    db.query(
      'insert into book (name,author,isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback,
    ),
  delete: (id, callback) =>
    db.query('delete from book where id_book=?', [id], callback),
  update: (id, book, callback) =>
    db.query(
      'update book set name=?,author=?, isbn=? where id_book=?',
      [book.name, book.author, book.isbn, id],
      callback,
    ),
};
module.exports = book;
