const db = require('../database').default;

const borrower = {
  getAll: (callback) => db.query('select * from borrower', callback),
  getOne: (id, callback) =>
    db.query('select * from borrower where id_borrower=?', [id], callback),
  add: (borrower, callback) =>
    db.query(
      'insert into borrower (fname,lname,streetaddress) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.streetaddress],
      callback,
    ),
  delete: (id, callback) =>
    db.query('delete from borrower where id_borrower=?', [id], callback),
  update: (id, borrower, callback) =>
    db.query(
      'update borrower set fname=?,lname=?, streetaddress=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetaddress, id],
      callback,
    ),
};
module.exports = borrower;
