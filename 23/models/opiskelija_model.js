const db = require('../database').default;

const opiskelija = {
  getAll: (callback) => db.query('select * from opiskelija', callback),
  getOne: (id, callback) =>
    db.query('select * from opiskelija where idOpiskelija=?', [id], callback),
  add: (opiskelija, callback) =>
    db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [
        opiskelija.etunimi,
        opiskelija.sukunimi,
        opiskelija.osoite,
        opiskelija.luokkatunnus,
      ],
      callback,
    ),
  delete: (id, callback) =>
    db.query('delete from opiskelija where idOpiskelija=?', [id], callback),
  update: (id, opiskelija, callback) =>
    db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [
        opiskelija.etunimi,
        opiskelija.sukunimi,
        opiskelija.osoite,
        opiskelija.luokkatunnus,
        id,
      ],
      callback,
    ),
};
module.exports = opiskelija;
