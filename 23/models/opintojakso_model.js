const db = require('../database').default;

const opintojakso = {
  getAll: (callback) => db.query('select * from opintojakso', callback),
  getOne: (id, callback) =>
    db.query('select * from opintojakso where idOpintojakso=?', [id], callback),
  add: (opintojakso, callback) =>
    db.query(
      'insert into opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback,
    ),
  delete: (id, callback) =>
    db.query('delete from opintojakso where idOpintojakso=?', [id], callback),
  update: (id, opintojakso, callback) =>
    db.query(
      'update opintojakso  set Koodi=?,Laajuus=?, Nimi=? where idOpintojakso=?',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback,
    ),
};
module.exports = opintojakso;
